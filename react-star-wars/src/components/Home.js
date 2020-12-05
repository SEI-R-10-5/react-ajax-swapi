import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  if (!props.starships.length) {
    return <div>Loading...</div>;
  }
  return (
    <div className="home">
      <h1>Star Wars Ships</h1>
      <div>
        {props.starships.map((starship) => (
          <li>
            <Link
              className="shiplinks"
              to={{ pathname: "/starships", state: starship }}
              key={starship.name}
            >
              {starship.name}
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Home;
