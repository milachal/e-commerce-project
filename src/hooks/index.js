import { useState, useEffect } from 'react'
import authAPI from '../api/axios'

export const useAuth = (callback = () => {}, error) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userStatus, setUserStatus] = useState('user')

    useEffect(() => {
        const getAuthStatus = async () => {
            try {
                const response = await authAPI.get('/authorize-user')
                if (response.data.status === 'admin' && response.status === 200) {
                    setUserStatus('admin')
                    setIsLoggedIn(true)
                    return callback()
                }
                if (response.status === 200) {
                    setIsLoggedIn(true)
                    return callback()
                }
                
            } catch(e) {
                error ? error() : callback()
                console.log('Not authenticated')
            }
        }
        getAuthStatus()
    }, [])
    return [isLoggedIn, userStatus]
}
