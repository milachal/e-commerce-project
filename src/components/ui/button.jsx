import React from 'react';
import styled from 'styled-components';

const Button = ({ onClick, type, children }) => (
  <StyledButton type={type} onClick={onClick}>{children}</StyledButton>
);

export default Button;

export const StyledButton = styled.button`
    color: #ffffff;
    background-color: #242424;
    border: none;
    font-size: 13px;
    font-weight: bold;
    text-transform: uppercase;
    padding: 12px 20px;
    width: 80%;
    max-width: 300px;
    margin-left: 3rem;  
    border-radius: 5px;
    cursor: pointer;    
    &:hover{
        opacity: 0.8;
    }
`;
