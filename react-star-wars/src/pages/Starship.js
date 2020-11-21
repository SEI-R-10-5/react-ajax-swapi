import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Home.css'

const Starship=(props)=>{

    let starship = props.location.state

    return(
        <div>
            <nav>
                <h1>Starships</h1>
            </nav>
            <div>
                <div className='card'>
                    <h1>Name: {starship.name}</h1>
                    <h2>Model: {starship.model}</h2>
                    <h2>Capacity: {starship.cargo_capacity} tons</h2>
                    <h3>Price: {starship.cost_in_credits} credits</h3>
                    <Link to='/'>
                        <h4 className='link'>Return</h4>
                    </Link>
                </div>                
            </div>

        </div>
    )
}

export default Starship