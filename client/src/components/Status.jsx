import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { useParams } from 'react-router-dom';
import Window from './Window';
import SecondWindow from './SecondWindow';


const Status = () => {

  const [player, setPlayer] = useState([])
  const [status, setStatus] = useState({})
  const [playerId, setPlayerId] = useState()
  const [currentStatus, setCurrentStatus] = useState()


  const handleStatus = (playerId, estado) => {
    setStatus(status)
    console.log(status, "status")
    axios.put(`http://localhost:8000/api/player/update/${playerId}`, {
      status: estado
    })
      .then((res) => {
        console.log("updated", res)
      })
      .catch((error) => {
        console.error("update error", error)
      })
  }

  const getAllPlayers = () => {
    axios.get("http://localhost:8000/api/players/")
      .then((res) => {
        setPlayer(res.data.player)
      })
  }

  const getPlayerStatus = async (playerId, estado) => {
    const result = await axios.get(`http://localhost:8000/api/player/${playerId}`)
    console.log(result.data[0]._id, "get result")
    setCurrentStatus(result.data[0].status)
    handleStatus(playerId, estado)
  }
  console.log(playerId, "player id")

  useEffect(() => {
    getAllPlayers()
  }, [status])

  return (
    <>
      <Window />
      <SecondWindow />
      <div className="container">
        <table className='tableContainer'>
          <tr>
            <th>Player Name</th>
            <th>Actions</th>
          </tr>
          <tbody>
            {player.map((jugador, index) => (
              <tr key={index}>
                <td>{jugador.name}</td>
                <td>
                  {/* <button style={{ backgroundColor: status[jugador._id] == "playing" ? "green" : null }} onClick={() => getPlayerStatus(jugador._id, "playing")} value="playing">Playing</button>
                  <button style={{ backgroundColor: status[jugador._id] == "not playing" ? "red" : null }} onClick={() => getPlayerStatus(jugador._id, "not playing")} value="not playing">Not Playing</button>
                  <button style={{ backgroundColor: status[jugador._id] == "undecided" ? "yellow" : null }} onClick={() => getPlayerStatus(jugador._id, "undecided")} value="undecided">Undecided</button> */}
                  <button style={{ backgroundColor: currentStatus == "playing" ? "green" : null }} onClick={() => getPlayerStatus(jugador._id, "playing")} value="playing">Playing</button>
                  <button style={{ backgroundColor: currentStatus == "not playing" ? "red" : null }} onClick={() => getPlayerStatus(jugador._id, "not playing")} value="not playing">Not Playing</button>
                  <button style={{ backgroundColor: currentStatus == "undecided" ? "yellow" : null }} onClick={() => getPlayerStatus(jugador._id, "undecided")} value="undecided">Undecided</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Status