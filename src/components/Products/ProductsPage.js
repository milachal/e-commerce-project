import React from 'react'
import { useAuth } from '../../hooks'
import Navigation from '../Navigation/Navigation'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Products from './Products'
import AdminPage from '../admin/AdminPage'

const ProductsPage = () => {

    const [login, userStatus] = useAuth()
    console.log(userStatus)
    return (
        <div>
            {login && userStatus === 'admin' ? (
                <AdminPage login={login} userStatus={userStatus} 
                />) : (
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