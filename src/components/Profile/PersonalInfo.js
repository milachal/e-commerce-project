import React from 'react'
import styled from 'styled-components'
import { StyledButton } from '../ui/Button'

const PersonalInfo = (props) => {
    return (
        <Container>
                <h1>Hello, {props.name}</h1>
                <h2>Personal information</h2>
                <p>{props.name}</p>
                <p>{props.email}</p>
                <Button type="submit" onClick={props.onClick}>Edit</Button>
            </Container>
    )
}

const Container = styled.div`
    margin: 3rem;

`

const Button = styled(StyledButton)`
    margin: 0;
    max-width: 200px;
`

export default PersonalInfo