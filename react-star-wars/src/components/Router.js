import React, { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import StarshipPage from './StarshipPage'
import { GetStarShips } from '../services/StarshipServices'
import '../styles/index.css'

const Router = () => {
    const [starships, setStarships] = useState({ data: [], loaded: false })

    const getStarships = async () => {
        const data = await GetStarShips()
        setStarships({data: data.results, loaded: true })
    }
    useEffect(() => {
        getStarships()
    }, [])

    return (
        <main className="front-page">
            <Switch>
                <Route
                    exact
                    path="/"
                    component={(props) => (
                        <Home 
                            starships= {starships} 
                            {...props} />
                    )}
                />
                <Route
                    path="/starships"
                    component={(props) => (
                        <StarshipPage location={props.location}/>
                    )}
                />
            </Switch>
        </main>
    )
}
export default Router