import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const AdminNavigation = () => {
    return (
        <div>
            <Navbar>
                <li>
                    <StyledLink to="/">Home</StyledLink>
                </li>
                <StyledLink to="/admin/add-product">Add new product</StyledLink>
            </Navbar>
        </div>
    )
}

export default AdminNavigation

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
const StyledLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    &:active{
        color: #fff;
    }
`