import React, { useContext } from 'react'
import AdminNavigation from './AdminNavigation'
import AdminHeader from './AdminHeader'
import AuthContext from '../../contexts/AuthContext'

const AdminProfilePage = () => {

    const { userStatus } = useContext(AuthContext)
    console.log(userStatus)
    return (
        <>
            {userStatus === 'admin' ? (
                <>
                    <AdminNavigation />
                    <AdminHeader />
                </>
            ) : <h3>No permission</h3> }
        </>
    )
}

export default AdminProfilePage