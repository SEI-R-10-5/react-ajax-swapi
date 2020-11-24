import React, {useState, useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Starship from './StarshipPage'
import {__GetStarships} from './StarshipService'

const Router = () => {
    const [starship, useStarship] = useState([])

    const GetStarships = async () =>{
        try {
            const ship = await __GetStarships()
            useStarship(ship.results)
        } catch (error) {
            throw error
        }
    }

    useEffect(() => {
        GetStarships()
    },[])

    return (
        <div>
            <Switch>
                <Route
                exact
                path = '/'
                component= {()=>(
                    <Home starship={starship} />
                )}
                />
                <Route
                path ='/starship'
                render={(props)=>(<Starship location={props.location} />)}
                />
            </Switch>
        </div>
    )
}
export default Router