import React from 'react';
import { Link } from 'react-router-dom'

const Home = (props) => {
  return (
    <div className="main-wrapper">
      <main>
      <h1> Welcome trooper, choose your ship</h1>
      </main>

      {props.starships.map(starship => {
         let location = {
           pathname: '/starship',
           state: starship
         }
         return (
           <div className="shipBox">
           <Link
             to={location}
             key={starship.name}
           >
             {starship.name}
           </Link>
           </div>
         )
       })}
    </div>
  )
}
export default Home

  // >
  // { starship.name }  
  //          </Link >
//do this cause same as href - saying what the link should say

// const Home = (props) => {
//   return (
//     <div>
//       {props.starships.map(starship => {
//         //  let location = {
//         //    pathname: '/starship',
//         //    state: starship
//         <Link to={{ pathname: "/starship", state: starship }}
//           key={starship.name}
//         >
//           {starship.name}
//         </Link>
//       })}
//     </div>
//   )
// }

// export default Home