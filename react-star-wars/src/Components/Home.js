import React, { useEffect, useState } from "react";
import { __GetStarships } from "../Services/Swapi";

const Home = (props) => {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    getStartsips();
    return () => {
      setShips([]);
    };
  }, []);

  const getStartsips = async () => {
    const data = await __GetStarships();
    setShips(data.results);
  };

  return (
    <div>
      <h1>Star Wars Starships</h1>
      <div className="grid">
        {ships
          ? ships.map((element, i) => (
              <div className="ships" key={i} onClick={() => props.onClick(i)}>
                <h3>{element.name}</h3>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Home;
