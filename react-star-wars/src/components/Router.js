// will use useEffect and useState to work
// we'll make an Axios call to SWAPI with useEffect to get all Starships
// make a useState variable for Starships at top of Router
        //set its state within the useEffect
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Home from '../pages/Home'
import StarshipPage from '../pages/StarshipPage'
import {Switch, Route} from 'react-router-dom'


const Router = () => {
        const SWAPI = `https://swapi.dev/api/starships`
        let [starship, setStarship] = useState([])
        let getDemShips = async () => {
                const ships = await axios.get(SWAPI)
                console.log('FRONTEND: Router.js, SWAPI data', ships.data.results)
                setStarship(ships.data.results)
        }

        useEffect(()=>{
                getDemShips()
        })
        return (
                <div>
                        <Switch>
                                <Route
                                    exact path="/"
                                    component={(props)=> (
                                            <Home {...props}
                                                starship={starship}
                                            />
                                    )}
                                />
                                <Route
                                    path="/starship"
                                    component = {StarshipPage}
                                />
                                
                        </Switch>
                </div>
        )
}

export default Router