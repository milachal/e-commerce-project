import React from 'react'
import styled from 'styled-components'
import authAPI from '../../api/axios'
import { StyledButton } from '../ui/Button'

const DeleteAccount = () => {

    const deleteAccount = async () => {
        await authAPI.delete('account/delete')
    }

    return (
        <Container>
            <h2>Delete account</h2>
            <RedButton onClick={deleteAccount}>Delete</RedButton>
        </Container>
    )
}

export default DeleteAccount

const Container = styled.div`
    margin-left: 5rem;
    display: inline-block;
    @media only screen and (max-width: 768px) {
        display: block;
        margin-left: 3rem;
    }
`

const RedButton = styled(StyledButton)`
    margin: 0;
    max-width: 8rem;
    background-color: red;
`