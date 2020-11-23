// import StarshipPage  from './StarshipPage';
import React from 'react'
import {Link} from 'react-router-dom'
const Home = (props) => {
    console.log(props.starships)
    return (
        <div>
            <div>
            <h1>Home</h1>
              {props.starships.map(starship => {
                let location = {
                  pathname: `/starshipPage/${starship.name}`, 
                  state: starship
                }
                return (
                  <div>
                    <h3>
                      <Link 
                        to={location} 
                        key={starship.name}
                      >
                        {starship.name}
                      </Link>
                    </h3>
                  </div>
                )
        })}
            </div>
        </div>
      )
    }
    export default Home 