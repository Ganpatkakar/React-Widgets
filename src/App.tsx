import React from "react";
import { SnakeGame } from "./components/Snake";

function App() {
  return (
    <div className="App">
      <h1>Hello React..!</h1>
      <SnakeGame width={300} height={300}/>
    </div>
  );
}

export default App;