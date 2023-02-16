import React, { useState, useEffect } from 'react'
import axios from 'axios'

const List = () => {
    const [player, setPlayer] = useState([])
    const [position, setPosition] = useState([])

    const getAllPlayers = () => {
        axios.get("http://localhost:8000/api/players/")
            .then((res) => {
                setPlayer(res.data.player)
            })
        // setPlayer(result.data.player.map((player) => player.name))
        // setPosition(result.data.player.map((player) => player.position))

    }

    useEffect(() => {
        getAllPlayers()
    }, [])

    console.log(player, "nombre")

    return (
        <div>
            <h1>List</h1>
            <h1>Add Player</h1>
            <table>
                <tr>
                    <th>Team Name</th>
                    <th>Preferred Position</th>
                    <th>Actions</th>
                </tr>
                <tbody>

                    {player.map((jugador) => (

                        <tr>
                            <td>{jugador.name}</td>
                            <td>{jugador.position}</td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default List