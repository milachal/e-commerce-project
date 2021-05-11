import React, { useState, useContext, useEffect, useCallback } from 'react'
import authAPI from '../../api/axios'
import { useHistory } from 'react-router-dom'
import Spinner from '../ui/Spinner'
import Navigation from '../Navigation/Navigation'
import Header from '../Header/Header'
import CartProductsData from '../Cart/CartProductsData'
import CartFooter from '../Cart/CartFooter'
import Footer from '../Footer/Footer'
import CartContext from '../../contexts/CartContext'
import AuthContext from '../../contexts/AuthContext'

const Cart = () => {
    
    const { cart, fetchCart } = useContext(CartContext)
    const { isLoggedIn, loading } = useContext(AuthContext)
    const [total, setTotal] = useState(0)
    const [emptyCart, setEmptyCart] = useState(false)
    const history = useHistory()
    
    const calculateTotal = (products) => {
        const totalPrice = products.reduce((acc, currentProduct) => {
            return acc + (currentProduct.price.$numberDecimal * currentProduct.quantity)
        }, 0)
        return totalPrice.toFixed(2)
    }

    const updateTotal = useCallback((products) => {
        setTotal(calculateTotal(products))
    }, [])

    useEffect(() => {
        if (!loading && !isLoggedIn) {
            history.push('/account/login')
        }
        if (cart.products && cart.products.length === 0) {
            setEmptyCart(true)
        } else {
            updateTotal(cart.products)
        }
    }, [loading, isLoggedIn, history, cart.products, updateTotal])

    
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
                    <CartProductsData 
                        cartProducts={cart.products}
                        updateTotal={updateTotal}
                        deleteCartProduct={deleteCartProduct}
                    />
                </>
            )}
            {!emptyCart ? <CartFooter total={total} /> : (
                <div>Your cart is empty.</div>
            )

            }
            
            <Footer />
        </div>
    )
}

export default Cart