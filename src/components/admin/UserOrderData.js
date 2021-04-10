import React from 'react'
import styled from 'styled-components'
import CheckoutProductData from '../Cart/CheckoutProductData'

const UserOrderData = ({ orders }) => {

    const formatDate = date => {
        const newDate = new Date(date)
        return newDate.toLocaleDateString('bg-BG')
    }

    return (
        <div>
            {orders.map((order, index) => {
                return (
                    <Container>
                        <span key={index}>
                            <h3># {order._id}</h3>
                            <span>Date: {formatDate(order.createdAt)}</span>
                            <CheckoutProductData productsData={order.products} />
                        </span>
                    </Container>
                )
            })}
        </div>
    )
}

const Container = styled.div`
    border-bottom: 1px solid gray;

`

export default UserOrderData