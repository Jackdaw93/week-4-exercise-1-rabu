import React from "react";

import "./Avatar.css";
import avatar from "assets/Images/productivity.svg";

function Avatar() {
  return (
    <div>
      <img src={avatar} alt="Avatar" className="avatar" />
    </div>
  );
}

export default Avatar;
