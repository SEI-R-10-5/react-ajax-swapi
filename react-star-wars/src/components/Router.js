import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'

import Home from '../components/Home'
import StarshipPage from '../components/StarshipPage'

function Router() {
    const [starships, setStarships] = useState([])
    
    console.log('STATE', starships)
   
    const fetchData = async () => {
        const result = await axios('https://swapi.dev/api/starships')
        setStarships(result.data.results)
    }

    useEffect(() => {
        fetchData()
    }, [])
   
    return (
        <main>
            <Switch>     
                           
                <Route 
                    exact path="/"
                    component={() => (<Home starships={starships}></Home>)}
                    //props is being defined as state, starships=starships
                />

                <Route 
                    path="/starship/:name" 
                    render={(props) => <StarshipPage location={props.location} />}></Route>

            </Switch>
         </main>
    )
  }
   
  export default Router




