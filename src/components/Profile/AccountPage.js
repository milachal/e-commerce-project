import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navigation from '../Navigation/Navigation'
import Header from '../Header/Header'
import PersonalInfo from './PersonalInfo'
import EditPersonalInfo from './EditPersonalInfo'

const AccountPage = () => {

    const [name, setName] = useState('')
    // const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [showEdit, setShowEdit] = useState(false)

    useEffect(() => {
        const getUser = async () => {
            try {
                const { data } = await axios.get('http://localhost:3001/api/account/me', { withCredentials: true })
                setName(data.name)
                setEmail(data.email)
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
            <Navigation />
            <Header />
            {/* errors */}
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
        </div>
    )
}

export default AccountPage
