import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PersonalInfo = ({
  name, email, link,
}) => (
  <Container>
    <h2>
      Hello,
      {' '}
      {name}
    </h2>
    <h3>Personal information</h3>
    <p>{name}</p>
    <p>{email}</p>
    <StyledLink to={link}>
      <Text>Edit</Text>
    </StyledLink>
  </Container>
);

export default PersonalInfo;

const Container = styled.div`
    vertical-align: top;
    margin-left: 5rem;
    display: inline-block;
    @media only screen and (max-width: 780px) {
        display: block; 
        margin-left: 3rem;  
    }
`;

const Text = styled.div`
    display: inline-block;
    background-color: #000;
    text-transform: uppercase;
    padding: 12px 20px;
    width: 80%;
    max-width: 150px; 
    border-radius: 5px;
    text-align: center;
    cursor: pointer;    
    &:hover{
        opacity: 0.8;
    }
`;

const StyledLink = styled(Link)`
    font-size: 13px;
    color: #fff;
    z-index: 1;
    text-decoration: none;

`;
