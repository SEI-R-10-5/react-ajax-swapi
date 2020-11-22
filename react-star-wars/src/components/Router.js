import React, { useState, useEffect } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import Home from './Home'
import StarshipPage from './StarshipPage'
import { __GetStarships } from '../services/StarWarsService'

function Router() {
    const [pageLoading, setPageLoading] = useState(true)
    const [starShips, setStarships] = useState([])

    useEffect(() => {
        console.log('Mounting')
        getStarships()
        console.log('Starships: ', starShips)
    }, [])


    const getStarships = async () => {
        console.log('HIT getStarships')
        const theStarships = await __GetStarships()
        console.log('theStarships: ', theStarships)
        setPageLoading(false)
        setStarships(theStarships.results)
    }


    return (
        <main>
            {pageLoading ? (
                <div>
                    <h3>Loading...</h3>
                </div>
            ) : (
                    <Switch>
                        <Route exact path="/" component={(props) => (
                            <Home starShips={starShips}
                                {...props}>
                            </Home>
                        )} />
                        <Route path='/starship' render={(props) => <StarshipPage location={props.location} />} />
                    </Switch>
                )}
        </main>
    )
}

export default withRouter(Router)