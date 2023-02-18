import React from 'react'

const SecondWindow = () => {
    return (
        <>
            <div className='windows'>
                <h2><a href={'/players/list'}>List</a></h2>
                <h2><a href={'/players/addplayer'}>Add Player</a></h2>
            </div>
        </>
    )
}

export default SecondWindow