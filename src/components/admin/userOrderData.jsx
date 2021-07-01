import React from 'react';
import styled from 'styled-components';
import CheckoutProductData from '../cart/checkoutProductData';
import ChangeOrderStatus from './changeOrderStatus';

const UserOrderData = ({ orders }) => {
  const formatDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString('bg-BG');
  };

  return (
    <div>
      {orders.map((order) => (
        <Container key={order._id}>
          <h3>
            #
            {order._id}
          </h3>
          <span>
            Date:
            {formatDate(order.createdAt)}
          </span>
          <ChangeOrderStatus
            status={order.status}
            orderId={order._id}
          />
          <CheckoutProductData productsData={order.products} />
        </Container>
      ))}
    </div>
  );
};

export default UserOrderData;

const Container = styled.div`
    border-bottom: 1px solid gray;

`;
