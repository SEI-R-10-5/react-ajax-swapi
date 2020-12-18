import React from 'react';
import { Link } from 'react-router-dom'
import Pilots from './Pilots'

const StarshipPage = (props) => {
    let starship = props.location.state

    return (
        <div>
            {starship ? (
                <div>
                    <div>
                        <div>
                            <p>Name: {starship.name}</p>
                        </div>
                        <div>
                            <p>Model: {starship.model}</p>
                        </div>
                        <div>
                            <Link to='/'>Return</Link>
                        </div>
                    </div>
                    <Pilots pilots={starship.pilots} />
                </div>
            ) : (<h3>Loading...</h3>)}
        </div>
    )
}

export default StarshipPage 