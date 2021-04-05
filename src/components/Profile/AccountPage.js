import React, { useState, useEffect } from 'react'
import {
    useHistory,
    useRouteMatch,
    Route,
    Switch
} from 'react-router-dom'
import authAPI from '../../api/axios'
import { useAuth } from '../../hooks'
import Spinner from '../ui/Spinner'
import Navigation from '../Navigation/Navigation'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import PersonalInfo from './PersonalInfo'
import EditPersonalInfo from './EditPersonalInfo'
import AccountMenu from './AccountMenu'
import MyOrders from './MyOrders'

const AccountPage = () => {

    const [name, setName] = useState('')
    const [loading, setLoading] = useState(true)
    // const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    // const [error, setError] = useState('')
    const { path, url } = useRouteMatch()
    const history = useHistory()
    
    const getUser = async () => {
        try {
            const response = await authAPI.get('/account/me')
            setName(response.data.name)
            setEmail(response.data.email)
            setLoading(false)
        } catch (e) {
            setLoading(false)
            console.log(e)
        }
    }
 
    const login = useAuth(getUser, () => {
        setLoading(false)
        history.push('/account/login')
    })
    console.log(login)

    return (
        <>
            <Navigation />
            {loading ? <Spinner /> : (
                <>
                    <Header />
                    {/* edit errors */}
                    {/* <span>{error}</span>  */}
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
        </>
    )
}

export default AccountPage
