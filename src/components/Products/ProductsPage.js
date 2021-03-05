import React from 'react'
import Navigation from '../Navigation/Navigation'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Products from './Products'

const ProductsPage = () => {
    return (
        <div>
            <Navigation />
            <Header />
            <Products />
            <Footer />
        </div>
    )
}

export default ProductsPage