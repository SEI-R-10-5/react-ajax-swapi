import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
   return (
      <div className="homeBlock">
         {props.starships.map((e) => {
            let location = {
               pathname: '/starships',
               state: e,
            }
            return (
               <div className="starship" key={e.name}>
                  <Link to={location} >
                     {e.name}
                  </Link>
               </div>
            )
         })}
      </div>
   )
}

export default Home
