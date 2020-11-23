import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
    return (
        <div>
            {props.starships ?
                props.starships.map((starship, i) => {
                    let location = {
                        pathname: '/starship',
                        state: starship
                    }
                    return (
                        <div key={i} className='card'>
                            <Link
                                className='link'
                                to={location}
                                key={starship.name}
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