import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Axios from "axios";
import Home from './Home'
import Starship from './StarshipPage'

const Router = () => {
  const [starships, setStarships] = useState([]);

  const fetchStarships = async () => {
    const res = await Axios.get("https://swapi.dev/api/starships/");
    console.log(res.data.results);
    const starshipList = res.data.results;
    setStarships(starshipList);
  };

  useEffect(() => {
    fetchStarships();
  }, []);

  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          component={() => (<Home starships={starships} />)}
        ></Route>
        <Route
          path="/starship"
          render={(props) => (<Starship location={props.location} />)}
        ></Route>
      </Switch>
    </div>
  );
};
export default Router;
