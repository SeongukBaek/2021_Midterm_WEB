import React from "react";
import "./Home.css";

const Home = ({history}) => {
    return (
        <div>
            <h1><span className="solve">Solve</span> the <span className="computer">Computer!</span></h1>
            <h3>문제를 풀고, 틀린 것을 정리합시다</h3>
            <button title="시작하기" className="homeimgbtn" onClick={() => {history.push("/problems")}}>
                <img src="solve.png" alt="solve" className="homeimg"></img>
            </button>
        </div>
    )
}

export default Home;