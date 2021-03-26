import { useState, useEffect } from 'react'
import authAPI from '../api/axios'

export const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const getAuthStatus = async () => {
            try {
                const response = await authAPI.get('/authorize-user')
                console.log(response)
                if (response.status === 200) {
                    return setIsLoggedIn(true)
                }
                
            } catch(e) {
                console.log(e)
            }
        }
        getAuthStatus()
    }, [])
    
    return isLoggedIn
}
