import React from "react";
import { FaCircle } from "react-icons/fa";
import styled from "styled-components";

const Stars = () => {
  const random = Math.floor(Math.random() * 5) + 1;
  return (
    <Container>
      {[...Array(random)].map((_, i) => {
        return (
          <Circle key={i}>
            <FaCircle size={35} color={"#ffc107"} />
          </Circle>
        );
      })}
      {[...Array(5 - random)].map((_, i) => {
        return (
          <Circle key={i}>
            <FaCircle size={35} color={"#e4e5e9"} />
          </Circle>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  margin: 0 10px 0 10px;
`;

const Circle = styled.label`
  margin: 7px;
`;

export default Stars;
