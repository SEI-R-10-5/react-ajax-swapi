import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Starship.css'

const StarshipPage = (props) => {
    const { state } = props.location

    console.log('StarshipPage props: ', props)

    if (state !== null) {

        return (
            <div className='container'>
                <div class='starship-solo'>
                    <div className='starship-card'>
                        {state.name}
                        {state.model}
                    </div>
                    <div>
                        <Link to='/'>Return to home</Link>
                    </div>
                </div>
            </div>
        )
    }
    return <div>Loading...</div>
}
export default StarshipPage