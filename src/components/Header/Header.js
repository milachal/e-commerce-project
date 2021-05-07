import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import User from '../../images/icons/user.svg'
import Cart from '../../images/icons/shopping-cart.svg'
import SearchBar from './SearchBar'
import NotificationBadge from '../ui/NotificationBadge'
import CartCountContext from '../../contexts/CartCountContext'

const Header = () => {

    const { cartCount } = useContext(CartCountContext)

    return(
        <StyledHeader>
            <SearchBar />
            <AccountContainer>
                <Link to="/account/me">  
                    <Icon src={User} alt="user-icon" />
                </Link> 
            </AccountContainer> 
            <span>
                <Link to="/cart">
                    <CartContainer>
                        <Icon src={Cart} alt="cart-icon" />     
                        <NotificationBadge>
                            {cartCount}
                        </NotificationBadge>
                    </CartContainer>
                </Link>
            </span>
            <div>
            </div>
        </StyledHeader>
    )
}

export default Header;

const StyledHeader = styled.header`
    margin: 3rem;
`

const AccountContainer = styled.span`
    float: right;
`

const CartContainer = styled.div`
    position: relative;
    float: right;
`

const Icon = styled.img`
    width: 2rem;
    float: right;
    cursor: pointer;
    margin: 0.8rem;
`
