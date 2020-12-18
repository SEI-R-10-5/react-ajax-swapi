import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
    return (
        <div>
            {props.starships ?
                props.starships.map((starship) => {
                    let location = {
                        pathname: '/starship',
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
                }) : (<h3>Loading...</h3>)}
        </div>
    )
}

export default Home