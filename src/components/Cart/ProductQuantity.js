import React, { useState } from 'react'
import styled from 'styled-components'
import authAPI from '../../api/axios'

const ProductQuantity = (props) => {

    const [productQuantity, setQuantity] = useState(props.quantity)
    
    console.log(productQuantity)

    const addQuantity = async () => {
        const newQuantity = productQuantity + 1
        if (newQuantity > 10) {
            return
        }
        setQuantity(newQuantity)
        console.log(productQuantity, 'add')
        await authAPI.post('/cart', { productId: props.id, quantity: productQuantity + 1})
    }

    const minusQuantity = async () => {
        const newQuantity = productQuantity - 1
        if (newQuantity < 1) {
            return 
        }
        setQuantity(newQuantity)
        console.log(productQuantity, 'minus')
        await authAPI.post('/cart', { productId: props.id, quantity: productQuantity - 1 })
    }
    return (
        <>
            <Btn onClick={addQuantity}>+</Btn>
            {productQuantity} 
            <Btn onClick={minusQuantity}>-</Btn>
        </>
    )
}

const Btn = styled.button`
    margin: 0.5rem;
`
export default ProductQuantity