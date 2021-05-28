import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import authAPI from '../../api/axios'
import { StyledButton } from '../ui/Button'
import DeletePopUp from '../admin/DeletePopUp'
import AuthContext from '../../contexts/AuthContext'

const DeleteAccount = () => {
    
    const { setIsUserLoggedIn, setUserStatus } = useContext(AuthContext)
    const [showPopUp, setShowPopUp] = useState(false)
    const history = useHistory()
    const deleteAccount = async () => {
        await authAPI.delete('account/delete')
        document.cookie = "jwt-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
        setIsUserLoggedIn(false)
        setUserStatus('')
        history.push('/')
    }

    return (
        <Container>
            <h2>Delete account</h2>
            {showPopUp ? (
                <PopUpWrapper>
                    <DeletePopUp 
                        text={'Are you sure you want to delete your account?'} 
                        deleteFunc={deleteAccount}
                        closePopUp={() => setShowPopUp(false)}
                    />
                </PopUpWrapper>
            ): <RedButton onClick={() => setShowPopUp(true)}>Delete</RedButton>}
        </Container>
    )
}

export default DeleteAccount

const Container = styled.div`
    vertical-align: top;
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

const PopUpWrapper = styled.div`
    text-align: center;
    border: 1px solid #6666;
`