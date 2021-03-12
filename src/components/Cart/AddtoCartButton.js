import React from 'react'
import styled from 'styled-components'
import { StyledButton } from '../ui/Button'

const AddtoCartButton = ({ onClick }) => {
    return (
        <div>
            <Button type="button" onClick={onClick}>Add to cart</Button>
        </div>
    )
}

export default AddtoCartButton

const Button = styled(StyledButton)`
    margin: 0;
    max-width: 200px;
    background-color: #ff0000;
    //hover doesn't work
`