import React from "react";
import { Link } from 'react-router-dom'

const Home = (props) => {
  console.log(props);
  // this is passing in the array of 10 ships
    
  return (
    <div>
      <h2>Star Wars Starships</h2>
      {props.starships.map((starship) => {
          console.log(starship)
        let location = {
          pathname: `/starship/${starship.name}`,
          state: starship,
        };
        return (
         <div className="card">   
          <Link to={location} key={starship.name}>
            {starship.name}
          </Link>
        </div>
        )}
        )} 
    </div>
  )
};
export default Home;
