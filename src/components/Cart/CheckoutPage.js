import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import authAPI from '../../api/axios'
import { useAuth } from '../../hooks'
import { StyledButton } from '../ui/Button'
import CheckoutProductData from './CheckoutProductData'
import Spinner from '../ui/Spinner'

const CheckoutPage = () => {

    const [productsData, setProductsData] = useState([])
    const [loading, setLoading] = useState(true)
    const history = useHistory()

    const fetchProducts = async () => {
        const { data } = await authAPI.get('/cart')
        if (data && data.length === 0) {
            history.push('/account/me/orders/history')
        }
        setProductsData(data)
        setLoading(false)
    }
    
    useAuth(fetchProducts, () => {
        setLoading(false)
        history.push('/account/login')
    })

    const orderTotal = (products) => {
        const total = products.reduce((acc, currentPr) => {
            console.log(currentPr.quantity, 'quantity')
            return acc + (currentPr.price * currentPr.quantity)
        }, 0)
        return total.toFixed(2)
    }

    const total = orderTotal(productsData)

    const orderHandler = async (e) => {
        e.preventDefault()
        const response = await authAPI.post('/order', { total })
        if (response.status === 200) {
            history.push('/order/completed')
        }
    }

    return (
        <>
            {loading ? <Spinner /> : (
              <>
                <h2>Order Summary</h2>
                <div>    
                    <TotalWrapper>total: {orderTotal(productsData)}</TotalWrapper>
                    <CheckoutProductData productsData={productsData} />
                    <StyledBtn
                        type="submit"
                        onClick={orderHandler}
                    >
                        Order
                    </StyledBtn>
            </div>
              </>  
            )}
        </>
    )
}

const TotalWrapper = styled.div`
    padding: 2rem;
`

const StyledBtn = styled(StyledButton)`
    background-color: red;
    max-width: 30%;
    margin-left: 2rem;
    //hover doesnt work
    &:hover{
        opacity: 0.8;
    }
`

export default CheckoutPage