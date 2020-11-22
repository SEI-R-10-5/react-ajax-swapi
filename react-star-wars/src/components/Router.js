import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import StarshipPage from './StarshipPage'
import axios from 'axios'

const Router = (props) => {
   const [starships, setStarships] = useState([])

   const getStarshipData = async () => {
      try {
         const res = await axios.get('https://swapi.dev/api/starships')
         setStarships(res.data.results)
      } catch (err) {
         console.log('Error in getStarshipData', err)
      }
   }

   useEffect(() => {
      getStarshipData()
   }, [])

   return (
      <main>
         <Switch>
            <Route
               exact
               path="/"
               component={() => <Home starships={starships} />}
            />
            <Route
               path="/starships"
               component={(props) => <StarshipPage location={props.location} />}
            />
         </Switch>
      </main>
   )
}

export default Router
