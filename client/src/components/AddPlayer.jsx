import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Window from './Window';
const AddPlayer = () => {
    const [name, setName] = useState("")
    const [position, setPosition] = useState("")
    const [errors, setErrors] = useState(null)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/player/new`, {
            name,
            position
        })
            .then((res) => {
                console.log(res, "succesful")
                navigate("/players/list")
            })
            .catch((error) => {
                console.log(error)
                setErrors(error)
            })
    }

    return (
        <div>
            <Window />
            <h2>Add Player</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Player name: </label>
                    <input type="text" onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Preferred Position: </label>
                    <input type="text" onChange={(e) => setPosition(e.target.value)} />
                </div>
                <button type='submit'>ADD</button>
            </form>
        </div>
    )
}

export default AddPlayer