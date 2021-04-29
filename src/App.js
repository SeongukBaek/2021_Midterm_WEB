import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Problems from "./components/problems";
import Endpage from "./components/endpage";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/problems" component={Problems} />
            <Route path="/endpage" component={Endpage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
