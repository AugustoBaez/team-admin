import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleRegister = (e) => {
        e.preventDefault()
    }
    return (
        <form onSubmit={handleRegister}>
            <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder='email' />
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='password' />
            <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} placeholder='confirm password' />
            <button id="addBtn" type='submit'><strong>Register</strong></button>
        </form>
    )
}

export default Register