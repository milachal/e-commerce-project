import React, { useState } from 'react'
import Login from './Login'
import AccountPage from './AccountPage'

const Account = () => {

    const [login, setLogin] = useState(true)

    return(
        <div>
            {!login ? <Login /> : <AccountPage />}
        </div>
    )
}

export default Account