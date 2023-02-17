import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useLocation, useNavigate} from 'react-router-dom';

const STATUS = {
  PLAYING: "Playing",
  NOT_PLAYING: "Not Playing",
  UNDECIDED: "Undecided"
}

const Status = () => {

  const [player, setPlayer] = useState([])
  const [status, setStatus] = useState("Undecided")
  const [active, setActive] = useState(false)
  const [btnColor, setBtnColor] = useState("") 
  const { id } = useParams()

  const styles = () => {
    if (status == "Playing") {
      return setBtnColor("green")
    }
    else if (status == "Not Playing") {
      return setBtnColor("red")
    }
    else {
      return setBtnColor("yellow")
    }
  }

  const getAllPlayers = () => {
    axios.get("http://localhost:8000/api/players/")
      .then((res) => {
        setPlayer(res.data.player)
      })
  }

  useEffect(() => {
    getAllPlayers()
  }, [])

  // const updateStat = (playerToUpdate, newStatus) => {


  // }
  return (
    <div>
      <h1>List</h1>
      <h1>Add Player</h1>
      <table>
        <tr>
          <th>Team Name</th>
          <th>Actions</th>
        </tr>
        <tbody>
          {player.map((jugador, index) => (
            <tr key={index}>
              <td>{jugador.name}</td>
              <td>{jugador.position}</td>
              <td>
                <button style={{backgroundColor: active ? "green" : null}}onClick={()=> setActive(!active)}>Playing</button>
                <button onClick={()=> setActive(!active)}>Not Playing</button>
                <button onClick={()=> setActive(!active)}>Undecided</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Status