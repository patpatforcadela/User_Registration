import React from 'react'
import { RegistrationForm } from './RegistrationForm';
import { registerUser } from './api'
import { useHistory } from 'react-router-dom';
import './style.css'

export const RegisterUser = () => {
    const history = useHistory()
    const onSubmit = async (data) => {
        const obj = await registerUser(data)
        console.log(obj)
        history.push("/")
    }
    return (
        <div className="container reg-container">
            <div className="mt-4 form-container">
                <div className="title">
                    <h4>Register User</h4>
                </div>
                <RegistrationForm onSubmit={onSubmit} />
            </div>
        </div>
    )
}