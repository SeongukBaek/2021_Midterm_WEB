import React from "react";
import "./Home.css";

const Home = ({ history }) => {
  return (
    <div>
      <h1 className="home_title">
        <span className="complete">Complete </span> My{" "}
        <span className="computer"> Computer!</span>
      </h1>
      <h3>컴퓨터 부품 모으기</h3>
      <p className="des">(모든 답은 영어로 적어야 합니다)</p>
      <img
        src={require("../images/s.png").default}
        alt="solve"
        className="homeimg"
        onClick={() => {
          history.push("/2021_Midterm_WEB/problems");
        }}
      ></img>
    </div>
  );
};

export default Home;
