import React, { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import Axios from 'axios'

const Router = (props) => {

    const [starships, setStarship] = useSstate([])

    useEffect(() => {
        let res = await Axios.get('https://swapi.dev/api/starships')
        setStarship(res.data.results)
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