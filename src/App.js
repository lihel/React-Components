import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Game from "./components/TicTacToe.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">header</header>
      <Router>
        <Route path="/" component={Game} />
      </Router>
    </div>
  );
}

export default App;
