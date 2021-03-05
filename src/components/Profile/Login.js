import React from 'react'
import styled from 'styled-components'
import Navigation from '../Navigation/Navigation'
import Button from '../ui/Button'

const Login = () => {
    return(
        <div>
            <Navigation />
            <Container>
                <Header>Log in</Header>
                <InputContainer>
                    <Input type="email" name="username" placeholder="email" />
                </InputContainer>
                <InputContainer>    
                    <Input type="password" name="password" placeholder="password" />
                </InputContainer>
                <Button type="submit">Log in</Button>
                <br/>
                <ForgotPass>Forgot your password?</ForgotPass>
            </Container>
            <SignupContainer>
                <Header>Don't have an account?</Header>
                <Text>If you don't have an account, Textlease proceed by clicking the following button to continue first-time registration.</Text>
                <br/>
                <Button type="submit"><Link href="/account/signup">Create an account</Link></Button>
            </SignupContainer>
        </div>
    )
}

export default Login

const Container = styled.div`
    display: inline-block;
    width: 50%;
    @media screen and (max-width: 980px) {
        display: block;
        width: 100%;
    }
`

const InputContainer = styled.div`
    margin: 1rem; 
`
const Header = styled.h2`
    font-size: 200%;
    margin-left: 3rem;  

`

const Input = styled.input`
    width: 80%;
    max-width: 300px;
    border: 1px solid #ccc;
    padding: 12px 20px;
    margin: 0 2rem;
    border-radius: 5px;
    box-shadow: 0 0 5px #575555;
`
/* 
styled.input[type="placeholder"]
    color: #575555 */

const ForgotPass = styled.h6`
    display: inline-block;
    font-size: 80%;
    margin: 1rem 9rem;
    text-decoration: underline; 
    cursor: pointer;
    text-align: center; 
`
const SignupContainer = styled.div`
    display: inline-block;
    width: 50%;  
    vertical-align: top;
    @media screen and (max-width: 980px) {
        display: block;
        width: 100%;
    }
`

const Text = styled.p`
    display: inline-block;  
    margin-left: 3rem;
    width: 80%;
    max-width: 300px;   
`

const Link = styled.a`
    text-decoration: none;
    color: white;
    &:active{
        color: white;
    }
`