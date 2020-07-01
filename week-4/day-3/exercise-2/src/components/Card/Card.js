import React from "react";
import "./Card.css";

function Card(props) {
  let image = props.image;
  let head = props.head;
  let descript = props.descript;

  console.log(props);

  return (
    <>
      <div className="card">
        <div className="foto">
          <img className="img" src={image} alt="My Course" />
          <div className="head">
            <p>{head}</p>
          </div>
          <div className="descript">
            <p>{descript}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
