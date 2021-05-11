import React, { useContext, useState, useEffect } from 'react'
import {
    useHistory,
    useRouteMatch,
    Route,
    Switch
} from 'react-router-dom'
import authAPI from '../../api/axios'
import Spinner from '../ui/Spinner'
import Navigation from '../Navigation/Navigation'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import PersonalInfo from './PersonalInfo'
import EditPersonalInfo from './EditPersonalInfo'
import AccountMenu from './AccountMenu'
import MyOrders from './MyOrders'
import AuthContext from '../../contexts/AuthContext'

const AccountPage = () => {

    const { isLoggedIn, loading } = useContext(AuthContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const { path, url } = useRouteMatch()
    const history = useHistory()

    useEffect(() => {

        if (!loading && !isLoggedIn) {
            history.push('/account/login')
        }    

        const getUser = async () => {
            try {
                const response = await authAPI.get('/account/me')
                setName(response.data.name)
                setEmail(response.data.email)
                // setShowSpinner(false)
            } catch (e) {
                // setShowSpinner(false)
                console.log(e)
            }
        }
        getUser()
    }, [loading, isLoggedIn, history])

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
