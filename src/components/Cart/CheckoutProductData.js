import React from 'react'
import styled from 'styled-components'

const CheckoutProductData = ({ productsData }) => {
    const productSum = (product) => {
        return product.price.$numberDecimal * product.quantity
    }

    return (
        <>
            {productsData.map(pr => {
                return (
                    <Container key={pr._id} >
                        <Wrapper>
                            <Image alt="product" src={pr.image} />
                        </Wrapper>
                        <div>
                            <h4>{pr.title}</h4>
                            <Wrapper>price: {productSum(pr)}</Wrapper>
                            <Wrapper>quantity: {pr.quantity}</Wrapper>
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


const Image = styled.img`
    padding: 1rem;
    max-width: 8rem;
`

