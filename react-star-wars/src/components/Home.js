import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
    return (
        <div>
            {props.starships.map((starship) => {
                let location = {
                    pathname: '/starships',
                    state: starship
                }
                return (
                    <div key={starship.name} >
                        <Link
                            to={location}
                        >
                            {starship.name}
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Home