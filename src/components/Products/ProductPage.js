import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import authAPI from '../../api/axios'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Navigation from '../Navigation/Navigation'
import Header from '../Header/Header'
import AddToCartButton from '../Cart/AddtoCartButton'
import Spinner from '../ui/Spinner'
import CartContext from '../../contexts/CartContext'

const ProductPage = () => {

    const { fetchCart } = useContext(CartContext)
    const [product, setProduct] = useState({})
    const [price, setPrice] = useState('')
    const [loading, setLoading] = useState(true)

    const { id } = useParams() 

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`http://localhost:3001/api/products/${id}`)
                setLoading(!loading)
                setProduct(data)
                setPrice(data.price)
            } catch (e) {
                console.log(e)
            }
        })()
    }, [id, loading])

    const addToCart = async () => {
        await authAPI.post('/cart', { products: id })
        fetchCart()
    }

    return (
        <div>
            <Navigation />
            <Header />
            {loading ? <Spinner /> : (
                <>
                    <ImgContainer>
                        <Img src={product.image} alt={product._id} />
                    </ImgContainer>
                    <InfoContainer>
                        <h2>{product.title}</h2>
                        <h4>{`${price.$numberDecimal} lv`}</h4>
                        <p>{product.description}</p>
                        <AddToCartButton onClick={addToCart} />
                    </InfoContainer>
                </>   
            )}   
        </div>
    )
}

export default ProductPage

const ImgContainer = styled.div`
    text-align: center;
    width: 50%;
    display: inline-block;
`

const Img = styled.img `
    max-width: 20rem;
    transition: transform .5s ease;
    &:hover {
        transform: scale(1.5);
    }
    @media screen and (max-width: 768px) {
        margin-left: 3rem;
    }
`
const InfoContainer = styled.div `
    display: inline-block;
    text-align: left;
    vertical-align: top;
    width: 50%;
    margin-right: 3rem;
    max-width: 300px;

    @media screen and (max-width: 768px) {
        display: block;
        margin-left: 3rem;
    }
`