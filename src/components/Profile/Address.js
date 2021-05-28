import React from 'react'
import styled from 'styled-components'
import { StyledButton } from '../ui/Button'

const Address = () => {
    return (
        <Container>
                <h2>Address</h2>
                <p>User address</p>
                <p>User phone number</p>
                <Button type="submit">Edit</Button>
            </Container>
    )
}

export default Address

const Container = styled.div`
    margin: 3rem;

`

const Button = styled(StyledButton)`
    margin: 0;
    max-width: 200px;
`