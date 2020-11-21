import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory, withRouter } from "react-router-dom";
import Home from "./Home";
import Starship from "./Starship";
import { __GetStarships } from "../Services/Swapi";

const Router = () => {
  const [selectedShip, setSelectedShip] = useState();

  const history = useHistory();

  const handleClick = async (e) => {
    try {
      const data = await __GetStarships();
      setSelectedShip(data.results[e]);
      history.push("/starship");
    } catch (error) {
      throw error;
    }
  };

  return (
    <main>
      <Switch>
        <Route
          exact
          path="/"
          component={(props) => <Home onClick={handleClick} />}
        />
        <Route
          path="/starship"
          component={(props) => <Starship props={selectedShip} />}
        />
      </Switch>
    </main>
  );
};

export default withRouter(Router);
