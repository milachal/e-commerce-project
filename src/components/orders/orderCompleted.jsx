import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navigation from '../navigation/navigation';
import Footer from '../footer/footer';
import { StyledButton } from '../ui/button';

const OrderCompleted = () => (
  <>
    <Navigation />
    <MessageContainer>
      <Message>
        Thank you for your order!
        <br />
        You'll be contacted shortly.
      </Message>
      <Link to="/account/me">
        <StyledBtn>Back to profile</StyledBtn>
      </Link>
    </MessageContainer>
    <Footer />
  </>
);

export default OrderCompleted;

const MessageContainer = styled.div`
    padding: 2rem;
    margin-left: 2rem;
    text-align: center;
`;

const Message = styled.h2`
    margin-left: 0;
    line-height: 1.6;
`;

const StyledBtn = styled(StyledButton)`
    margin-left: 0;
    max-width: 10rem;
`;
