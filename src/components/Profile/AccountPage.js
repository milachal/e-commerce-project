import React, { useState, useEffect } from 'react'
import authAPI from '../../api/axios'
import { Redirect } from 'react-router'
import Navigation from '../Navigation/Navigation'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import PersonalInfo from './PersonalInfo'
import EditPersonalInfo from './EditPersonalInfo'
// import Spinner from '../ui/Spinner'

const AccountPage = () => {

    const [name, setName] = useState('')
    // const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [showEdit, setShowEdit] = useState(false)
    const [login, setLogin] = useState(true)

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await authAPI.get('/account/me')
                if (response.status === 401) {
                    return setLogin(false)
                }
                setName(response.data.name)
                setEmail(response.data.email)
            } catch (e) {
                setError('Something went wrong. Please try again.')
            }
        }
        getUser()
    }, [])

    const editPersonalInfo = () => {
        setShowEdit(!showEdit)
    }
    return (
        <div>
            {!login ? <Redirect to="/account/login" /> : null}
            <Navigation />
            <Header />
            {/* <Spinner /> */}
            {/* edit errors */}
            <span>{error}</span> 
            {showEdit ? (
                <EditPersonalInfo 
                    name={name}
                    email={email}
                    onChangeName={e => setName(e.target.value)}
                    onChangeEmail={e => setEmail(e.target.value)}
                /> ) : (
                <PersonalInfo 
                    name={name}
                    email={email}
                    onClick={editPersonalInfo}
                /> 
            )}
            <Footer />
        </div>
    )
}

export default AccountPage
