import React from "react";
import "./probhead.css";

const probhead = () => {
    return (
        <div className="prob_head">
            <span className="prob_solved">푼 문제: {}/10</span>
        </div>
    );
}

export default probhead;