import React, { useState, useEffect, useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import DeleteProductPopUp from './DeleteProductPopUp'
import Edit from '../../images/icons/edit.svg'
import Delete from '../../images/icons/delete.svg'
import authAPI from '../../api/axios'

const ProductAdminInfo = ({ image, productId }) => {
    //hover image bug with pop up
    //product card is still a link with pop up on top

    const [showPopUp, setShowPopUp] = useState(false)
    const history = useHistory()
    const wrapperRef = useRef(null)

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setShowPopUp(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [wrapperRef])

    const handleClick = (e) => {
        e.preventDefault()
        setShowPopUp(!showPopUp)
    }

    const deleteProduct = async (e) => {
        e.preventDefault()
        await authAPI.delete(`http://localhost:3001/api/products/${productId}`)
        handleClick(e)
        history.push('/products')
        history.go(0)
    }

    if (showPopUp) {
        return (
            <div ref={wrapperRef}>
                <DeleteProductPopUp 
                    image={image} 
                    closePopUp={handleClick} 
                    deleteProduct={deleteProduct}    
                />
            </div>
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

export default ProductAdminInfo

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
    background: none;
    border: 0;
`