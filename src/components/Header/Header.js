import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import User from '../../images/user.svg'
import Cart from '../../images/shopping-cart.svg'
import SearchBar from './SearchBar'

const Header = () => {

    return(
        <StyledHeader>
            <SearchBar />
            <span>
                <Link to="/account/">  
                    <Icon src={User} alt="user-icon" />
                </Link> 
            </span> 
            <span>
                <Icon src={Cart} alt="cart-icon" />
            </span>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    margin: 3rem;
`

const Icon = styled.img`
    width: 2rem;
    float: right;
    cursor: pointer;
    margin: 0.8rem;
`
export default Header;