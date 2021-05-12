import React, { useContext } from 'react'
import Navigation from '../Navigation/Navigation'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Products from './Products'
import AdminPage from '../admin/AdminPage'
import AuthContext from '../../contexts/AuthContext'

const ProductsPage = () => {

    const { isUserLoggedIn, userStatus } = useContext(AuthContext)
    return (
        <div>
            {isUserLoggedIn && userStatus === 'admin' ? (
                <AdminPage />) : (
                    <>
                        <Navigation />
                        <Header />
                        <Products />
                        <Footer />
                    </>
                )}
        </div>
    )
}

export default ProductsPage