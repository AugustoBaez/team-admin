import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DeleteBtn from './DeleteBtn'
import Window from './Window'
import SecondWindow from './SecondWindow'

const List = () => {
    const [player, setPlayer] = useState([])


    const removeFromDom = (playerId) => {
        setPlayer(player.filter(jugador => jugador._id !== playerId))
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

    console.log(player, "nombre")

    return (
        <>
            <Window />
            <SecondWindow />
            <div className='container'>
                <table className='tableContainer'>
                    <tr className='tableHead'>
                        <th>Player Name</th>
                        <th>Preferred Position</th>
                        <th>Actions</th>
                    </tr>
                    <tbody>
                        {player.map((jugador, index) => (
                            <tr key={index}>
                                <td>{jugador.name}</td>
                                <td>{jugador.position}</td>
                                <td>
                                    <DeleteBtn playerName={jugador.name} playerId={jugador._id} successCallback={() => removeFromDom(jugador._id)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default List