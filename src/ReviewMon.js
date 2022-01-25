import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ReviewMon = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const navigtate = useNavigate();
  const onKeyPressed = (e) => {
    console.log(e.keyCode);
  };
  return (
    <Container>
      <h2>
        <Day>월요일</Day> 평점 남기기
      </h2>
      <div>
        {[...Array(5)].map((_, i) => {
          const ratingValue = i + 1;

          return (
            <Circle key={i}>
              <Input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              />

              <FaCircle
                size={35}
                cursor={"pointer"}
                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              />
            </Circle>
          );
        })}
      </div>
      <Button
        onClick={() => {
          navigtate("/");
        }}
      >
        평점 남기기
      </Button>
    </Container>
  );
};

const Day = styled.span`
  color: white;
  background-color: orange;
  border-radius: 5px;
  border: none;
  padding: 3px;
`;

const Input = styled.input`
  display: none;
`;
const Container = styled.div`
  text-align: center;
  margin: 50px 10px;
`;

const Button = styled.button`
  background-color: purple;
  margin-top: 20px;
  color: white;
  border: 1px solid grey;
  border-radius: 5px;
  width: 250px;
  height: 50px;
  cursor: pointer;
`;

const Circle = styled.label`
  margin: 7px;
`;

export default ReviewMon;
