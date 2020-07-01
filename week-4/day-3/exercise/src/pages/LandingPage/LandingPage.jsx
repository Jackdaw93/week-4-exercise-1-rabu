import React from "react";
import "components/Avatar/Avatar";
import Avatar from "components/Avatar/Avatar";
import "./LandingPage.css";
import "components/Student/Student";
import Student from "components/Student/Student";

function LandingPage() {
  let name = "RohMad";
  let address = "Jakarta Utara";
  return (
    <div className="containerStudent">
      <Avatar />
      <Student name={name} address={address} />
    </div>
  );
}

export default LandingPage;
