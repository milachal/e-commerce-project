import React, { useState, useEffect } from 'react'
import { 
    Redirect, 
    useRouteMatch,
    Route,
    Switch
} from 'react-router-dom'
import authAPI from '../../api/axios'
import { useAuth } from '../../hooks/index'
import Navigation from '../Navigation/Navigation'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import PersonalInfo from './PersonalInfo'
import EditPersonalInfo from './EditPersonalInfo'
import AccountMenu from './AccountMenu'
import MyOrders from './MyOrders'

const AccountPage = () => {

    const [name, setName] = useState('')
    // const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [login, setLogin] = useState(true)

    const { path, url } = useRouteMatch()

    useEffect(() => {
        const getUser = async () => {
            try {
                
                const response = await authAPI.get('/account/me')
                if (response.status === 401) {
                    
                }
                setName(response.data.name)
                setEmail(response.data.email)
            } catch (e) {
                console.log(e)
                return setLogin(false)
                // setError('Something went wrong. Please try again.')
            }
        }
        getUser()
    }, [])

    useAuth()

    return (
        <div>
            {!login ? <Redirect to="/account/login" /> : (
                <>
                    <Navigation />
                    <Header />
                    {/* <Spinner /> */}
                    {/* edit errors */}
                    <span>{error}</span> 
                    <AccountMenu />
                    <Switch>
                        <Route exact path={path}>
                            <PersonalInfo 
                                name={name}
                                email={email}
                                link={`${url}/edit`}
                            />
                        </Route>
                        <Route path={`${path}/edit`}>
                        <EditPersonalInfo 
                            url={`${url}/`}
                            name={name}
                            email={email}
                            nameValue={name || ''}
                            emailValue={email || ''}
                            onChangeName={e => setName(e.target.value)}
                            onChangeEmail={e => setEmail(e.target.value)}
                        /> 
                        </Route>
                        <Route path={`${path}/orders/history`}>
                            <MyOrders />
                        </Route>
                    </Switch>
                    <Footer />
              </>
            )}
        </div>
    )
}

export default AccountPage
