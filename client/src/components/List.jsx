import React, { useState, useEffect } from 'react'
import axios from 'axios'

const List = () => {
    const [player, setPlayer] = useState([])
    const [position, setPosition] = useState([])

    useEffect(() => {
        const getAllPlayers = async () => {
            try {
                const result = await axios.get("http://localhost:8000/api/players/")
                setPlayer(result.data.player.map((player) => player))
                // setPosition(result.data.player.map((player) => player.position))
            }
            catch (error) {
                console.log(error)
            }
        }
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
                {player.map((jugador) => {
                    <>
                    <p>{jugador.name}</p>
                        {/* <tr>
                            <td>{jugador.name}</td>
                            <td>{jugador.position}</td>
                            <td></td>
                        </tr> */}
                    </>
                })}

            </table>
        </div>
    )
}

export default List