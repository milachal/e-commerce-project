import React, { useState } from 'react'
// import styled from 'styled-components'
import { useParams, useHistory } from 'react-router-dom'
import authAPI from '../../api/axios'
import { useAuth } from '../../hooks'
import Spinner from '../ui/Spinner'
import CheckoutProductData from '../Cart/CheckoutProductData'

const OrderPage = () => {

    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState([])
    const { id } = useParams()
    const history = useHistory()

    const fetchOrders = async () => {
        const { data } = await authAPI.get(`/order/${id}`)
        setOrder(data)
        setLoading(false)
    }

    useAuth(fetchOrders, () => {
        setLoading(false)
        history.push('/account/login')
    })
  
    const formatDate = date => {
        const newDate = new Date(date)
        return newDate.toLocaleDateString('bg-BG')
    }

    return(
        <div>
            {loading ? <Spinner /> : (
                <>
                    <h3>Order # {id}</h3>
                    <h3>Total: {order.total}</h3>
                    <h3>Date: {formatDate(order.createdAt)}</h3>
                    <CheckoutProductData productsData={order.products} />
                </>
            )}
        </div>
    )
}

export default OrderPage