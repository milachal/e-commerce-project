import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Products from '../Products/Products'
import AdminNavigation from './AdminNavigation'
import SearchBar from '../Header/SearchBar'
import Plus from '../../images/icons/plus.svg'

const AdminPage = ({ login, userStatus}) => {
    
    return (
        <>
            <div>
                <AdminNavigation />
                <SearchBar />
            <span>
                <StyledLink to="/admin/add-product">
                        <Icon src={Plus} alt="add-icon" />
                </StyledLink>
            </span>
                <Products
                    userStatus={userStatus}
                    login={login}
                />
            </div> 
        </>
    )
}

export default AdminPage

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    &:active{
        color: #fff;
    }
`

const Icon = styled.img`
    width: 2rem;
    cursor: pointer;
    margin: 0.8rem 0 0 0.8rem;
`