import React from 'react'
import styled from 'styled-components'
import CheckoutProductData from '../Cart/CheckoutProductData'
import ChangeOrderStatus from './ChangeOrderStatus'

const UserOrderData = ({ orders }) => {

    const formatDate = date => {
        const newDate = new Date(date)
        return newDate.toLocaleDateString('bg-BG')
    }

    return (
        <div>
            {orders.map((order, index) => {
                return (
                    <Container key={index}>
                        <h3># {order._id}</h3>
                        <span>Date: {formatDate(order.createdAt)}</span>
                        <ChangeOrderStatus 
                            status={order.status} 
                            orderId={order._id}    
                        />
                        <CheckoutProductData productsData={order.products} />
                    </Container>
                )
            })}
        </div>
    )
}

export default UserOrderData

const Container = styled.div`
    border-bottom: 1px solid gray;

`
