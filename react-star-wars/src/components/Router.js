import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'
import Home from '../components/Home'
import StarshipPage from '../components/StarshipPage'

function Router() {
    const [starships, setStarships] = useState([])
    console.log(starships)
 
    useEffect(() => {
        async function getShips() {
            const rocketShip = await axios.get('https://swapi.dev/api/starships')
            console.log(rocketShip.data.results)
            setStarships(rocketShip.data.results)
        }
        getShips()
    }, [])
    return (
        <main>
            <Switch>                
                <Route exact path="/" component={(props) => <Home {...props} starships={starships}/>}/>
                <Route path='/starshipPage' render={(props) => <StarshipPage location={props.location} />} />
            </Switch>
         </main>
    )
  }
  export default Router