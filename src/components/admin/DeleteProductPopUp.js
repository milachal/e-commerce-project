import React from 'react'
import styled from 'styled-components'
import { StyledButton } from '../ui/Button'

const DeleteProductPopUp = ({ deleteProduct, closePopUp, image }) => {
    
    return (
        <Container>
            <Text>Are you sure you want to delete this product?</Text>
            <Image src={image} alt="product" />
            <div>
                <Button onClick={deleteProduct} >Yes</Button>
                <Button onClick={closePopUp} >No</Button>
            </div>
        </Container>
    )
}

export default DeleteProductPopUp

const Container = styled.div`
    border: 1px solid #C0C0C0;
    position: absolute;
    top: 5px;
    left: 5px;
    background-color: #fff;
    z-index: 9999;
`
const Text = styled.h3`
    padding: 1rem 1rem 0 1rem;
    text-align: center;
    font-size: 20px;
`

const Button = styled(StyledButton)`
        width: 20%;
        min-width: 60px;
        margin: 1rem 2rem;
`
const Image = styled.img`
    width: 40%;
`