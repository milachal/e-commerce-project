import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import ProductCard from './ProductCard'
import Spinner from '../ui/Spinner'

const Products = ({ userStatus, login }) => {

    const [products, setProducts] = useState([])
    const location = useLocation()
    const searchKeyword = location.search 
    const keyword = new URLSearchParams(searchKeyword.toLowerCase()).get('search')
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const fetchProducts = async () => {
           const { data } = await axios.get('http://localhost:3001/api/products')

           if (keyword) {
               setProducts(data.filter((product) => {
                   return product.title.toLowerCase().includes(keyword)
               }))
           } else {
               setProducts(data)
           }
        }
        setLoading(!loading)
        fetchProducts()
    }, [keyword])

    console.log(products)
    return (
        <div> 
            {loading ? <Spinner /> : (

            
            <Container>
                {products.map((product) => {
                    return (
                        <ProductContainer key={product._id}>
                            <ProductCard 
                                src={product.image}
                                title={product.title}
                                price={`${product.price.$numberDecimal} lv`}
                                id={product._id}
                                userStatus={userStatus}
                                login={login}
                            />
                        </ProductContainer>
                    )
                })}
            </Container>
            )}
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