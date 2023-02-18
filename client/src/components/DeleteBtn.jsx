import React, { useState } from 'react'
import Modal from 'react-modal'
import axios from 'axios'
const DeleteBtn = (props) => {
    const { playerId, playerName, successCallback } = props
    const [isOpen, setIsOpen] = useState(false)

    const deletePlayer = () => {
        setIsOpen(false)
        axios.delete(`http://localhost:8000/api/player/delete/${playerId}`)
        .then(res => (successCallback()))
    }

    return (
        <>
            <button id="deleteBtn" onClick={() => setIsOpen(true)}>Delete</button>
            <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
                <h4>Are you sure you want to remove {playerName}</h4>
                <button onClick={deletePlayer}>Yes</button>
                <button onClick={() => setIsOpen(false)}>No</button>
            </Modal>
        </>
    )
}

export default DeleteBtn