import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import authAPI from '../../api/axios';
import ProductCard from './productCard';
import Spinner from '../ui/spinner';

const Products = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const searchKeyword = location.search;
  const keyword = new URLSearchParams(searchKeyword.toLowerCase()).get('search');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await authAPI.get('/products');

        if (keyword) {
          setProducts(data.filter((product) => product.title.toLowerCase().includes(keyword)));
        } else {
          setProducts(data);
        }
        setLoading(false);
      } catch (e) {
        return 'Something went wrong. Please try again.';
      }
    };
    fetchProducts();
  }, [keyword, loading]);

  return (
    <div>
      {loading ? <Spinner /> : (
        <Container>
          {products.map((product) => (
            <ProductContainer key={product._id}>
              <ProductCard
                src={product.image}
                title={product.title}
                price={`${product.price.$numberDecimal} lv`}
                id={product._id}
              />
            </ProductContainer>
          ))}
        </Container>
      )}
    </div>
  );
};

export default Products;

const ProductContainer = styled.div`
    display: inline-block;
    width: 20%;
    margin: 0 0.5rem 1rem;
    vertical-align: top;
    
    /* border: 1px solid #c8c8c8; */
    /* box-shadow: 2px 0px 10px 2px rgba(142,142,142,0.75);
    -webkit-box-shadow: 2px 0px 10px 2px rgba(142,142,142,0.75);
    -moz-box-shadow: 2px 0px 10px 2px rgba(142,142,142,0.75); */
    @media only screen and (max-width: 1024px) {
        width: 30%;
    }
    @media only screen and (max-width: 768px) {
        width: 40%;
    }
`;
const Container = styled.div`
    text-align: center;
    margin-top: 20px;
`;
