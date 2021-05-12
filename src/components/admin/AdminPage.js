import React from 'react'
import Products from '../Products/Products'
import AdminNavigation from './AdminNavigation'
import AdminHeader from './AdminHeader'

const AdminPage = () => {

    return (
        <>
            <AdminNavigation />
            <AdminHeader />
            <Products/>  
        </>
    )
}

export default AdminPage

