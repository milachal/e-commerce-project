import React from 'react'
import styled from 'styled-components'
import CheckoutProductData from '../Cart/CheckoutProductData'

const UserOrderData = ({ orders }) => {
    return (
        <div>
            {orders.map(order => {
                return (
                    <>
                        <span>
                            <CheckoutProductData productsData={order} />
                        </span>
                    </>
                )
            })}
        </div>
    )
}

export default UserOrderData