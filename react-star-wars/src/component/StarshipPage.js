import React from 'react';
import { Link } from 'react-router-dom'

const StarshipPage = (props) => {
console.log('starshippage props', props)
  let starship = props.location.state
  return (
    <div className="singleship">
      <h1>
        Your Starship:
      </h1>
      <h3>
       Model: {starship.model}
       </h3>
       <ul>
       <li>
          manufacture: {starship.manufacturer}
       </li>
       <li>
       max atmosphering speed: {starship.max_atmosphering_speed}
       </li>
       <li>
       Crew: {starship.crew}
       </li>
       <li>
       passengers: {starship.passengers}
       </li>
      </ul>
      <Link to={"/"}
         >
        Back
      </Link>
    </div>
  )
}


export default StarshipPage

// {
//   props.starships.map(starship => {
//     let location = {
//       pathname: '/starship',
//       state: starship
//     }
//     return (
//       <Link
//         to={location}
//         key={starship.name}
//       >
//         {starship.name}
//       </Link>
//     )
//   })
// }