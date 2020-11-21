import React, { useEffect, useState } from "react";
import axios from "axios";

const Pilots = ({ props }) => {
  const [pilots, setPilots] = useState([]);

  useEffect(() => {
    props.forEach((element) => {
      getPilots(element);
    });
  }, []);

  const getPilots = async (pilot) => {
    try {
      const data = await axios.get(pilot);
      setPilots((pilots) => [...pilots, data.data]);
    } catch (error) {
      throw error;
    }
  };

  return (
    <div>
      {pilots.map((element, i) => (
        <div key={i}>{element.name}</div>
      ))}
    </div>
  );
};
export default Pilots;
