import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Problems from "./components/problems";
import Endpage from "./components/endpage";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/problems" component={Problems} />
          <Route path="/endpage" component={Endpage} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
