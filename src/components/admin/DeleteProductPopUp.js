import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { StyledButton } from '../ui/Button'

const DeleteProductPopUp = ({ productId, closePopUp, image }) => {

    const history = useHistory()
    console.log(productId)

    const deleteProduct = async (e) => {
        e.preventDefault()
        await axios.delete(`http://localhost:3001/products/${productId}`)
        history.push('/admin')
    }
    
    return (
        <Container>
            <Text>Are you sure you want to delete this product?</Text>
            <Button onClick={deleteProduct} >Yes</Button>
            <Button onClick={closePopUp} >No</Button>
            <Image src={image} alt="product" />
        </Container>
    )
}

export default DeleteProductPopUp

const Container = styled.div`
    box-shadow: 0 0 5px #575555;
    position: absolute;
    top: 5px;
    left: 5px;
    background-color: #fff;
`
const Text = styled.h3`
    padding: 2rem 1rem 0 1rem;
    text-align: center;
    font-size: 20px;
`

const Button = styled(StyledButton)`
        width: 20%;
        min-width: 60px;
        margin: 1rem 2rem;
`
const Image = styled.img`
    width: 50%;
`