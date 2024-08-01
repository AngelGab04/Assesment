import React from "react";
import "../App.css";

const Citizen = ({ index, citizen, toggleStatus }) => {
  return (
    <li>
      <span>{index + 1}</span>
      <span>{citizen.name}</span>
      <span>{citizen.age}</span>
      <span>{citizen.address}</span>
      <span>{citizen.status}</span>
      <span>
        <button onClick={() => toggleStatus(index)}>Toggle Status</button>
      </span>
    </li>
  );
};

export default Citizen;
