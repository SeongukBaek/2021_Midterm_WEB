import React from "react";
import "./Home.css";

const Home = ({ history }) => {
  return (
    <div>
      <h1>
        <span className="complete">Complete</span> My{" "}
        <span className="computer">Computer!</span>
      </h1>
      <h3>문제를 맞추고</h3>
      <h3>컴퓨터를 완성해봅시다</h3>
      <p className="des">(모든 답은 영어로 적어야 합니다)</p>
      <img
        src="s.png"
        alt="solve"
        className="homeimg"
        onClick={() => {
          history.push("/problems");
        }}
      ></img>
    </div>
  );
};

export default Home;
