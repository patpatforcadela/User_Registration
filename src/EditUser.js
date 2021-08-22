import React, { useState, useEffect } from 'react'
import { getUsers } from './api'
import { RegistrationForm } from './RegistrationForm'
import { useRouteMatch, useHistory } from 'react-router-dom'

export const EditUser = () => {
    const [users, setUsers] = useState()
    const match = useRouteMatch()
    const history = useHistory()

    useEffect(() => {
        const fetchUsers = async () => {
            const user = await getUsers(match.params.id)
            setUsers(user)
        }
        fetchUsers()
    }, [])

    // const onSubmit = async (data) => {
    //     await updateUser(data, match.params.id)
    //     history.push("/")
    // }
    return users ? (
        <div className="container">
            <div className="mt-3">
                <h3>Edit User data</h3>
                <RegistrationForm user={users} />
            </div>
        </div>
    ) :
        <div>Loading...</div>
}