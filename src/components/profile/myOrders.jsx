import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { useHistory, Link } from 'react-router-dom';
import authAPI from '../../api/axios';
import { StyledButton } from '../ui/button';
import AuthContext from '../../contexts/authContext';

const MyOrders = () => {
  const { isPageLoading, isUserLoggedIn } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const history = useHistory();

  // set total
  useEffect(() => {
    if (!isPageLoading && !isUserLoggedIn) {
      history.push('/account/login');
    }

    const fetchOrders = async () => {
      const { data } = await authAPI.get('/order');
      setOrders(data);
    };
    fetchOrders();
  }, [isPageLoading, isUserLoggedIn, history]);

  const formatDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString('bg-BG');
  };

  return (
    <OrdersWrapper>
      <Title>My orders</Title>
      {orders && orders.length === 0 ? <TextContainer>No orders yet.</TextContainer> : (
        orders.map((obj) => (
          <OrdersContainer key={obj._id}>
            <h3>
              Order #:
              {obj._id}
            </h3>
            <p>
              Date:
              {formatDate(obj.createdAt)}
            </p>
            <h3>
              Total:
              {obj.total.$numberDecimal}
            </h3>
            <Link to={`/order/history/${obj._id}`}>
              <StyledBtn>Preview</StyledBtn>
            </Link>
          </OrdersContainer>
        ))
      )}
    </OrdersWrapper>
  );
};

export default MyOrders;

const OrdersWrapper = styled.div`
    vertical-align: top;
    display: inline-block;
    margin-left: 5rem;
    @media only screen and (max-width: 780px) {
        display: block; 
        margin-left: 0;  
    }
`;

const Title = styled.h2`
    margin-left: 3rem;
    display: inline-block;
`;

const OrdersContainer = styled.div`
    margin: 2rem 3rem;
`;

const TextContainer = styled.div`
    margin-left: 3rem;
`;

const StyledBtn = styled(StyledButton)`
    margin-left: 0;
    width: 10rem;
`;
