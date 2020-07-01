import React, { useState } from "react";
import "components/Avatar/Avatar";
import Avatar from "components/Avatar/Avatar";
import "./LandingPage.css";
import "components/Student/Student";
import Student from "components/Student/Student";
import Card from "components/Card/Card";

import image1 from "assets/Images/html.svg";
import image2 from "assets/Images/css.svg";

function LandingPage() {
  const [name] = useState("RohMad");
  const [title] = useState("IMPACT BYTE");
  const [bio] = useState("Coding Asyik di Impact Byte");
  let courses = [
    {
      image: image1,
      head: "Fundamental HTML",
      descript: "Learn HTML Fundamental for building website",
    },
    {
      image: image2,
      head: "Fundamental CSS",
      descript: "Learn CSS Fundamental for building website",
    },
  ];

  // console.log(image);

  let cards = courses.map((course, index) => (
    <Card
      key={index}
      image={course.image}
      head={course.head}
      descript={course.descript}
    />
  ));
  console.log(cards);

  return (
    <>
      <div className="containerStudent">
        <Avatar />
        <Student name={name} title={title} bio={bio} />
      </div>
      <div className="h3">My Course</div>
      <div className="containerCard">{cards}</div>
    </>
  );
}

export default LandingPage;
