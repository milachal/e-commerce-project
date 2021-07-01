import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ProductQuantity from './productQuantity';
import Delete from '../../images/icons/delete.svg';
import CartContext from '../../contexts/cartContext';

const CartProductsData = ({ updateTotal, deleteCartProduct }) => {
  const { cart } = useContext(CartContext);

  return (
    <>
      {cart.products.map((product) => (
        <CartWrapper key={product._id}>
          <StyledLink to={`/product/${product._id}`}>
            <span>
              <Image alt="product" src={product.image} />
            </span>
          </StyledLink>
          <Description>
            <h4>{product.title}</h4>
            <p>{`${product.price.$numberDecimal}lv`}</p>
            <p>{product.description}</p>
            <ProductQuantity
              quantity={product.quantity}
              id={product._id}
              updateTotal={updateTotal}
            />
          </Description>
          <span>
            <StyledBtn onClick={() => deleteCartProduct(product._id)}>
              <Icon src={Delete} alt="delete-icon" />
            </StyledBtn>
          </span>
        </CartWrapper>
      ))}
    </>
  );
};

export default CartProductsData;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #000;
    cursor: pointer;
`;

const CartWrapper = styled.div`
    display: flex;
`;

const Image = styled.img`
    max-width: 30rem;
    max-height: 20rem;
    padding: 1rem;
`;

const Description = styled.div`
    max-width: 30rem;
`;

const Icon = styled.img`
    width: 1.5rem;
    cursor: pointer;
    transition: transform .5s ease;
    &:hover {
        transform: scale(1.5);
    }
`;

const StyledBtn = styled.button`
    border: none;
    padding: 0;
`;
