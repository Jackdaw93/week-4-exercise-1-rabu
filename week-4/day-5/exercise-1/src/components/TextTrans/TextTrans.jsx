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

function TextTrans() {
  const [data, setData] = useState({ text: "", result: "" });

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const split = data.text.split("");
    const result = split
      .map((item) => {
        if (item.match(/[A-Z]/)) {
          item = item.toLowerCase();
        } else {
          item = item.toUpperCase();
        }

        return item;
      })
      .join("");

    setData({
      ...data,
      result: result,
    });
  };

  return (
    <div>
      <Div>
        <FormInput
          placeholder="Text..."
          type="text"
          name="text"
          onChange={handleChange}
          value={data.text}
        ></FormInput>
      </Div>

      <Div>
        <Button type="submit" onClick={handleSubmit}>
          Transform
        </Button>
      </Div>

      <Div>
        <H3>
          Transform text {data.text} is {data.result}
        </H3>
      </Div>
    </div>
  );
}

export default TextTrans;
