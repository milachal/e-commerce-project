import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory, Link } from 'react-router-dom'
import { useAuth } from '../../hooks/index'
import authAPI from '../../api/axios'
import Spinner from '../ui/Spinner'
import { StyledButton } from '../ui/Button'

const MyOrders = () => {
    const [loading, setLoading] = useState(true)
    const [orders, setOrders] = useState([])
    const [emptyOrdersList, setEmptyOrdersList] = useState(false)
    const history = useHistory()

    //set text for empty orders list
    //set total
    const fetchOrders = async () => {
        const { data } = await authAPI.get('/order')
        if (data && data.length === 0) {
            setLoading(false)
            setEmptyOrdersList(true)
        }
        setOrders(data)
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

    return (
        <div>
            <Title>My orders</Title>
            {loading ? <Spinner /> : (
                orders.map((obj) => {
                    return (
                        <OrdersContainer key={obj._id}>
                            <h3>Order #: {obj._id}</h3>
                            <p>Date: {formatDate(obj.createdAt)}</p>
                            <h3>Total: </h3>
                            <Link to={`/order/history/${obj._id}`}>
                                <StyledBtn>Preview</StyledBtn>
                            </Link>
                        </OrdersContainer>
                    )
                })
            )}
        </div>
    )
}

const Title = styled.h2`
    margin-left: 3rem;
    display: inline-block;
`

const OrdersContainer = styled.div`
    margin-left: 3rem;
`

const StyledBtn = styled(StyledButton)`
    margin-left: 0;
    width: 10rem;
`
export default MyOrders