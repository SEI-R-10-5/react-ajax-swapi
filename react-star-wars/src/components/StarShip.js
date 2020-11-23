import React from 'react'

const StarShip = (props) => {
    let starship = props.location.state
    console.log(starship)
    return (
        <div>
            <h1>{starship.name}</h1>
        </div>
    )
}
export default StarShip