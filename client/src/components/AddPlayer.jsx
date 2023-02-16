import React, {useState} from 'react'
import axios from 'axios'

const AddPlayer = () => {
    const [name, setName] = useState("")
    const [position, setPosition] = useState("")
    const [errors, setErrors] = useState(null)


    const addJugador = () => {
        axios.post(`http://localhost:8000/api/player/new`, {
        name,
        position
      })
      .then((res) => {
        console.log(res, "succesful")
      })
      .catch((error) => {
        console.log(error)
        setErrors(error)
      })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        addJugador()
    }
    console.log(name)
    console.log(position)
    return (
        <div>
            <h2>Add Player</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Player name: </label>
                    <input type="text" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="">Preferred Position: </label>
                    <input type="text" onChange={(e) => setPosition(e.target.value)}/>
                </div>
                <button>ADD</button>
            </form>
        </div>
    )
}

export default AddPlayer