import React from "react";
import probhead from "./probhead";

const problems = ({history}) => {
    return (
        <div>
            <probhead />
            <span>문제</span>

            <div className="answer">
                <span>정답 </span><input type="text"></input>
                <button>제출</button>
            </div>
            <div>
                <b>사용자 입력값: </b>
            </div>
        </div>
    );
}

export default problems;