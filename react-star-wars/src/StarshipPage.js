import React from 'react'
import { Link } from 'react-router-dom'

const Starship = (props) => {
    const starship = props.location.state

    return(
        <div>
            <h1>Starships</h1>
            <div>
                <h3>{starship.name}</h3>
                <p>{starship.model}</p>
                <p>{starship.cargo_capacity}</p>
                <p>{starship.cost_in_credits}</p>
                <p>{starship.crew}</p>
                <p>{starship.pilots}</p>
                <Link to = '/'>
                    <h3>return</h3>
                </Link>
            </div>
        </div>
    )
}

export default Starship