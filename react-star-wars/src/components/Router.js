import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import StarshipPage from "./StarshipPage";
import axios from "axios";

const Router = () => {
  const [starships, setStarships] = useState([]);

  const getStarships = async () => {
    const data = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://swapi.dev/api/starships`
    );
    setStarships(data.data.results);
    console.log(data.data.results, setStarships);
  };
  useEffect(() => {
    getStarships();
  }, []);

  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          component={(props) => <Home {...props} starships={starships} />}
        />
        <Route path="/starships" component={StarshipPage} />
      </Switch>
    </div>
  );
};

export default Router;
