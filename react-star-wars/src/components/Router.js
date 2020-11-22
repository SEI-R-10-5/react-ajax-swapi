import React, {useEffect, useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import axios from 'axios';

import Home from '../pages/Home';
import StarshipPage from'../pages/StarshipPage';

const Router = () => {
    const [starships, setStarships] = useState()

    useEffect(() => {
        getStarships()
    }, [])

    const getStarships = async() => {
        const res = await axios.get('https://swapi.dev/api/starships')
        setStarships(res.data.results)
        console.log(res)
    }

    return (
        <Switch>
            <Route
            exact path="/"
            component={() => { return (
                <Home starships={starships}/>
            )}}
            />
            <Route
            path='/starship/:id'
            render={(props) => <StarshipPage location={props.location} />}
            />
        </Switch>
    )
}

export default Router;