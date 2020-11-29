import React from 'react'
import {Route, Switch } from 'react-router';
import Home from './pages/Home';
import StarshipPage from './pages/StarshipPage';

const Router = () => {
    return (
    <Switch>
        <Route exact path = "/" component = {Home} />
        <Route path = "/starships" component = {StarshipPage} />
    </Switch>
    )
}
export default Router