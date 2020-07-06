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

function Bmi() {
  const [show, setShow] = useState("");
  const [bmx, setBmx] = useState({
    height: 0,
    weight: 0,
  });

  const handleChange = (event) => {
    setBmx({
      ...bmx,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    let results = bmx.weight / Math.pow(bmx.height / 100, 2);
    if (results < 17) {
      setShow("Kurus, Kekurangan Berat Badan Berat");
    } else if (results >= 17 && results <= 18.4) {
      setShow("Kurus, Kekurangan Berat Badan Ringan");
    } else if (results > 18.5 && results <= 25) {
      setShow("Normal");
    } else if (results > 25 && results <= 27) {
      setShow("Gemuk, Kelebihan Berat Badan Tingkat Ringan");
    } else {
      setShow("Gemuk, Kelebihan Berat Badan Tingkat Berat");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Div>
          <FormInput
            type="number"
            name="height"
            id="height"
            placeholder="Height"
            value={bmx.height}
            onChange={handleChange}
          />
        </Div>
        <Div>
          <FormInput
            type="number"
            name="weight"
            id="weight"
            placeholder="Weight"
            value={bmx.weight}
            onChange={handleChange}
          />
        </Div>
        <Div>
          <Button type="submit">Calculate</Button>
        </Div>
      </form>
      <div>
        <H3>Your BMI is {show}</H3>
      </div>
    </div>
  );
}

export default Bmi;
