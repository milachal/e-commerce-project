import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Navigation from '../Navigation/Navigation'
import Header from '../Header/Header'


const ProductPage = () => {

    const [product, setProduct] = useState({})
    const { id } = useParams() 

    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setProduct(data)
        })()
    }, [id])

    return (
        <div>
            <Navigation />
            <Header />
            <ImgContainer>
                <Img src={product.image} alt={product.id} />
            </ImgContainer>
            <InfoContainer>
                <h2>{product.title}</h2>
                <h4>{product.price}</h4>
                <p>{product.description}</p>
            </InfoContainer>
                
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