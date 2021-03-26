import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navigation = () => {
    
    return (
        <div>
            <Navbar>
                <li>
                    <StyledLink to='/'>Home</StyledLink>
                </li>
                <li>
                    <StyledLink to='/products'>Products</StyledLink>
                </li>
                <li>
                    <StyledLink to='/account/me'>My Account</StyledLink>
                </li>
                <li>About us</li>
            </Navbar>
        </div>
    )
}

const Navbar = styled.ul`
    background: black;
    margin: 0;
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
    padding: 15px;
    width: 100%;
    text-transform: uppercase;
    color: #fff;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    cursor: pointer;
`

export default Navigation;