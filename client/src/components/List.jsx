import React, { useState, useEffect } from 'react'
import axios from 'axios'

const List = () => {
    const [player, setPlayer] = useState([])

    useEffect(() => {
        const getAllPlayers = async () => {
            try {
                const result = await axios.get("http://localhost:8000/api/players/")
                setPlayer(result.data.player)
            }
            catch (error) {
                console.log(error)

            }
        }
        getAllPlayers()
    }, [])
    console.log(player)
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
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
    )
}

export default List