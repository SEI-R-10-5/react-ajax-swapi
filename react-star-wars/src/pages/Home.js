import React from 'react'
import {Link} from 'react-router-dom'

const Home = (props) => {
    return (
        <div >
            <h1>Welcome</h1>
            <div >
                {props.starShips.map((manyShips) => (
                    <div className="allShipDiv">
                    <Link className="allShips" to={{pathname: "/starShipPage", state: manyShips}} key={manyShips.name}>
                        {manyShips.name}
                    </Link>
                    </div>
                ))}
               <h2>All Starships go here</h2>
            </div>
        </div>
    )
}

export default Home