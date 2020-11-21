import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
  return (
    <div>
      <header>
          <h1>STAR WARS STARSHIPS</h1>
      </header>

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
            {starship.name}
          </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Home