import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import problems from './components/problems';

class App extends Component {
  render () {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" exact component={Home}/>
          <Route path="/problems" component={problems}/>
        </BrowserRouter>
      </div>
    )
  }
}
// function App() {
//   return (
//     <div className="App">
//       <Home/>
//     </div>
//   );
// }

export default App;
