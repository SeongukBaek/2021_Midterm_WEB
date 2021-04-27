import React, { Component } from "react";
import "./problems.css";
import Probhead from "./probhead";

const pbs = [
    {
        id: 1,
        pb: 'GET 방식보다 POST 방식이 더 안전하다 (T or F)',
        answer: 't'
    },
    {
        id: 2,
        pb: 'Dijkstra Algorithm은 어떤 기법을 사용하는 알고리즘인가 ?',
        answer: 'dynamic programming'
    },
    {
        id: 3,
        pb: 'Node.js is a (      )-threaded application.',
        answer: 'single'
    },
    {
        id: 4,
        pb: '웹사이트를 구성하는 3가지 요소는 HTML, CSS, (      )',
        answer: 'javascript'
    },
    {
        id: 5,
        pb: 'React에서 Component를 구현하는 방법에는 (      )와(과) 클래스형 두 가지가 있다',
        answer: '함수형'
    },
    {
        id: 6,
        pb: '함수를 선언할 때 사용된 변수는 무엇인가 ?',
        answer: 'parameter'
    },
    {
        id: 7,
        pb: '다른 함수에 argument로 전달되는 함수는 무엇인가 ?',
        answer: 'callback'
    },
    {
        id: 8,
        pb: '<추가 문제> 고급 웹 프로그래밍 강의를 진행하는 강의실은 106호이다 (T or F)',
        answer: 't'
    }
]

class problems extends Component {
    probcnt = 0
    correctcnt = 0
    state = {
        input: ''
    }
    inputChange = (e) => {
        this.setState({
            input: e.target.value
        });
    }
    inputSubmit = (e) => {
        e.preventDefault();
        if (this.state.input.toLowerCase() === pbs[this.probcnt].answer) {
            alert('Correct answer');
            this.correctcnt = this.correctcnt + 1;
            if (this.probcnt === 6 && this.correctcnt === 7)
                alert('go to endpage');
        }
        else {
            alert('Wrong !!!');
        }
    }
    gotonext = (e) => {
        e.preventDefault();
        this.probcnt = this.probcnt + 1;
    }
    render() {
        return (
            <div>
                <Probhead name={this.probcnt+1}/>
                <p>{pbs[this.probcnt].pb}</p>
                <form onSubmit={this.inputSubmit}>
                    <input type="text" placeholder="Your answer" onChange={this.inputChange}></input>
                    <button type="submit" className="btn_submit" onClick={this.inputSubmit}>제출</button>
                </form>
                <br></br>
                <button type="submit" onClick={this.gotonext}>다음 문제</button>
            </div>
        );
    }
}

export default problems;