import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/App.css'

const StarshipPage = (props) => {
  let starship = props.location.state

  return (
    <div>
      <header>
        <h1>STAR WARS STARSHIPS</h1>
      </header>

      <div className="data-container">
        <div className="starship-data">
          <h4>Name:<br />{starship.name}</h4>
          <h4>Model:<br />{starship.model}</h4>
          <h4>Manufacturer:<br />{starship.manufacturer}</h4>
          <h4>Starship Class:<br />{starship.starship_class}</h4>
          <h4>Max Atmosphering Speed:<br />{starship.max_atmosphering_speed}</h4>
          <h4>Crew Members:<br />{starship.crew}</h4>
          <h4>Passengers:<br />{starship.passengers}</h4>
          <h4>Cargo Capacity:<br />{starship.cargo_capacity}</h4>
        </div>
      </div>

      <div className="returnhome">
        <Link to="/"> Return Home </Link>
      </div>
    </div>
  )
}

export default StarshipPage