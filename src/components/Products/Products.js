import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import ProductCard from './ProductCard'


const Products = () => {

    const [products, setProducts] = useState([])
    const location = useLocation()
    const searchKeyword = location.search 
    const keyword = new URLSearchParams(searchKeyword.toLowerCase()).get('search')
    
    useEffect(() => {
        const fetchProducts = async () => {
           const { data } = await axios.get('http://localhost:3001/products')

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

    return (
        <div> 
            <Container>
                {products.map((product) => {
                    return (
                        <ProductContainer key={product._id}>
                            <ProductCard 
                                src={product.image}
                                title={product.title}
                                price={`${product.price} lv`}
                                id={product._id}
                            />
                        </ProductContainer>
                    )
                })}
            </Container>
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