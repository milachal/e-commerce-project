import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const PersonalInfo = (props) => {
    return (
        <Container>
                <h1>Hello, {props.name}</h1>
                <h2>Personal information</h2>
                <p>{props.name}</p>
                <p>{props.email}</p>
                    <StyledLink to={props.link}>
                        <Text>Edit</Text>
                    </StyledLink>
        

            </Container>
    )
}

export default PersonalInfo

const Container = styled.div`
    margin: 3rem;

`

const Text = styled.div`
    display: inline-block;
    background-color: #000;
    text-transform: uppercase;
    padding: 12px 20px;
    width: 80%;
    max-width: 150px; 
    border-radius: 5px;
    text-align: center;
    cursor: pointer;    
    &:hover{
        opacity: 0.8;
    }
`

const StyledLink = styled(Link)`
    font-size: 13px;
    color: #fff;
    z-index: 1;
    text-decoration: none;

`

