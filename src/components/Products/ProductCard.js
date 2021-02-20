import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'


const ProductCard = (props) => {
    return (
        <StyledLink to={`/product/${props.id}`}>
            <Container>
                <ImgContainer>
                    <Img alt="product" src={props.src} />
                </ImgContainer>
                <div>
                    <h3>{props.title}</h3>
                    <Price>{props.price}</Price>
                </div>
            </Container>
        </StyledLink>
    )
}

const StyledLink = styled(Link)`
    color: #000;
    text-decoration: none;
`

const Img = styled.img `
    max-width: 20rem;
    max-height: 10rem;
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

`
const Price = styled.h3`
    font-weight: 400;
`

export default ProductCard;