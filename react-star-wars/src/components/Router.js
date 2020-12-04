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
                console.log('FRONTEND: Router.js, SWAPI data', ships)
                // try{
                //         ships.forEach(ship) => {
                //                 console.log(ship)
                //         }

                // } catch(error){throw error}
                

        }

        useEffect(()=>{
                getDemShips()
        })

        const chooseStarship = () => {
                //need to make it so that it calls axios and picks the starship from the axios call
                //then pass that into the return
        }

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
                                    path="/starships"
                                    render={(props)=> 
                                            <StarshipPage location={props.location}
                                            />
                                        }  
                                />
                                
                        </Switch>
                </div>
        )
}

export default Router