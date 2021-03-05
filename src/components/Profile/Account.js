import React, { useState } from 'react'
import Login from './Login'

const Account = () => {

    const [login, setLogin] = useState(false)

    return(
        <div>
            {!login ? <Login /> : <h1>Account page</h1>}
        </div>
    )
}

export default Account