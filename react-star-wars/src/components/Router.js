import React, { useState, useEffect, Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../pages/Home'
import StarshipPage from '../pages/StarshipPage'
import axios from 'axios'

const Router = () => {
    const [starShips, setStarships] = useState([])
    const [loading, setLoading] = useState(true) 
       useEffect (() => {
           async function printStarship(){
            const results = await axios.get('https://swapi.dev/api/starships')
            setStarships(results.data.results)
            console.log(results.data.results)
            setLoading(false)
           }
           printStarship()
        }, [])

        
        return (
            <div>
                <div>
                    {loading ? (
                        <h2>Loading...</h2>

        ) : (
                <Switch>
                    <Route exact path="/" component = {(props) => <Home {...props} starShips = {starShips}/> }/>
                    <Route path = "/StarshipPage" component={StarshipPage}/>
                </Switch>
                )}
                </div>
            </div>
            )
        
}
export default Router


