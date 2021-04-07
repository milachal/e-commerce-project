import React, { useState } from 'react'
import styled from 'styled-components'
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

    console.log(order)
    const fetchOrders = async () => {
        const { data } = await authAPI.get(`/order/${id}`)
        console.log(data, 'data')
        setOrder(data[0].products)
        setLoading(false)
    }

    useAuth(fetchOrders, () => {
        setLoading(false)
        history.push('/account/login')
    })
  

    return(
        <div>
            {loading ? <Spinner /> : (
                <CheckoutProductData productsData={order} />
            )}
        </div>
    )
}

export default OrderPage