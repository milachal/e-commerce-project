import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { StyledButton } from '../ui/Button'
import Navigation from '../Navigation/Navigation'

const SignUp = () => {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [checkbox, setCheckbox] = useState(false)
    const [error, setError] = useState('')

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        if (password !== repeatPassword) {
            return setError('Password doesn\'t match.')
        }
        if (!checkbox) {
            return setError('Please, agree to our terms and conditions.')
        }
        try {
            const { data } = await axios.post('http://localhost:3001/api/signup', { email, name, password })
            console.log(data)
        } catch (error) {
            if (error.response.status === 500) {
                setError('Something went wrong. Please try again.')
            }
            if (error.response.status === 400) {
                setError('Email exists.')
            }
        }
    }

    return (
        <>
            <Navigation />
            <Container>
                <FormContainer>
                    <Header>Sign up</Header>
                    {error ? <Error>{error}</Error> : null}
                    <Input 
                        type="text" 
                        placeholder="Enter email" 
                        name="email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Input 
                        type="text" 
                        placeholder="Enter your name" 
                        name="name" 
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Input 
                        type="password" 
                        placeholder="Enter password" 
                        name="password" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}    
                    />
                    <Input 
                        type="password" 
                        placeholder="Repeat password" 
                        name="password-repeat" 
                        value={repeatPassword}
                        onChange={e => setRepeatPassword(e.target.value)}    
                        
                    />
                    <TextContainer>
                        <input 
                            type="checkbox" 
                            name="terms" 
                            value={checkbox}
                            onChange={e => setCheckbox(e.target.checked)}    
                        />
                        By creating an account you agree to our <a href="#">Terms&#38;Privacy</a>
                    </TextContainer>
                    <Button type="submit" onClick={onSubmitHandler}>Submit</Button>
                </FormContainer>
            </Container>
        </>
    )
}

export default SignUp

const Container = styled.div`
    display: inline-block;
`

const FormContainer = styled.form`
    display: inline-block;
    width: 50%;
    @media screen and (max-width: 980px) {
        display: block;
        width: 100%;
    }
`

const Header = styled.h2`
    font-size: 200%;
    margin-left: 2rem;  
`

const Input = styled.input`
    width: 80%;
    max-width: 300px;
    border: 1px solid #ccc;
    padding: 12px 20px;
    margin: 0.5rem 2rem;
    border-radius: 5px;
    box-shadow: 0 0 5px #575555;
`

const TextContainer = styled.div`
    display: inline-block;  
    margin: 1rem 2rem;
    width: 80%;
    max-width: 300px;   
`

const Error = styled.span`
    color: #ff0000;
    margin: 2rem;
`

const Button = styled(StyledButton)`
    margin-left: 2rem;  
`