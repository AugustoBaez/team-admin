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
        <div className='registerContainer'>
            <form onSubmit={handleRegister}>
                <div>
                    <label htmlFor="">Email: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Password: </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Confirm password: </label>
                    <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <button id="registerBtn" type='submit'>Register</button>
            </form>
        </div>
    )
}

export default Register