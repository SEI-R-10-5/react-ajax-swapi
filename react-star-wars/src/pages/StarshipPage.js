import React from 'react'
import {Link} from "react-router-dom"
const StarshipPage = (props) => {
    let starship = props.location.state 
    return (
        <div > 
            <h1>Check out this Starship</h1>
                <div>
                    <ul>
                        <li className="image">
                        Name: {starship.name}
                        </li>
                        <li>
                        Model: {starship.model}
                        </li>
                        <li>
                        Crew Capacity: {starship.crew}
                        </li>
                        <li>
                        Starship Class: {starship.starship_class}
                        </li>
                        <li>
                        Passenger Capacity: {starship.passengers}
                        </li>
                        <li>
                        Pilot Manifest: {}
                        </li>
                    </ul>
                   
                </div>
        </div>
    )
}
export default StarshipPage