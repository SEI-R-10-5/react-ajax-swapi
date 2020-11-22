import React from 'react';


const StarshipPage = (props) => {
console.log('starshippage props', props)
  let starship = props.location.state
  return (
    <div>
      <h1>
        Starships!
      </h1>
      <h3>
       Model: {starship.model}
       manufacture: {starship.manufacture}
       max atmosphering speed: {starship.max_atmosphering_speed}
       Crew: {starship.crew}
       passengers: {starship.passengers}
      </h3>
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