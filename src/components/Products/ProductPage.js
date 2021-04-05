import React, { useState, useEffect } from 'react'
import axios from 'axios'
import authAPI from '../../api/axios'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Navigation from '../Navigation/Navigation'
import Header from '../Header/Header'
import AddToCartButton from '../Cart/AddtoCartButton'
import Spinner from '../ui/Spinner'

const ProductPage = () => {

    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const { id } = useParams() 

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`http://localhost:3001/api/products/${id}`)
                setLoading(!loading)
                setProduct(data)
            } catch (e) {
                console.log(e)
            }
        })()
    }, [id])

    const addToCart = async () => {
        const response = await authAPI.post('/cart', { products: id })
        console.log(response)
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
                        <h4>{`${product.price} lv`}</h4>
                        <AddToCartButton onClick={addToCart} />
                        <p>{product.description}</p>
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
    margin-left: 3rem;
`

const Img = styled.img `
    max-width: 20rem;
    transition: transform .5s ease;
    &:hover {
        transform: scale(1.5);
    }
`
const InfoContainer = styled.div `
    display: inline-block;
    text-align: left;
    vertical-align: top;
    width: 50%;
    margin-right: 3rem;
    max-width: 300px;

    @media screen and (max-width: 980px) {
        display: block;
        margin: 3rem;
    }
`