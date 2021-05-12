import React from 'react'

export default React.createContext({
    isUserLoggedIn: false,
    isPageloading: true,
    userStatus: '',
    setUserStatus: () => {},
    setIsUserLoggedIn: () => {}
})