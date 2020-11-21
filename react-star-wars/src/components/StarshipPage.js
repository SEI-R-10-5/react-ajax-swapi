import React from 'react'
import { Link } from 'react-router-dom'

const StarshipPage = (props) => {
  let starship = props.location.state

  return (
    <div>
      <header>
        <h1>STAR WARS STARSHIPS</h1>
      </header>

      <div className="starship-data">
        <h4>Name: {starship.name}</h4>
        <h4>Model: {starship.model}</h4>
        <h4>Manufacturer: {starship.manufacturer}</h4>
        <h4>Starship Class: {starship.starship_class}</h4>
        <h4>Max Atmosphering Speed: {starship.max_atmosphering_speed}</h4>
        <h4>Crew Members: {starship.crew}</h4>
        <h4>Passengers: {starship.passengers}</h4>
        <h4>Cargo Capacity: {starship.cargo_capacity}</h4>

        <Link 
          to="/"
          className="returnhome"
        > 
          Return Home 
        </Link>
      </div>
    </div>
  )
}

export default StarshipPage