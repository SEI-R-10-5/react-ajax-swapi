import React from 'react'
import {Link} from 'react-router-dom'
import "../styles/starship.css";


const StarShip = (props) => {
    let starShip = props.location.state
    return (starShip ? (
           <div className='whole-container'>
                <div className='info-container'>
                <p className='name'>
                  <span>Make:</span>  {starShip.name}
                </p>
                <p className='model'>
                   <span>Model:</span> {starShip.model}
                </p>
                <p className="return">
                    <Link to={'/'} >
                            Return
                    </Link>
                </p>
            </div>
           </div>
        ) : (
            <h2>Loading....</h2>
        )
    )
}

export default StarShip