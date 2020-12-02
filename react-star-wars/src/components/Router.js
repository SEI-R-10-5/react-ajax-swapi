// will use useEffect and useState to work
// we'll make an Axios call to SWAPI with useEffect to get all Starships
// make a useState variable for Starships at top of Router
        //set its state within the useEffect

import axios from 'axios'
import React from 'react'

import Home from '../pages/Home'
import StarshipPage from '../pages/StarshipPage'


const Router = () => {
        const SWAPI = `https://swapi.dev/api/starships`
        const [starship, setStarship] = useState([])
        const getDemShips = async () => {
                const ships = await axios(`${SWAPI}`)
                console.log(`theses ships.`,ships)
                // ships.forEach(ship)

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
                                            <Home {...props}/>
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