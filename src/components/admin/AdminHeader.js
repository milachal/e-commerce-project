import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import SearchBar from '../Header/SearchBar'
import Plus from '../../images/icons/plus.svg'
import User from '../../images/icons/user.svg'

const AdminHeader = () => {
    return (
        <div>
            <SearchBar />
            <IconWrapper>
            <span>
                <Link to="/admin/account/me">  
                    <Icon src={User} alt="user-icon" />
                </Link> 
            </span> 
                <StyledLink to="/admin/add-product">
                        <Icon src={Plus} alt="add-icon" />
                </StyledLink>
            </IconWrapper>
        </div>
    )
}

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    &:active{
        color: #fff;
    }
`

const IconWrapper = styled.span`
    float: right;
    margin-right: 3rem;
`
const Icon = styled.img`
    width: 2rem;
    cursor: pointer;
    margin: 0.8rem 0 0 0.8rem;
`

export default AdminHeader