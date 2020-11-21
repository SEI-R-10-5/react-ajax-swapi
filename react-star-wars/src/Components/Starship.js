import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Pilots from "./Pilots";

const Starship = ({ props }) => {
  const history = useHistory();

  window.onload(history.push("/"));

  return (
    <section>
      {/* <Redirect to="/" /> */}
      <h1>{props.name}</h1>
      <div className="ship-wrapper">
        <div className="ship">
          <div>{props.model}</div>
          <div>Pilots:</div>
          {props.pilots.length >= 1 ? (
            <Pilots props={props.pilots} />
          ) : (
            <div>No Pilots</div>
          )}
          <button className="button" onClick={() => history.push("/")}>
            Return To Ship List
          </button>
        </div>
      </div>
    </section>
  );
};

export default Starship;
