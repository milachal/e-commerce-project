import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom'
import ProductAdminInfo from '../admin/ProductAdminInfo'


const ProductCard = ({ id, src, title, price, userStatus, login}) => {

    const location = useLocation()
    const path = location.pathname
   
    return (
        <Container>
            { login && userStatus === 'admin' ? <ProductAdminInfo productId={id} image={src} /> : null}
            <StyledLink to={`/product/${id}`}>
                <ImgContainer>
                    <Img alt="product" src={src} />
                </ImgContainer>
                <div>
                    <h3>{title}</h3>
                    <Price>{price}</Price>
                </div>
            </StyledLink>
        </Container>
    )
}

export default ProductCard;

const StyledLink = styled(Link)`
    color: #000;
    text-decoration: none;
`

const Img = styled.img `
    max-height: 12rem;
    padding: 1rem;
    transition: transform .5s ease;
    &:hover {
        transform: scale(1.5);
    }
`
const ImgContainer = styled.div`
    height: 11rem;
    overflow: hidden;
`

const Container = styled.div`
    margin: 1rem;
    text-align: center;
    position: relative;

`
const Price = styled.h3`
    font-weight: 400;
`

