import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'
import { StyledButton } from '../ui/Button'

const OrderCompleted = () => {
    return (
        <>
            <Navigation />
            <MessageContainer>
                <h2>Thank you for your order! You'll be contacted shortly. </h2>
                <Link to='/account/me'>
                    <StyledButton>Back to profile</StyledButton>
                </Link>
            </MessageContainer>
            <Footer />
        </>
    )
}

const MessageContainer = styled.div`
    padding: 2rem;
    margin-left: 2rem;
`

export default OrderCompleted