import { useState, useEffect } from 'react'
import authAPI from '../api/axios'

export const useAuth = () => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
    const [userStatus, setUserStatus] = useState('')
    const [isPageLoading, setIsPageLoading] = useState(true)

    useEffect(() => {
        const getAuthStatus = async () => {
            try {
                const response = await authAPI.get('/authorize-user')
                console.log(response, 'response')
                if (response.data.status === 'admin' && response.status === 200) {
                    setUserStatus('admin')
                    setIsUserLoggedIn(true)                    
                    setIsPageLoading(false)
                    return
                }
                if (response.data.status === 'user' && response.status === 200) {
                    setUserStatus('user')
                    setIsUserLoggedIn(true)
                    setIsPageLoading(false)
                    return
                }
                
            } catch(e) {
                console.log('Not authenticated', e)
                setIsPageLoading(false)
                setIsUserLoggedIn(false)
            }
        }
        getAuthStatus()
    }, [])

    return { isUserLoggedIn, isPageLoading, userStatus, setIsUserLoggedIn, setUserStatus }
}
