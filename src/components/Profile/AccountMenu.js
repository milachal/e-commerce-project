import React from 'react'
import styled from 'styled-components'
import { NavLink, useHistory, useRouteMatch } from 'react-router-dom'

const AccountMenu = () => {
    
    const { url } = useRouteMatch()
    const history = useHistory()
    const logoutUser = async(e) => {
        e.preventDefault()
        document.cookie = "jwt-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
        history.push('/')
    }
    return (
        <Container>
            <LinksContainer>
                <h3>My account</h3>
                <li>
                    <StyledLink to={url}>My account</StyledLink>
                </li>
                <li>
                    <StyledLink to={`${url}/edit`}>Edit your profile</StyledLink>
                </li>
                <li>
                    <StyledLink to={`${url}/orders/history`}>My orders</StyledLink>
                </li>
                <li>Contact us</li>
                <li>
                    <StyledLink to={`${url}/logout`} onClick={logoutUser}>Log out</StyledLink>
                </li>
            </LinksContainer>
        </Container>
    )
}

export default AccountMenu

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
    `
    
    const LinksContainer = styled.ul`
        list-style-type: none;
    `