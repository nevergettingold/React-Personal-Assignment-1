import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Stars from "./Stars";

const Week = (day1, day2, day3, day4, day5, day6, day7) => {
  const navigate = useNavigate();
  const todaydate = new Date();

  return (
    <div>
      <Title>내 일주일은?</Title>
      <Day1>
        {todaydate.getDay() === 0
          ? (day1 = "일")
          : todaydate.getDay() === 1
          ? (day1 = "월")
          : todaydate.getDay() === 2
          ? (day1 = "화")
          : todaydate.getDay() === 3
          ? (day1 = "수")
          : todaydate.getDay() === 4
          ? (day1 = "목")
          : todaydate.getDay() === 5
          ? (day1 = "금")
          : (day1 = "토")}
        <Stars />
        <Triangle
          onClick={() => {
            navigate(`/review/${day1}`);
          }}
        />
      </Day1>
      <Day2>
        {todaydate.getDay() === 0
          ? (day2 = "월")
          : todaydate.getDay() === 1
          ? (day2 = "화")
          : todaydate.getDay() === 2
          ? (day2 = "수")
          : todaydate.getDay() === 3
          ? (day2 = "목")
          : todaydate.getDay() === 4
          ? (day2 = "금")
          : todaydate.getDay() === 5
          ? (day2 = "토")
          : (day2 = "일")}
        <Stars />
        <Triangle
          onClick={() => {
            navigate(`/review/${day2}`);
          }}
        />
      </Day2>
      <Day3>
        {todaydate.getDay() === 0
          ? (day3 = "화")
          : todaydate.getDay() === 1
          ? (day3 = "수")
          : todaydate.getDay() === 2
          ? (day3 = "목")
          : todaydate.getDay() === 3
          ? (day3 = "금")
          : todaydate.getDay() === 4
          ? (day3 = "토")
          : todaydate.getDay() === 5
          ? (day3 = "일")
          : (day3 = "월")}
        <Stars />
        <Triangle
          onClick={() => {
            navigate(`/review/${day3}`);
          }}
        />
      </Day3>
      <Day4>
        {todaydate.getDay() === 0
          ? (day4 = "수")
          : todaydate.getDay() === 1
          ? (day4 = "목")
          : todaydate.getDay() === 2
          ? (day4 = "금")
          : todaydate.getDay() === 3
          ? (day4 = "토")
          : todaydate.getDay() === 4
          ? (day4 = "일")
          : todaydate.getDay() === 5
          ? (day4 = "월")
          : (day4 = "화")}
        <Stars />
        <Triangle
          onClick={() => {
            navigate(`/review/${day4}`);
          }}
        />
      </Day4>
      <Day5>
        {todaydate.getDay() === 0
          ? (day5 = "목")
          : todaydate.getDay() === 1
          ? (day5 = "금")
          : todaydate.getDay() === 2
          ? (day5 = "토")
          : todaydate.getDay() === 3
          ? (day5 = "일")
          : todaydate.getDay() === 4
          ? (day5 = "월")
          : todaydate.getDay() === 5
          ? (day5 = "화")
          : (day5 = "수")}
        <Stars />
        <Triangle
          onClick={() => {
            navigate(`/review/${day5}`);
          }}
        />
      </Day5>
      <Day6>
        {todaydate.getDay() === 0
          ? (day6 = "금")
          : todaydate.getDay() === 1
          ? (day6 = "토")
          : todaydate.getDay() === 2
          ? (day6 = "일")
          : todaydate.getDay() === 3
          ? (day6 = "월")
          : todaydate.getDay() === 4
          ? (day6 = "화")
          : todaydate.getDay() === 5
          ? (day6 = "수")
          : (day6 = "목")}
        <Stars />
        <Triangle
          onClick={() => {
            navigate(`/review/${day6}`);
          }}
        />
      </Day6>
      <Day7>
        {todaydate.getDay() === 0
          ? (day7 = "토")
          : todaydate.getDay() === 1
          ? (day7 = "일")
          : todaydate.getDay() === 2
          ? (day7 = "월")
          : todaydate.getDay() === 3
          ? (day7 = "화")
          : todaydate.getDay() === 4
          ? (day7 = "수")
          : todaydate.getDay() === 5
          ? (day7 = "목")
          : (day7 = "금")}
        <Stars />
        <Triangle
          onClick={() => {
            navigate(`/review/${day7}`);
          }}
        />
      </Day7>
    </div>
  );
};

const Title = styled.h2`
  margin: 50px;
  color: #007cff;
  text-align: center;
`;

const Day1 = styled.div`
  display: flex;
  font-weight: bold;
  margin: 25px 20px 30px 40px;
  align-items: center;
`;

const Day2 = styled(Day1)``;
const Day3 = styled(Day1)``;
const Day4 = styled(Day1)``;
const Day5 = styled(Day1)``;
const Day6 = styled(Day1)``;
const Day7 = styled(Day1)``;

const Triangle = styled.div`
  margin-bottom: 6px;
  border-color: #116e50 transparent;
  border-right-width: 0.9rem;
  border-right-style: solid;
  border-bottom-width: 1.5rem;
  border-bottom-style: solid;
  border-left-width: 0.9rem;
  border-left-style: solid;
  cursor: pointer;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  &:hover {
    border-color: red transparent;
    transform: rotate(-90deg);
    /* border-radius: 50%; */
  }
`;

export default Week;
