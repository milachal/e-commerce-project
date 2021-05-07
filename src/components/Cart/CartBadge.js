// delete this component

import React, { useState, useEffect } from 'react'
// import socketIOClient from 'socket.io-client'
import { io } from 'socket.io-client'
// const ENDPOINT = 'http://localhost:3001'
import NotificationBadge from '../ui/NotificationBadge'
const socket = io("http://localhost:3001")

const CartBagde = () => {
    
    const [response, setResponse] = useState(0)
    
    // useEffect(() => {
    //     console.log('useEffect')
    //     // const socket = socketIOClient(ENDPOINT);
        
        socket.on('cartCount', count => {
            console.log(count)
            console.log('from socket')
            setResponse(count)
        })
        // return () => {
    //         console.log('un mount socket')
    //         socket.off('cartCount')
    //     }
    // })
    

    return (
        <NotificationBadge>{response}</NotificationBadge>
    )
}

export default CartBagde