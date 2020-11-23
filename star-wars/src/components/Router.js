import React, { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import Axios from 'axios'
import Home from './Home'
import StarshipPage from './StarshipPage'

const Router = (props) => {
    const [starships, setStarships] = useState([])
    
    useEffect(async () => {
        let res = await Axios.get('https://swapi.dev/api/starships')
        setStarships(res.data.results)
    }, [])

    return (
        <div>
            <Switch>
                <Route exact path='/' component={(props) => (
                    <Home starships={starships}/>
                )} />
                <Route path='/starship' render={(props) => <StarshipPage location={props.location} />} />
            </Switch>
        </div>
    )
}

export default Router