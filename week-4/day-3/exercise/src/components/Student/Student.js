import React from "react";

function Student({ name, address }) {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{address}</h3>
    </div>
  );
}

export default Student;
