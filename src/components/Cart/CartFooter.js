import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { StyledButton } from '../ui/Button'


const CartFooter = ({ total }) => {
    return (
        <>
            <TotalWrapper>Total: {total}</TotalWrapper>
            <StyledLink to="/cart/checkout">
                <StyledButton>Checkout</StyledButton>
            </StyledLink>
        </>
    )
}

const TotalWrapper = styled.span`
    margin: 3rem;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #ffffff;
`

export default CartFooter