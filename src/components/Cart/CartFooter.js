import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { StyledButton } from '../ui/Button'


const CartFooter = ({ total }) => {
    return (
        <CartFooterContainer>
            <TotalWrapper>Total: 
                <Total>    
                    {total}
                </Total>
            </TotalWrapper>
            <br/>
            <StyledLink to="/cart/checkout">
                <StyledBtn>Checkout</StyledBtn>
            </StyledLink>
        </CartFooterContainer>
    )
}

export default CartFooter

const CartFooterContainer = styled.div `
    margin: 2rem;   
`

const TotalWrapper = styled.div`
    margin: 1rem;
`

const Total = styled.span`
    font-weight: bold;
    margin-left: 1rem;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #ffffff;
`

const StyledBtn = styled(StyledButton)`
    margin-left: 1rem;
    max-width: 15rem;
`