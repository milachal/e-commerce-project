import React, { useState } from 'react'
import styled from 'styled-components'
import authAPI from '../../api/axios'
import { StyledButton } from '../ui/Button'
import UserData from './UserData'
import AdminNavigation from './AdminNavigation'

const SearchUser = () => {
    const [userEmail, setUserEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [userStatus, setUserStatus] = useState('')
    const [userOrders, setUserOrders] = useState([])

    const submitHandler = async (e) => {
        e.preventDefault()
        const { data } = await authAPI.post('/admin/user', { email: userEmail })
        setUserName(data.user.name)
        setUserStatus(data.user.status)
        setUserOrders(data.orders)
        console.log(data)
    }

    return (
        <div>
            <AdminNavigation />
            <InputContainer>
                <Input 
                    type="text" 
                    value={userEmail} 
                    onChange={e => setUserEmail(e.target.value)}
                    placeholder="Enter user email" 
                />
            </InputContainer>
           <StyledButton type="submit" onClick={submitHandler}>Search</StyledButton>
           <UserData 
                name={userName} 
                status={userStatus}
                orders={userOrders}
            />
        </div>
    )
}

const InputContainer = styled.div`
    margin: 1rem; 
`

const Input = styled.input`
    width: 50%;
    max-width: 300px;
    border: 1px solid #ccc;
    padding: 7px 10px;
    margin: 0 2rem;
    border-radius: 5px;
    box-shadow: 0 0 5px #575555;
`

export default SearchUser