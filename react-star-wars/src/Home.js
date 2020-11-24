import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
    return(
        <div>
            <h2>Star Wars Starships</h2>
            <div>
                {props.starship.map((starship, index) => {
                    let ships = {
                        pathname: '/starship',
                        state: starship                     
                    }
                    console.log(ships)
                    return (
                        <Link to= {ships} key={starship.name}>
                            <h1>{starship.name}</h1>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Home