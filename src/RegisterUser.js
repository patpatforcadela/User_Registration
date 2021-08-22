import React from 'react'
import { RegistrationForm } from './RegistrationForm';
import { registerUser } from './api'
import { useHistory } from 'react-router-dom';

export const RegisterUser = () => {
    const history = useHistory()
    const onSubmit = async (data) => {
        await registerUser(data)
        history.push("/")
    }
    return (
        <div className="container">
            <div className="mt-3">
                <h3>Register User</h3>
                <RegistrationForm onSubmit={onSubmit} />
            </div>
        </div>
    )
}