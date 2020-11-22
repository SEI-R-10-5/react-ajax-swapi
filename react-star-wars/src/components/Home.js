import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/App.css'

const Home = (props) => {
  return (
    <div>
      <header>
        <h1>STAR WARS STARSHIPS</h1>
      </header>

      <div className="starship-container">
        {props.starships.map(starship => {
          let location = {
            pathname: '/starship',
            state: starship
          }
          return (
            <Link
              to={location}
              key={starship.name}
            >
              <div className="starship">
                <h3>{starship.name}</h3>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Home