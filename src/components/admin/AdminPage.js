import React from 'react'
import Products from '../Products/Products'
import AdminNavigation from './AdminNavigation'
import AdminHeader from './AdminHeader'

const AdminPage = ({ login, userStatus}) => {
    
    return (
        <>
            <AdminNavigation />
            <AdminHeader />
            <Products
                userStatus={userStatus}
                login={login}
            />
           
        </>
    )
}

export default AdminPage

