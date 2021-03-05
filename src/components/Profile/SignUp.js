import React from 'react'
import styled from 'styled-components'
import { StyledButton } from '../ui/Button'
import Navigation from '../Navigation/Navigation'

const SignUp = ({ onClick }) => {
    return (
        <>
            <Navigation />
            <Container>
                <FormContainer>
                    <Header>Sign up</Header>
                    <Input type="text" placeholder="Enter email" name="email" />
                    <Input type="password" placeholder="Enter password" name="password" />
                    <Input type="password" placeholder="Repeat password" name="password-repeat" />
                    <TextContainer>
                        <input type="checkbox" checked="checked" name="remember" />
                        By creating an account you agree to our <a href="#">Terms&#38;Privacy</a>
                    </TextContainer>
                    <Button type="Submit" onClick={onClick}>Submit</Button>
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

const Button = styled(StyledButton)`
    margin-left: 2rem;  
`