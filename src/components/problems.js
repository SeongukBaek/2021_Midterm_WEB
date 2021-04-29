import React, { Component } from "react";
import "./problems.css";
import Probhead from "./probhead";
import i0 from "../images/0.png";
import i1 from "../images/1.png";
import i2 from "../images/2.png";
import i3 from "../images/3.png";
import i4 from "../images/4.png";
import i5 from "../images/5.png";
import i6 from "../images/6.png";

const pbs = [
  {
    id: 1,
    pb: "GET 방식보다 POST 방식이 더 안전하다 (T or F)",
    answer: "t",
    reward: "Monitor",
  },
  {
    id: 2,
    pb:
      "(      )는 높은 신뢰성을 보장하고, Congestion Control 및 Flow Control을 수행한다",
    answer: "tcp",
    reward: "Main body",
  },
  {
    id: 3,
    pb: "Node.js is a (      )-threaded application.",
    answer: "single",
    reward: "Router",
  },
  {
    id: 4,
    pb: "웹사이트를 구성하는 3가지 요소는 HTML, CSS, (      )",
    answer: "javascript",
    reward: "Mouse",
  },
  {
    id: 5,
    pb:
      "React에서 Component를 구현하는 방법에는 (      )형, class형 두 가지가 있다",
    answer: "function",
    reward: "Speaker",
  },
  {
    id: 6,
    pb: "함수를 선언할 때 사용된 변수는 무엇인가 ?",
    answer: "parameter",
    reward: "HDD",
  },
  {
    id: 7,
    pb: "다른 함수에 argument로 전달되는 함수는 무엇인가 ?",
    answer: "callback",
    reward: "Keyboard",
  },
  {
    id: 8,
    pb:
      "<추가 문제> 고급 웹 프로그래밍 강의를 진행하는 강의실은 106호이다 (T or F)",
    answer: "t",
    reward: "Additional Part",
  },
];

class Problems extends Component {
  probcnt = 0;
  correctcnt = 0;
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.inputChange = this.inputChange.bind(this);
    this.inputSubmit = this.inputSubmit.bind(this);
  }
  inputChange(e) {
    this.setState({ input: e.target.value });
    console.log(this.state.input, this.probcnt);
  }
  inputSubmit(e) {
    e.preventDefault();
    if (this.state.input.toLowerCase() === pbs[this.probcnt].answer) {
      this.correctcnt = this.correctcnt + 1;
      this.probcnt = this.probcnt + 1;
      alert(pbs[this.probcnt - 1].reward + " GET!");
    } else {
      this.probcnt = this.probcnt + 1;
      alert("Wrong ! Answer is " + pbs[this.probcnt - 1].answer);
    }
    if (this.correctcnt >= 7 && this.probcnt >= 7) {
      this.props.history.push(
        "/2021_Midterm_WEB/endpage/?success=1&correct=" + this.correctcnt
      );
    } else if (this.correctcnt <= 5 && this.probcnt === 7) {
      this.props.history.push(
        "/2021_Midterm_WEB/endpage/?success=0&correct=" + this.correctcnt
      );
    }
    this.inputChange(e);
  }
  render() {
    return (
      <div>
        <Probhead name={this.probcnt + 1} />
        <p className="pb_text">{pbs[this.probcnt].pb}</p>
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
        <div className="reward_area">
          <p className="reward_text">REWARD</p>
          <img
            src={
              this.probcnt === 0
                ? i0
                : this.probcnt === 1
                ? i1
                : this.probcnt === 2
                ? i2
                : this.probcnt === 3
                ? i3
                : this.probcnt === 4
                ? i4
                : this.probcnt === 5
                ? i5
                : this.probcnt === 6
                ? i6
                : i6
            }
            alt="reward_img"
            className="reward_img"
            style={
              this.probcnt < 7
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
