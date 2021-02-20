import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



const Navigation = () => {
    
    return (
        <div>
            <Navbar>
                <NavItem>
                    <StyledLink to='/'>Home</StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink to='/products'>Products</StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink to='#'>My Account</StyledLink>
                </NavItem>
                <NavItem>Contact us</NavItem>
                <NavItem>About us</NavItem>
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
`
const NavItem = styled.li`
    color: white;
    cursor: pointer;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
`

export default Navigation;