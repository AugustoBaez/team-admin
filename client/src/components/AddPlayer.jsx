import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';

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
        <>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <h2>Add Player</h2>
                    <input type="text" onChange={(e) => setName(e.target.value)} placeholder='player name' />
                    <input type="text" onChange={(e) => setPosition(e.target.value)} placeholder='preferred position' />
                    <button type='submit' id='addBtn'>ADD</button>
                </form>
            </div>
        </>
    )
}

export default AddPlayer