import React from 'react'

const Navbar = () => {
    return (
        <div className='windows'>
            <p><a href={'/players/list'}><strong>List</strong></a></p>
            <p><a href={'/players/addplayer'}><strong>Add Player</strong></a></p>
            <p>
                <a href={'/players/list'}>
                    <strong>Manage Players</strong>
                </a>
            </p>
            <p>
                <a href={'/status/game/1'}>
                    <strong>Manage Players Status</strong>
                </a>
            </p>
        </div>
    )
}

export default Navbar