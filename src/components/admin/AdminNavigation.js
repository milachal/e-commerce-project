import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { StyledButton } from '../ui/Button'

const AdminNavigation = () => {

    const history = useHistory()

    const logout = async(e) => {
        e.preventDefault()
        document.cookie = "jwt-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
        history.push('/')
    }

    return (
        <div>
            <Navbar>
                <li>
                    <StyledLink to="/">Home</StyledLink>
                </li>
                <li>
                    <StyledLink to="/products">Products</StyledLink>
                </li>
                <li>
                    <StyledLink to="/admin/add-product">Add new product</StyledLink>
                </li>
                <li>
                    <StyledLink to="/admin/search-user">Search user</StyledLink>
                </li>
                <li>
                    <StyledBtn onClick={logout}>Logout</StyledBtn>
                </li>
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
    align-items: center;
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

const StyledBtn = styled(StyledButton)`
    background-color: red;
    text-align: center;
    margin-left: 0;
    width: 6rem;
`