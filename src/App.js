import React from "react";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import NotFound from "./Notfound";
import Week from "./Week";
import ReviewMon from "./ReviewMon";
import ReviewTues from "./ReviewTues";
import ReviewWed from "./ReviewWed";
import ReviewThu from "./ReviewThu";
import ReviewFri from "./ReviewFri";
import ReviewSat from "./ReviewSat";
import ReviewSun from "./ReviewSun";

function App() {
  return (
    <div className="App">
      <Container>
        <Routes>
          <Route path="/" element={<Week />} />
          <Route path="/review/%EC%9B%94" element={<ReviewMon />} />
          <Route path="/review/%ED%99%94" element={<ReviewTues />} />
          <Route path="/review/%EC%88%98" element={<ReviewWed />} />
          <Route path="/review/%EB%AA%A9" element={<ReviewThu />} />
          <Route path="/review/%EA%B8%88" element={<ReviewFri />} />
          <Route path="/review/%ED%86%A0" element={<ReviewSat />} />
          <Route path="/review/%EC%9D%BC" element={<ReviewSun />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Container>
      {/* 인풋박스와 추가하기 버튼을 넣어줬어요. */}
    </div>
  );
}

const Container = styled.div`
  min-width: 400px;
  min-height: 85vh;
  background-color: #fff;
  padding: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export default App;
