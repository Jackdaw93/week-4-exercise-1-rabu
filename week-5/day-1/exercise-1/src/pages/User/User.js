import React, { useState } from "react";
import styled from "styled-components";

import avatar from "logo.svg";
import { useParams } from "react-router-dom";

const DivContainerOne = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border: 1px solid black;
`;

const DivContainerTwo = styled.div`
  margin-top: 4px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border: 1px solid black;
`;

const DivContainerThree = styled.div`
  margin-top: 4px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border: 1px solid black;
`;

const Input = styled.input`
  width: 200px;
  height: 20px;
  border-radius: 3px;
  border: 1px solid black;
`;

const DivAvatar = styled.div`
  width: 200px;
  & img {
    width: 100%;
    border-radius: 10px;
    border: 1px solid black;
  }
  & h2,
  p {
    text-align: center;
  }
`;

function User() {
  const [username, setUser] = useState({});
  function handleChange(event) {
    setUser({
      ...username,
      [event.target.name]: event.target.value,
    });
  }
  //   console.log(username);
  let user = username;
  function handleSubmit(event) {
    event.preventDefault();
    console.log(user);
  }

  return (
    <div style={{ margin: "40px", border: "1px solid black" }}>
      <DivContainerOne>
        <form onSubmit={handleSubmit}>
          <Input
            id="username"
            name="username"
            placeholder="Type username and press Enter"
            onChange={handleChange}
          />
        </form>
      </DivContainerOne>
      <DivContainerTwo>
        <DivAvatar>
          <img src={avatar} alt="Avatar" />
          <h2>Rohmad</h2>
          <p>DKI Jakarta</p>
        </DivAvatar>
      </DivContainerTwo>
      <DivContainerThree>
        <p>Followers: 76</p>
        <p>Repositories: 76</p>
        <p>Following: 76</p>
      </DivContainerThree>
    </div>
  );
}

export default User;
