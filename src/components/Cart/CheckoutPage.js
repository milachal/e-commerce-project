import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import authAPI from '../../api/axios'
import { StyledButton } from '../ui/Button'
import CheckoutProductData from './CheckoutProductData'
import CartContext from '../../contexts/CartContext'
import AuthContext from '../../contexts/AuthContext'

const CheckoutPage = () => {

    const { cart, setCart } = useContext(CartContext)
    const { isUserLoggedIn, isPageLoading } = useContext(AuthContext)
    const history = useHistory()

    useEffect(() => {
        if (!isPageLoading && !isUserLoggedIn) {
            history.push('/account/login')
        }
        if (cart.products && cart.products.length === 0) {
            history.push('/account/me/orders/history')
        }
    }, [isUserLoggedIn, isPageLoading, history, cart.products])
    
    const orderTotal = (products) => {
        const total = products.reduce((acc, currentPr) => {
            return acc + (currentPr.price.$numberDecimal * currentPr.quantity)
        }, 0)
        return total.toFixed(2)
    }

    const total = orderTotal(cart.products)

    const orderHandler = async (e) => {
        e.preventDefault()
        const response = await authAPI.post('/order', { total })
        if (response.status === 200) {
            history.push('/order/completed')
            setCart({
                count: 0,
                products: []
            })
        }
    }

    return (
        <>
            <Heading>Order Summary</Heading>
                <div>    
                    <CheckoutProductData />
                    <TotalWrapper>Total: 
                        <NumbersContainer>
                            {orderTotal(cart.products)}
                        </NumbersContainer>
                    </TotalWrapper>
                    <StyledBtn
                        type="submit"
                        onClick={orderHandler}
                    >
                        Order
                    </StyledBtn>
                </div>
        </>
    )
}

export default CheckoutPage

const Heading = styled.h2`
    margin-left: 2rem;
    font-weight: 800;
`

const TotalWrapper = styled.div`
    padding: 2rem;
`

const NumbersContainer = styled.span`
    font-weight: bold;
    margin-left: 1rem;
`

const StyledBtn = styled(StyledButton)`
    background-color: red;
    max-width: 15rem;
    margin-left: 2rem;
    &:hover{
        opacity: 0.8;
    }
`

