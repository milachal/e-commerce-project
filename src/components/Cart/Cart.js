import React, { useState } from 'react'
import authAPI from '../../api/axios'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { useAuth } from '../../hooks/index'
import Spinner from '../ui/Spinner'
import Navigation from '../Navigation/Navigation'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Delete from '../../images/icons/delete.svg'
import ProductQuantity from './ProductQuantity'

const Cart = () => {
    
    const [cartProducts, setCartProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const history = useHistory()

    const fetchCart = async () => {
        const { data } = await authAPI.get('/cart')
        console.log(data, 'data')
        setCartProducts(data)
        setLoading(false)
    }

    useAuth(fetchCart, () => {
        setLoading(false)
        history.push('/account/login')
    })
    
    const deleteCartProduct = async (id) => {

       await authAPI.delete(`/cart`, { 
           data: {
               _id: id 
           }
        })
        fetchCart()      
    }

    return (
        <div>
            <Navigation />
            <Header />
            {loading ? <Spinner /> : (
                <>
                    <h2>Your cart</h2>
                    {cartProducts.map((product, index) => {
                        return (
                            <CartWrapper key={index}>
                                <span>
                                    <Image alt="product" src={product.image} />
                                </span>
                                <Description>
                                    <h4>{product.title}</h4>
                                    <p>{product.description}</p>
                                    <ProductQuantity 
                                        // quantity={quantity}
                                        quantity={product.quantity}
                                        id={product._id}
                                        // sendQuantity={sendQuantity}
                                    />
                                </Description>
                                <span>
                                    <StyledButton onClick={() => deleteCartProduct(product._id)} >
                                        <Icon src={Delete} alt="delete-icon" />
                                    </StyledButton>
                                </span>
                            </CartWrapper>
                        )
                    })}
                </>
            )} 
            <Footer />
        </div>
    )
}

const CartWrapper = styled.div`
    display: flex;
`

const Image = styled.img`
    max-width: 30rem;
    max-height: 20rem;
    padding: 1rem;
`

const Description = styled.div`
    max-width: 30rem;
`

const Icon = styled.img`
    width: 1.5rem;
    cursor: pointer;
    transition: transform .5s ease;
    &:hover {
        transform: scale(1.5);
    }
`

const StyledButton = styled.button`
    border: none;
    padding: 0;
`


export default Cart