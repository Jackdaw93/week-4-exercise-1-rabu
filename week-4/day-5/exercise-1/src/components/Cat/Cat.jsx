import React, { useState } from "react";

import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const FormInput = styled.input`
  width: 200px;
  padding: 12px 20px;
  box-sizing: border-box;
`;

const Button = styled.button`
  background-color: blue;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;

const H3 = styled.h3`
  text-align: center;
`;

function Cat() {
  const [show, setShow] = useState(0);
  const [age, setAge] = useState(0);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (age === "1") {
      setShow(15);
    } else if (age === "2") {
      setShow(24);
    } else if (age >= 3) {
      setShow(24 + (age - 2) * 4);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Div>
          <FormInput
            type="number"
            name="age"
            id="age"
            placeholder="Cat Age"
            value={age}
            onChange={handleChange}
          />
        </Div>
        <Div>
          <Button type="submit">Calculate</Button>
        </Div>
      </form>
      <div>
        <H3>Human Age: {show}</H3>
      </div>
    </div>
  );
}

export default Cat;
