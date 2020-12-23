import React from "react";
import { Link } from "react-router-dom";

const Starship = (props) => {
//   console.log("StarshipPage:", props);
//   console.log("starship page hit");
  let starship = props.location.state
  console.log("StarshipPage: props", starship)

  return (
    <div className="card">
      <div>
        <h4>Name:{starship.name}</h4>
        <h4>Model:{starship.model}</h4>
        <h4>Manufacturer:{starship.manufacturer}</h4>
        <h4>Cost:{starship.cost_in_credits}</h4>
        <h4>Crew:{starship.crew}</h4>
        <h4>Passenger Capacity:{starship.passengers}</h4>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};
export default Starship;
