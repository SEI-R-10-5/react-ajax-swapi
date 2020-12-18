import React from 'react'
import {Link} from 'react-router-dom'

const Home = (props) => {
    return (
    <div>
        <div>
            {props.starship.map((starship) => (
            <ul>

                <li>
                    <Link 
                    to={{pathname:'/starship', state: starship}}
                    key={starship.name}   
                    >
                    {starship.name}
                    </Link>
                </li>
            </ul>
        ))
    }
        </div>
    </div>
    )
}
export default Home

// props.starships.length ? (
//     //all the starship rendering stuff
// ) : (
//     <h4>loading...</h4>
// )