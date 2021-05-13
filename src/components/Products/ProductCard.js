import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import ProductAdminInfo from '../admin/ProductAdminInfo'
import AuthContext from '../../contexts/AuthContext'

const ProductCard = ({ id, src, title, price }) => {

    const { isUserLoggedIn, userStatus } = useContext(AuthContext)
   
    return (
        <Container>
            { isUserLoggedIn && userStatus === 'admin' ? <ProductAdminInfo productId={id} image={src} /> : null}
            <StyledLink to={`/product/${id}`}>
                <ImgContainer>
                    <Img alt="product" src={src} />
                </ImgContainer>
                <div>
                    <h4>{title}</h4>
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
    max-height: 16rem;
    padding: 1rem;
    transition: transform .5s ease;
    &:hover {
        transform: scale(1.5);
    }
`
const ImgContainer = styled.div`
    height: 15rem;
    overflow: hidden;
`

const Container = styled.div`
    padding-bottom: 10px;
    text-align: center;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 4px;
`
const Price = styled.h4`
    font-weight: 400;
`

