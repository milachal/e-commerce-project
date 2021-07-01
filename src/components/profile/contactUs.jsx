import React from 'react';
import styled from 'styled-components';

const ContactUs = () => (
  <Container>
    <h2>Contact us</h2>
    <p>
      Mobile:
      <StyledLink href="tel:00000000">00000000</StyledLink>
    </p>
    <p>
      email:
      <StyledLink href="mailto:support@example.com">support@example.com</StyledLink>
    </p>
  </Container>
);

export default ContactUs;

const Container = styled.div`
    display: inline-block;
    margin-left: 5rem;
    vertical-align: top;
`;

const StyledLink = styled.a`
    text-decoration: none;
    color: red;
    font-weight: bold;
    &:hover {
        color: black;
    }
`;
