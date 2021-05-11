import { useState, useEffect } from 'react'
import authAPI from '../api/axios'

export const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userStatus, setUserStatus] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getAuthStatus = async () => {
            try {
                const response = await authAPI.get('/authorize-user')
                if (response.data.status === 'admin' && response.status === 200) {
                    setUserStatus('admin')
                    setIsLoggedIn(true)                    
                    setLoading(false)
                    return
                }
                if (response.data.status === 'user' && response.status === 200) {
                    setUserStatus('user')
                    setIsLoggedIn(true)
                    setLoading(false)
                    
                    return
                }
                
            } catch(e) {
                console.log('Not authenticated', e)
                setLoading(false)
            }
        }
        getAuthStatus()
    }, [])

    return [isLoggedIn, loading, userStatus, setIsLoggedIn]
}
