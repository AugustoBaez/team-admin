import React, {useState} from 'react'
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
            <div>
                <label htmlFor="">Email: </label>
                <input type="text" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Password: </label>
                <input type="text" onChange={(e) => setEmail(e.target.value)}/>
            </div>
        </form>
    )
}

export default Login