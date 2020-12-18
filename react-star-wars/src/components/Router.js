import React, { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import Axios from 'axios'
import StarshipPage from './StarshipPage'
import Home from './Home'

const Router = (props) => {

    const [starships, setStarship] = useState([])

    const getStarship = async () => {
        try {
            let res = await Axios.get('https://swapi.dev/api/starships')
            setStarship(res.data.results)
        } catch (error) {
            throw error
        }
    }
    useEffect(() => {
        getStarship()
    }, [])

    return (
        <div>
            <Switch>
                <Route exact path='/' component={() => (
                    <Home starships={starships} />
                )} />
                <Route path='/starships' render={(props) =>
                    <StarshipPage location={props.location} />} />
            </Switch>
        </div>
    )
}

export default Router