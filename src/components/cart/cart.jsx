import React, {
  useState, useContext, useEffect, useCallback,
} from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import authAPI from '../../api/axios';
import Spinner from '../ui/spinner';
import Navigation from '../navigation/navigation';
import Header from '../header/header';
import CartProductsData from './cartProductsData';
import CartFooter from './cartFooter';
import Footer from '../footer/footer';
import CartContext from '../../contexts/cartContext';
import AuthContext from '../../contexts/authContext';

const Cart = () => {
  const { cart, fetchCart } = useContext(CartContext);
  const { isUserLoggedIn, isPageLoading } = useContext(AuthContext);
  const [total, setTotal] = useState(0);
  const history = useHistory();

  const calculateTotal = (products) => {
    const totalPrice = products.reduce((acc, currentProduct) => {
      const newTotal = acc + (currentProduct.price.$numberDecimal * currentProduct.quantity);
      return newTotal;
    }, 0);
    return totalPrice.toFixed(2);
  };

  const updateTotal = useCallback((products) => {
    setTotal(calculateTotal(products));
  }, []);

  useEffect(() => {
    if (!isPageLoading && !isUserLoggedIn) {
      history.push('/account/login');
    }
    if (cart.products && cart.products.length === 0) {
      //?
    } else {
      updateTotal(cart.products);
    }
  }, [isPageLoading, isUserLoggedIn, history, cart.products, updateTotal]);

  const deleteCartProduct = async (id) => {
    await authAPI.delete('/cart', {
      data: {
        _id: id,
      },
    });
    fetchCart();
  };
  return (

    <div>
      <Navigation />
      <Header />
      <CartContainer>
        {isPageLoading ? <Spinner /> : (
          <>
            <Heading>Your cart</Heading>
            <CartProductsData
              cartProducts={cart.products}
              updateTotal={updateTotal}
              deleteCartProduct={deleteCartProduct}
            />
          </>
        )}
      </CartContainer>
      {cart.products && cart.products.length === 0 ? (
        <Text>
          Your cart is empty. Check our
          <StyledLink href="/products">products</StyledLink>
          .
        </Text>
      ) : (
        <CartFooter total={total} />
      )}
      <Footer />
    </div>
  );
};

export default Cart;

const Heading = styled.h1`
    margin-left: 2rem;
`;

const CartContainer = styled.div`
    border: 1px solid #d6d6d6;
    padding: 2rem;
`;

const Text = styled.p`
    margin: 4rem;
    font-size: 18px;

`;

const StyledLink = styled.a`
    text-decoration: none;
    color: red;
`;
