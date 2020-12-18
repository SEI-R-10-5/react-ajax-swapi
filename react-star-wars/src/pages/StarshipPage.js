import React from 'react'
import {Link} from 'react-router-dom'

const StarshipPage = (props) => {
    console.log(`FRONTEND: StarshipPage: props.state.name`, props.location.state)
    return (
        <div>
            <div>
                <h1>{props.location.state.name}</h1>
                <br></br>
                <p>{props.location.state.model}</p>
            </div>
            <Link
            to= {{pathname: '/', state: null}}
            >Return Home
            </Link>
        </div>
    )
}

export default StarshipPage