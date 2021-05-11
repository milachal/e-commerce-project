import React, { useState, useEffect } from 'react'
import Router from './Router'
import GlobalStyle from './globalStyles';
import CartContext from './contexts/CartContext'
import AuthContext from './contexts/AuthContext'
import SpinnerContext from './contexts/SpinnerContext'
import authAPI from './api/axios'
import { useAuth } from './hooks'


const App = () => {

    const [cart, setCart] = useState({
        count: 0,
        products: []
    })

    const [isLoggedIn, loading, userStatus, setIsLoggedIn] = useAuth()

    // const [showSpinner, setShowSpinner] = useState(true)

    const fetchCart = async () => {
        const { data } = await authAPI.get('/cart')
        const fetchedCartCount = data.reduce((count, product) => {
            return count + product.quantity
        }, 0)
        setCart({
            count: fetchedCartCount,
            products: data
        })
    }
    
    useEffect(() => {
        fetchCart()
    }, [])

    console.log(cart)

    return (
        <>  
            <GlobalStyle />
            <AuthContext.Provider value={{isLoggedIn, loading, userStatus, setIsLoggedIn}}>
                {/* <SpinnerContext.Provider value={{showSpinner, setShowSpinner}}> */}
                    <CartContext.Provider value={{cart, setCart, fetchCart}} >
                        <Router />
                    </CartContext.Provider>
                {/* </SpinnerContext.Provider> */}
            </AuthContext.Provider>
        </>
    )
}

export default App