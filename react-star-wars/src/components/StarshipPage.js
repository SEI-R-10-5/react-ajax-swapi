import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/StarshipPage.css'

const StarshipPage = (props) => {
    let starship = props.location.state

    return (
        <div>
            {starship ? (
                <div className= "info-container">
                    <div className="info-card">
                        <h2 className="ship-name">{starship.name}</h2>
                        <h3 className="ship-model">{starship.model}</h3>
                        <Link
                            to="/"
                        >
                            Return
                            </Link>
                    </div>
                </div>
            ) : (<h3>Loading...</h3>)}
        </div>
    )
}

export default StarshipPage