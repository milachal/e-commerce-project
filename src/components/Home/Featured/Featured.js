import React, { useState, useEffect } from 'react';
import axios from 'axios'
import styled from 'styled-components';
import Slider from 'react-slick';
import ProductCard from '../../Products/ProductCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Spinner from '../../ui/Spinner'

const Featured = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      swipeToSlide: true,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
      ]
  }

  useEffect(() => {
      const getFeaturedProducts = async () => {
        const { data } = await axios.get('http://localhost:3001/api/products')
        setProducts(data.slice(0, 5))
        setLoading(false)
      }
      getFeaturedProducts()
  }, [])

  return (
      <Container>
          {loading ? <Spinner /> : (
            <>
              <Heading>Featured products</Heading>
              <Slider {...settings}> 
                  {products.map((product => (
                      <ProductContainer key={product._id}>
                          <ProductCard
                              src={product.image}
                              title={product.title}
                              price={`${product.price} lv`}
                              id={product._id} /> 
                      </ProductContainer> )
                  ))}           
              </Slider>
            </>
          )}
      </Container>
  )
}

const ProductContainer = styled.div`
    width: 25%;
    display: inline-block;
`

const Container = styled.div`
    text-align: center;
`

const Heading = styled.h1`
    font-size: 3rem;
`

export default Featured;