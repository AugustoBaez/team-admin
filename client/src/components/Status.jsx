import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import Window from './Window';
import SecondWindow from './SecondWindow';

const Status = () => {

  const [player, setPlayer] = useState([])
  const [playerStatus, setPlayerStatus] = useState({})
  const { id } = useParams()

  const handleStatus = (playerId, status) => {
    setPlayerStatus({ ...playerStatus, [playerId]: status })
    axios.put(`http://localhost:8000/api/player/update/${playerId}`, {
      playerStatus: { [playerId]: status }
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

  // const updateStatus = () => {
  // }

  useEffect(() => {
    getAllPlayers()
  }, [playerStatus])

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
                  <button style={{ backgroundColor: playerStatus[jugador._id] == "playing" ? "green" : null }} onClick={() => handleStatus(jugador._id, "playing")} value="playing">Playing</button>
                  <button style={{ backgroundColor: playerStatus[jugador._id] == "not playing" ? "red" : null }} onClick={() => handleStatus(jugador._id, "not playing")} value="not playing">Not Playing</button>
                  <button style={{ backgroundColor: playerStatus[jugador._id] == "undecided" ? "yellow" : null }} onClick={() => handleStatus(jugador._id, "undecided")} value="undecided">Undecided</button>
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