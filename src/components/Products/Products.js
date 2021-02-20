import React, { useEffect, useState } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import Navigation from '../Navigation/Navigation'
import Header from '../Header/Header'
import ProductCard from './ProductCard'
import Footer from '../Footer/Footer'


const Products = (props) => {

    const [products, setProducts] = useState([])

    const searchKeyword = props.location.search
    
    const keyword = new URLSearchParams(searchKeyword.toLowerCase()).get('search');

    useEffect(() => {
        const fetchProducts = async () => {
           const { data } = await axios.get('https://fakestoreapi.com/products/')

           if (keyword) {
               setProducts(data.filter((product) => {
                   return product.title.toLowerCase().includes(keyword)
               }))
           } else {
               setProducts(data)
           }
        }
        fetchProducts()
    }, [keyword])

    console.log(products)


    return (
        <div>
            <Navigation />
            <Header />
            <Container>
                {products.map((product) => {
                    return (
                        <ProductContainer key={product.id}>
                            <ProductCard 
                                src={product.image}
                                title={product.title}
                                price={`${product.price} lv`}
                                id={product.id}
                            />
                        </ProductContainer>
                    )
                })}
            </Container>
            <Footer />
        </div>
    )
}

export default Products

const ProductContainer = styled.div`
    display: inline-block;
    width: 30%;
    margin: 0 0.5rem 1.5rem;
    height: 22rem;
    vertical-align: top;
    box-shadow: 2px 0px 10px 2px rgba(142,142,142,0.75);
    -webkit-box-shadow: 2px 0px 10px 2px rgba(142,142,142,0.75);
    -moz-box-shadow: 2px 0px 10px 2px rgba(142,142,142,0.75);
`
const Container = styled.div`
    text-align: center;
    margin-top: 20px;
`