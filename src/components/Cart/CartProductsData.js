import React from 'react'
import styled from 'styled-components'
import ProductQuantity from './ProductQuantity'
import Delete from '../../images/icons/delete.svg'

const CartProductsData = ({ cartProducts, updateTotal, deleteCartProduct }) => {
    return (
        <>
            {cartProducts.map((product, index) => {
                return (
                    <CartWrapper key={index}>
                        <span>
                            <Image alt="product" src={product.image} />
                        </span>
                        <Description>
                            <h4>{product.title}</h4>
                            <p>{`${product.price}lv`}</p>
                            <p>{product.description}</p>
                            <ProductQuantity 
                                quantity={product.quantity}
                                id={product._id}
                                updateTotal={updateTotal}
                            />
                        </Description>
                        <span>
                            <StyledBtn onClick={() => deleteCartProduct(product._id)} >
                                <Icon src={Delete} alt="delete-icon" />
                            </StyledBtn>
                        </span>
                    </CartWrapper>
                )
            })}
        </>
    )
}

const CartWrapper = styled.div`
    display: flex;
`

const Image = styled.img`
    max-width: 30rem;
    max-height: 20rem;
    padding: 1rem;
`

const Description = styled.div`
    max-width: 30rem;
`

const Icon = styled.img`
    width: 1.5rem;
    cursor: pointer;
    transition: transform .5s ease;
    &:hover {
        transform: scale(1.5);
    }
`

const StyledBtn = styled.button`
    border: none;
    padding: 0;
`

export default CartProductsData