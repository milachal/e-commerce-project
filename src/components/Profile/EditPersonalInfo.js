import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import authAPI from '../../api/axios'
import { StyledButton } from '../ui/Button'

const EditPersonalInfo = (props) => {
    const history = useHistory()
    const saveEdits = async () => {
        await authAPI.patch('account/edit', { 
            name: props.name, 
            email: props.email 
        })
        history.push(props.url)
    }

    const deleteAccount = async () => {
        await authAPI.delete('account/delete')
    }

    return (
        <Container>
            <h1>Edit your personal information</h1>
            <InputContainer>
                <Input 
                    type="text" 
                    name="name" 
                    placeholder="Your name" 
                    value={props.nameValue}
                    onChange={props.onChangeName}    
                />
            </InputContainer>
            <InputContainer>
                <Input 
                    type="email" 
                    name="email" 
                    placeholder="email" 
                    value={props.emailValue}
                    onChange={props.onChangeEmail}    
                />
            </InputContainer>
                {/* <InputContainer>    
                    <Input 
                        type="password" 
                        name="password" 
                        placeholder="password" 
                        value={props.password}
                        onChange={props.onChangePassword}    
                    />
                </InputContainer> */}
                <Button type="submit" onClick={saveEdits}>Save</Button>
                <div>
                    <h3>Delete account</h3>
                    <RedButton onClick={deleteAccount}>Delete</RedButton>
                </div>
        </Container>
    )
}

export default EditPersonalInfo

const Container = styled.div`
    margin: 3rem;
`

const InputContainer = styled.div`
    margin: 1rem 0 1rem 0; 
`

const Input = styled.input`
    width: 80%;
    max-width: 300px;
    border: 1px solid #ccc;
    padding: 12px 20px;
    margin: 0 2rem 0 0;
    border-radius: 5px;
    box-shadow: 0 0 5px #575555;
`

const Button = styled(StyledButton)`
    margin: 0;
    max-width: 150px;
`
const RedButton = styled(StyledButton)`
    margin: 0;
    max-width: 150px;
    background-color: red;
`