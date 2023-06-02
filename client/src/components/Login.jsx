import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/login")
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Welcome to Team Admin</h1>
            <h2>Please, enter your user</h2>
            <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
            <input type="password" onChange={(e) => setEmail(e.target.value)} placeholder='password' />
            <button type='submit' id='addBtn'><strong>Login</strong></button>
        </form>
    )
}

export default Login