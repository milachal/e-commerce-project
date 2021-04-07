import React, { useState } from 'react'
import styled from 'styled-components'
import authAPI from '../../api/axios'

const ProductQuantity = (props) => {

    const [productQuantity, setQuantity] = useState(props.quantity)
    
    const addQuantity = async () => {
        const newQuantity = productQuantity + 1
        if (newQuantity > 10) {
            return
        }
        setQuantity(newQuantity)
        const { data } = await authAPI.post('/cart', { productId: props.id, quantity: newQuantity })
        props.updateTotal(data)
        console.log(props.updateTotal(data), 'addQuantity-updateTotal')
    }

    const minusQuantity = async () => {
        const newQuantity = productQuantity - 1
        if (newQuantity < 1) {
            return 
        }
        setQuantity(newQuantity)
        const { data } = await authAPI.post('/cart', { productId: props.id, quantity: newQuantity })
        props.updateTotal(data)
        console.log(props.updateTotal(data), 'minusQuantity-updateTotal')
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