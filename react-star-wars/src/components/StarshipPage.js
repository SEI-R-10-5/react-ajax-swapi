import React from 'react'
import { Link } from 'react-router-dom'
import PilotList from './PilotList'

const StarshipPage = (props) => {
   const { name, model } = props.location.state

   return (
      <div className="starshipBlock">
         <div className="starship">
            <div className="starRow">
               <div>NAME:</div>
               <div>{name}</div>
            </div>
            <div className="starRow">
               <div>MODEL:</div>
               <div>{model}</div>
            </div>
            <div className="starRow">
               <div>PILOTS:</div>
               <PilotList pilots={props.location.state.pilots} />
            </div>
            <div className="starRow">
               <div>
                  <Link to="/" id="returnLink">
                     RETURN
                  </Link>
               </div>
               <div></div>
            </div>
         </div>
      </div>
   )
}

export default StarshipPage
