import React from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom'

const Home = (props) => {
    const { starShips } = props
    console.log('Passed Props: ', starShips)

    return (
        <div className='starship-container'>
            {starShips.map((starShip, index) => {
                let location = {
                    pathname: '/starship',
                    state: starShip
                }
                return (
                    <Link
                        to={location}
                        key={starShip.name}
                    >
                        <div className='starship-card'>
                            {starShip.name}
                        </div>
                    </Link>)
            })}
        </div>
    )
}

export default Home