import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ShoppingList from "./components/TicTacToe.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">23333</header>
      <Router>
        <Route path="/" component={ShoppingList} />
      </Router>
    </div>
  );
}

export default App;
