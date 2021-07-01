import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import authAPI from '../../api/axios';
import Navigation from '../navigation/navigation';
import Header from '../header/header';
import AddToCartButton from '../cart/addtoCartButton';
import Spinner from '../ui/spinner';
import CartContext from '../../contexts/cartContext';
import AuthContext from '../../contexts/authContext';

const ProductPage = () => {
  const [product, setProduct] = useState({});
  const [price, setPrice] = useState('');
  const [loading, setLoading] = useState(true);
  const { fetchCart } = useContext(CartContext);
  const { isUserLoggedIn, userStatus } = useContext(AuthContext);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`http://localhost:3001/api/products/${id}`);
        setLoading(false);
        setProduct(data);
        setPrice(data.price);
      } catch (e) {
        return e;
      }
    })();
  }, [id, loading]);

  const addToCart = async () => {
    if (!isUserLoggedIn) {
      history.push('/account/login');
    }
    await authAPI.post('/cart', { products: id });
    fetchCart();
  };
  return (
    <div>
      <Navigation />
      <Header />
      {loading ? <Spinner /> : (
        <>
          <ImgContainer>
            <Img src={product.image} alt={product._id} />
          </ImgContainer>
          <InfoContainer>
            <h2>{product.title}</h2>
            <h4>{`${price.$numberDecimal} lv`}</h4>
            <p>{product.description}</p>
            <AddToCartButton onClick={addToCart} />
          </InfoContainer>
        </>
      )}
    </div>
  );
};

export default ProductPage;

const ImgContainer = styled.div`
    text-align: center;
    width: 50%;
    display: inline-block;
`;

const Img = styled.img`
    max-width: 20rem;
    transition: transform .5s ease;
    &:hover {
        transform: scale(1.5);
    }
    @media screen and (max-width: 768px) {
        margin-left: 3rem;
    }
`;
const InfoContainer = styled.div`
    display: inline-block;
    text-align: left;
    vertical-align: top;
    width: 50%;
    margin-right: 3rem;
    max-width: 300px;

    @media screen and (max-width: 768px) {
        display: block;
        margin-left: 3rem;
    }
`;
