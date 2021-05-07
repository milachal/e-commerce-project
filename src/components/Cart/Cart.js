import React, { useState } from 'react'
import authAPI from '../../api/axios'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../hooks/index'
import Spinner from '../ui/Spinner'
import Navigation from '../Navigation/Navigation'
import Header from '../Header/Header'
import CartProductsData from '../Cart/CartProductsData'
import CartFooter from '../Cart/CartFooter'
import Footer from '../Footer/Footer'

const Cart = () => {
    
    const [cartProducts, setCartProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [total, setTotal] = useState(0)
    const [emptyCart, setEmptyCart] = useState(false)
    const history = useHistory()

    console.log(cartProducts)

    const calculateTotal = (products) => {
        const totalPrice = products.reduce((acc, currentProduct) => {
            return acc + (currentProduct.price.$numberDecimal * currentProduct.quantity)
        }, 0)
        return totalPrice.toFixed(2)
    }

    const updateTotal = (products) => {
        setTotal(calculateTotal(products))
    }

    const fetchCart = async () => {
        const { data } = await authAPI.get('/cart')
        if (data && data.length === 0) {
            setEmptyCart(true)
            setLoading(false)
        }
        setCartProducts(data)
        updateTotal(data)
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
                    <CartProductsData 
                        cartProducts={cartProducts}
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