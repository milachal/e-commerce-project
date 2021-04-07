import React from 'react'
import styled from 'styled-components'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'

const OrderCompleted = () => {
    return (
        <>
            <Navigation />
            <MessageContainer>
                <h2>Thank you for your order! You'll be contacted shortly. </h2>
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