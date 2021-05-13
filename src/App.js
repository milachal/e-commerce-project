import React, { useState, useEffect } from 'react'
import Router from './Router'
import GlobalStyle from './globalStyles';
import CartContext from './contexts/CartContext'
import AuthContext from './contexts/AuthContext'
import authAPI from './api/axios'
import { useAuth } from './hooks'


const App = () => {

    const [cart, setCart] = useState({
        count: 0,
        products: []
    })

    const { isUserLoggedIn, isPageLoading, userStatus, setUserStatus, setIsUserLoggedIn } = useAuth()

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

    return (
        <>  
            <GlobalStyle />
            <AuthContext.Provider value={{isUserLoggedIn, isPageLoading, userStatus, setUserStatus, setIsUserLoggedIn}}>
                    <CartContext.Provider value={{cart, setCart, fetchCart}} >
                        <Router />
                    </CartContext.Provider>
            </AuthContext.Provider>
        </>
    )
}

export default App