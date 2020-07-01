import React from "react";

function Student(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.title}</h3>
      <p>{props.bio}</p>
    </div>
  );
}

export default Student;
