import React, { useContext } from 'react'
import styled from 'styled-components'
import { NavLink, useHistory, useRouteMatch } from 'react-router-dom'
import AuthContext from '../../contexts/AuthContext'
import CartContext from '../../contexts/CartContext'

const AccountMenu = () => {

    const { setIsUserLoggedIn, setUserStatus } = useContext(AuthContext)
    const { setCart } = useContext(CartContext)
    const { url } = useRouteMatch()
    const history = useHistory()

    const logoutUser = async() => {
        document.cookie = "jwt-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
        setIsUserLoggedIn(false)
        setUserStatus('')
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
                <li>
                    <StyledLink activeClassName="any" to ={`${url}/contact-us`}>Contact us</StyledLink>
                </li>
                <li>
                    <StyledLink activeClassName="any" to={`${url}/delete-account`}>Delete Account</StyledLink>
                </li>
                <li>
                    <LogoutButton onClick={logoutUser}>Log out</LogoutButton>
                </li>
            </LinksContainer>
        </Container>
    )
}

export default AccountMenu

const LogoutButton = styled.div`
    display: inline-block;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    background-color: #000;  
    color: #fff;
    padding: 10px 10px;
    border-radius: 5px;
    margin-top: 1rem; 
    max-width: 8rem;
    width: 80%;
    text-align: center;
`

const Container = styled.div`
        margin: 0 1rem 1rem 1rem;
        display: inline-block;
        font-size: 18px;  
    `
 const StyledLink = styled(NavLink)`
        text-decoration: none;
        color: #000;
        &:hover {
            color: #555353;
        }
        &.${props => props.activeClassName} {
            border-bottom: 1px solid gray;
        }
    `
    
const LinksContainer = styled.ul`
    list-style-type: none;
`