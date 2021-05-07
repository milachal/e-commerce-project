import React, { useState, useEffect } from 'react'
import Router from './Router'
import GlobalStyle from './globalStyles';
import CartCountContext from './contexts/CartCountContext'
import authAPI from './api/axios'


const App = () => {

    const [cartCount, setCartCount] = useState(0)
    
    useEffect(() => {
        const getCartCount = async () => {
            const { data } = await authAPI.get('/cart')
            const cartCount = data.reduce((count, product) => {
                return count + product.quantity
            }, 0)
            setCartCount(cartCount)
        }
        getCartCount()
    }, [cartCount])

    console.log(cartCount)

    return (
        <>  
            <GlobalStyle />
            <CartCountContext.Provider value={{cartCount, setCartCount}} >
                <Router />
            </CartCountContext.Provider>
        </>
    )
}

export default App