import React, { useState, useEffect } from 'react'
import { getUser, updateUser } from './api'
import { RegistrationForm } from './RegistrationForm'
import { useRouteMatch, useHistory } from 'react-router-dom'

export const EditUser = () => {
    const [user, setUser] = useState()
    const match = useRouteMatch()
    const history = useHistory()

    useEffect(() => {
        const fetchUsers = async () => {
            const user = await getUser(match.params.id)
            setUser(user)
        }
        fetchUsers()
    }, [])

    const onSubmit = async (data) => {
        await updateUser(data, match.params.id)
        history.push("/")
    }
    return user ? (
        <div className="container">
            <div className="mt-3">
                <h3>Edit User data</h3>
                <RegistrationForm user={user} onSubmit={onSubmit} />
            </div>
        </div>
    ) :
        <div>Loading...</div>
}