import React from "react";
import logo from "./logo.svg";
import Question from "./question/Question";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Question />
      </header>
    </div>
  );
}

export default App;
