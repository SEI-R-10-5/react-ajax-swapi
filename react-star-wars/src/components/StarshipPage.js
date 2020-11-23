import React from "react";
import { Link } from "react-router-dom";

const StarshipPage = (props) => {
  let starship = props.location.state;

  return (
    <div className="">
      <div className="">
        <div className="">
          <h4>NAME: {starship.name}</h4>
          <h5>MODEL: {starship.model}</h5>
          <h5>MANUFACTURER: {starship.manufacturer}</h5>
          <h5>CLASS: {starship.starship_class}</h5>
          <h5>CREW: {starship.crew}</h5>

          <Link to="/">
            <div className="">
              <div className="">
                <h5 className="">Return</h5>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StarshipPage;
