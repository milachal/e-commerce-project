import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import DeleteProductPopUp from './DeleteProductPopUp'
import Edit from '../../images/icons/edit.svg'
import Delete from '../../images/icons/delete.svg'

const ProductInfoAdmin = ({ image, productId }) => {
    //hover image bug with pop up
    //product card is still a link with pop up on top

    const [showPopUp, setShowPopUp] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        setShowPopUp(!showPopUp)
    }

    if (showPopUp) {
        return (
            <DeleteProductPopUp image={image} closePopUp={handleClick} productId={productId} />
        )
    }

    return (
        <div>
            <span>
                <StyledLink to={`/admin/edit-product/${productId}`}>
                    <Icon src={Edit} alt="edit-icon" />
                </StyledLink>
            </span>
            <span>
                <StyledButton onClick={handleClick} >
                    <Icon src={Delete} alt="delete-icon" />
                </StyledButton>
            </span>
        </div>
    )
}

export default ProductInfoAdmin

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    &:active{
        color: #fff;
    }
`
const Icon = styled.img`
    width: 1.5rem;
    cursor: pointer;
    margin: 0.8rem 0 0 0.8rem;
    transition: transform .5s ease;
    &:hover {
        transform: scale(1.5);
    }
`
const StyledButton = styled.button`
    border: 0;
`