import React from 'react'
import {Link} from 'react-router-dom'

const StarShipPage = (props) => {
    console.log(props)
    return (
        <div style={{textAlign: 'left', borderRadius: '10px', backgroundColor: '#86CB92', padding: '50px'}}>
            {props.location.state ? 
                <div>
                    <p> NAME: {props.location.state.name} </p>
                    <p> MODEL: {props.location.state.model} </p>
                    <Link
                        to='/'
                        style= {{textDecoration: 'none', color: 'white'}}
                    > Back
                    </Link>
                </div>
                :
                <p> Loading... </p>
            }   
        </div>
    )
}

export default StarShipPage;