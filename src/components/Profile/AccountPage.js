import React, { useContext, useState, useEffect } from 'react'
import {
    useHistory,
    useRouteMatch,
    Route,
    Switch
} from 'react-router-dom'
import authAPI from '../../api/axios'
import Navigation from '../Navigation/Navigation'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import PersonalInfo from './PersonalInfo'
import EditPersonalInfo from './EditPersonalInfo'
import AccountMenu from './AccountMenu'
import MyOrders from './MyOrders'
import DeleteAccount from './DeleteAccount'
import AuthContext from '../../contexts/AuthContext'
import ContactUs from './ContactUs'

const AccountPage = () => {

    const { isUserLoggedIn, isPageLoading } = useContext(AuthContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const { path, url } = useRouteMatch()
    const history = useHistory()

    useEffect(() => {

        if (!isPageLoading && !isUserLoggedIn) {
            history.push('/account/login')
        }    

        console.log(isUserLoggedIn, 'isUserLoggedin')
        console.log(isPageLoading, 'isPageLoading')

        const getUser = async () => {
            try {
                const response = await authAPI.get('/account/me')
                setName(response.data.name)
                setEmail(response.data.email)
            } catch (e) {
                console.log(e)
            }
        }
        getUser()
    }, [isPageLoading, isUserLoggedIn, history])

    return (
        <>
            <Navigation />
            <Header />
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
                <Route path={`${path}/contact-us`}>
                    <ContactUs />
                </Route>
                <Route path={`${path}/delete-account`}>
                    <DeleteAccount />
                </Route>
            </Switch>
            <Footer />    
        </>
    )
}

export default AccountPage
