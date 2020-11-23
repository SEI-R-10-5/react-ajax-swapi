import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import StarshipPage from "../components/StarshipPage";
import Home from "../components/Home";

const Router = () => {
  //use state variable for statships
  const [starships, setStarships] = useState([]);

  // get starships var
  const getStarship = async () => {
    const ships = await axios.get("https://swapi.dev/api/starships");
    console.log(ships.data.results);
    setStarships(ships.data.results);
  };
  // life cycle method
  useEffect(() => {
    getStarship();
  }, []);

  return (
    <Switch>
      <Route exact path="/" component={() => <Home starships={starships} />} />
      <Route
        path="/starship"
        render={(props) => <StarshipPage location={props.location} />}
      />
    </Switch>
  );
};

export default Router;
