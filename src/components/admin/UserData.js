import React from 'react'
import styled from 'styled-components'
import UserOrderData from './UserOrderData'

const UserData = ({ name, status, orders }) => {
    return (
        <Container>
            <span>name: {name}</span><br/>
            <span>status: {status}</span>
            <UserOrderData orders={orders} />
        </Container>
    )
}

const Container = styled.div`
    margin: 1rem;
    padding: 2rem;
`
export default UserData
