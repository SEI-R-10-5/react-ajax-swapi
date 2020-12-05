import React from "react";
import { Link } from "react-router-dom";

const Starships = (props) => {
  const starship = props.location.state;

  return (
    <div className="ships">
      <h1>Starships</h1>
      <h3>{starship.name}</h3>
      <h3>Model: {starship.model}</h3>
      <h3>Crew Amount: {starship.crew}</h3>
      <h3>Passengers: {starship.passengers}</h3>
      <h3>Max Speed: {starship.max_atmosphering_speed}</h3>
      <h3>Cargo Capacity: {starship.cargo_capacity}</h3>
      <Link to="/" className="return">
        Return Home
      </Link>
    </div>
  );
};

export default Starships;
