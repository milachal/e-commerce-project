import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import authAPI from '../../api/axios'
import CartContext from '../../contexts/CartContext'

const ProductQuantity = (props) => {

    const [productQuantity, setQuantity] = useState(props.quantity)
    const { cart, setCart } = useContext(CartContext)
    
    const addQuantity = async () => {
        const newQuantity = productQuantity + 1
        if (newQuantity > 10) {
            return
        }
        setQuantity(newQuantity)
        const { data } = await authAPI.post('/cart', { productId: props.id, quantity: newQuantity })
        setCart({
            ...cart,
            count: cart.count + 1
        })
        props.updateTotal(data)
    }

    const minusQuantity = async () => {
        const newQuantity = productQuantity - 1
        if (newQuantity < 1) {
            return 
        }
        setQuantity(newQuantity)
        console.log(props.id)
        const { data } = await authAPI.post('/cart', { productId: props.id, quantity: newQuantity })
        setCart({
            ...cart,
            count: cart.count - 1
        })
        props.updateTotal(data)
    }
    return (
        <>
            <Btn onClick={addQuantity}>+</Btn>
            {productQuantity} 
            <Btn onClick={minusQuantity}>-</Btn>
        </>
    )
}

export default ProductQuantity

const Btn = styled.button`
    margin: 0.5rem;
`