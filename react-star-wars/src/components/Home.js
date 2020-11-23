import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div className="row">
      <div className="">
        {props.starships.map((starship) => {
          let location = {
            pathname: "/starship",
            state: starship,
          };
          return (
            <Link to={location} key={starship.name}>
              {starship.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
