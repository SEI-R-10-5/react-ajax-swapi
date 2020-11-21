import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'
import Home from './Home'
import StarshipPage from './StarshipPage'

const Router = () => {
  const [starships, setStarships] = useState([])

  const getStarShips = async () => {
    const data = await axios.get('https://swapi.dev/api/starships')
    setStarships(data.data.results)
    console.log(data.data.results)
  }

  useEffect(() => {
    getStarShips()
  }, [])

  return (
    <div>
      <main>
        <Switch>
          <Route exact path="/"
          component={() => (
            <Home starships={starships} />
          )}
          />
          <Route path="/starship"
          render={(props) => (
            <StarshipPage location={props.location} />
          )}
          />
        </Switch>
      </main>
    </div>
  )
}

export default Router