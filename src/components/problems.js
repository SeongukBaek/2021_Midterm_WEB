import React, { Component } from "react";
// import styled from "styled-components";
import "./problems.css";
import Probhead from "./probhead";

const pbs = [
  {
    id: 1,
    pb: "GET 방식보다 POST 방식이 더 안전하다 (T or F)",
    answer: "t",
  },
  {
    id: 2,
    pb: "Dijkstra Algorithm은 어떤 기법을 사용하는 알고리즘인가 ? (Full name)",
    answer: "dynamic programming",
  },
  {
    id: 3,
    pb: "Node.js is a (      )-threaded application.",
    answer: "single",
  },
  {
    id: 4,
    pb: "웹사이트를 구성하는 3가지 요소는 HTML, CSS, (      )",
    answer: "javascript",
  },
  {
    id: 5,
    pb:
      "React에서 Component를 구현하는 방법에는 (      )형, class형 두 가지가 있다",
    answer: "function",
  },
  {
    id: 6,
    pb: "함수를 선언할 때 사용된 변수는 무엇인가 ?",
    answer: "parameter",
  },
  {
    id: 7,
    pb: "다른 함수에 argument로 전달되는 함수는 무엇인가 ?",
    answer: "callback",
  },
  {
    id: 8,
    pb:
      "<추가 문제> 고급 웹 프로그래밍 강의를 진행하는 강의실은 106호이다 (T or F)",
    answer: "t",
  },
];

class Problems extends Component {
  probcnt = 0;
  imgname = this.probcnt + 1 + ".png";
  correctcnt = 0;
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.inputChange = this.inputChange.bind(this);
    this.inputSubmit = this.inputSubmit.bind(this);
    this.inputReset = this.inputReset.bind(this);
  }
  inputChange(e) {
    this.setState({ input: e.target.value });
    console.log(this.state.input);
  }
  inputSubmit(e) {
    e.preventDefault();
    if (this.state.input.toLowerCase() === pbs[this.probcnt].answer) {
      this.correctcnt = this.correctcnt + 1;
      this.probcnt = this.probcnt + 1;
      this.imgname = this.probcnt + 1 + ".png";
      alert("Correct ! Get reward");
    } else {
      this.probcnt = this.probcnt + 1;
      this.imgname = this.probcnt + 1 + ".png";
      alert("Wrong !!!");
    }
    if (this.correctcnt >= 7 && this.probcnt >= 7) {
      this.props.history.push("/endpage/?success=1");
    } else if (this.correctcnt <= 5 && this.probcnt === 7) {
      this.props.history.push("/endpage/?success=0");
    }
    this.inputChange(e);
  }
  inputReset(e) {
    console.log(e);
  }
  render() {
    return (
      <div>
        <Probhead name={this.probcnt + 1} />
        <p>{pbs[this.probcnt].pb}</p>
        <form onSubmit={this.inputChange}>
          <input
            type="text"
            className="clear"
            placeholder="Your answer"
            value={this.state.value}
            onChange={this.inputChange}
          ></input>
          <button
            type="reset"
            className="btn_submit"
            value={this.state.value}
            onClick={this.inputSubmit}
          >
            제출
          </button>
        </form>
        <br></br>
        <div>
          <img
            src={this.imgname}
            alt="reward_img"
            className="reward_img"
            style={
              this.probcnt <= 7
                ? { visibility: "visible" }
                : { visibility: "hidden" }
            }
          ></img>
        </div>
      </div>
    );
  }
}

export default Problems;
