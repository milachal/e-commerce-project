import React, { useContext } from 'react'
import styled from 'styled-components'
import CartContext from '../../contexts/CartContext'

const CheckoutProductData = () => {

    const { cart } = useContext(CartContext)

    const productSum = (product) => {
        return (product.price.$numberDecimal * product.quantity).toFixed(2)
    }

    return (
        <>
            {cart.products.map(pr => {
                return (
                    <Container key={pr._id} >
                        <Wrapper>
                            <Image alt="product" src={pr.image} />
                        </Wrapper>
                        <div>
                            <h4>{pr.title}</h4>
                            <Wrapper>Price: 
                                <NumbersContainer>
                                    {productSum(pr)}
                                </NumbersContainer>
                            </Wrapper>
                            <Wrapper>Quantity: 
                                <NumbersContainer>
                                    {pr.quantity}
                                </NumbersContainer>
                            </Wrapper>
                        </div>
                    </Container>
                )
            })}
        </>
    )
}

export default CheckoutProductData

const Container = styled.div`
    display: flex;
`

const Wrapper = styled.span`
    padding-top: 0.5rem;
    display: block;
`

const NumbersContainer = styled.span`
    font-weight: bold;
    margin-left: 1rem;
`

const Image = styled.img`
    padding: 1rem;
    max-width: 8rem;
`

