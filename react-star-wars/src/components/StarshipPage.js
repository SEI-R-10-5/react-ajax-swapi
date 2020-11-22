import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/starWars.css'


const StarshipPage = (props) => {
    console.log('STARSHIP PAGE', props)
    let starship = props.location.state

  if (props.location.state) {
    return (
      <div className="container">
        <div className="home">
            <h1>STARSHIPS</h1>
            <div className="box">
                <h4>Name: {starship.name}</h4>
                <h4>Model: {starship.model}</h4>
                <Link className="linkButton" to="/">Home</Link>
            </div>
        </div>
      </div>
    )
  }
  return <h1>LOADING</h1>
}
export default StarshipPage