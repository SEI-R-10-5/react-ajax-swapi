import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import '../styles/starWars.css'


const Home = (starships) => {
    // console.log('HOME', starships)
    let shipList = starships.starships
    console.log(shipList)

  if (starships.starships) {
  return (
    <div className="home">
        <div className="container">
        <h1>STAR WARS SHIPS</h1>
          {shipList.map(starship => {
            let location = {
              pathname: `/starship/${starship.name}`, 
              // pathname: `/starship`, 
              state: starship
            }
            return (
              <div className="box">
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
  return <h1>LOADING</h1>
}

export default Home