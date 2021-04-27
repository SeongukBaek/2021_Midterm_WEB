import React, { Component } from "react";
import "./probhead.css";

class Probhead extends Component {
    render() {
        return (
            <header className="prob_head">
                <h3>문제 번호: <span>{this.props.name}</span> / 7</h3>
            </header>
        );
    }
}

export default Probhead;