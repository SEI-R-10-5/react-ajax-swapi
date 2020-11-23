import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

const Home = (props) => {
    return (
        <div className="home-container">
            {props.starships.data ?
                props.starships.data.map((starship, index) => {
                    let location = {
                        pathname: `/starships/${index}`,
                        state: starship
                    }

                    return (
                        <div key={index} className="ship-containers">
                            <Link
                                className="ship-name"
                                to={location}
                                key={starship.name} >
                                {starship.name}
                            </Link>
                        </div>
                    )
                }) : (<h2>loading...</h2>)}
        </div>
    )
}

export default Home