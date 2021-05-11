import React, { useContext } from 'react'
import styled from 'styled-components'
import { NavLink, useHistory, useRouteMatch } from 'react-router-dom'
import AuthContext from '../../contexts/AuthContext'
import CartContext from '../../contexts/CartContext'

const AccountMenu = () => {

    const { setIsLoggedIn } = useContext(AuthContext)
    const { setCart } = useContext(CartContext)
    const { url } = useRouteMatch()
    const history = useHistory()

    const logoutUser = async(e) => {
        document.cookie = "jwt-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
        setIsLoggedIn(false)
        setCart({
            count: 0,
            products: []
        })
        history.push('/')
    }
    return (
        <Container>
            <LinksContainer>
                <h3>My account</h3>
                <li>
                    <StyledLink activeClassName="any" exact to={url}>My account</StyledLink>
                </li>
                <li>
                    <StyledLink activeClassName="any" to={`${url}/edit`}>Edit your profile</StyledLink>
                </li>
                <li>
                    <StyledLink activeClassName="any" to={`${url}/orders/history`}>My orders</StyledLink>
                </li>
                <li>Contact us</li>
                <li>
                    <LogoutButton onClick={logoutUser}>Log out</LogoutButton>
                </li>
            </LinksContainer>
        </Container>
    )
}

export default AccountMenu

const LogoutButton = styled.span`
    cursor: pointer;
`

const Container = styled.div`
        margin: 0 1rem 1rem 1rem;
        display: inline-block;
        font-size: 20px;  
    `
 const StyledLink = styled(NavLink)`
        /* text-decoration: $props = props.active ? "underline" : "none"}; */
        text-decoration: none;
        color: #000;
        /* &.active {
            text-decoration: underline;
        } */
        &:hover {
            color: #555353;
        }
        /* &.active {
            text-decoration: underline;
        } */
        &.${props => props.activeClassName} {
            border-bottom: 1px solid gray;
        }
    `
    
    const LinksContainer = styled.ul`
        list-style-type: none;
    `