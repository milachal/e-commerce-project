import React from 'react'

export default React.createContext({
    isLoggedIn: false,
    loading: true,
    userStatus: '',
    setIsLoggedIn: () => {}
})