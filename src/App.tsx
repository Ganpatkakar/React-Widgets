import React from "react";
import { GridLights } from "./components/GridLights";

function App() {
  return (
    <div className="App">
      <h1>Hello React..!</h1>
      <GridLights rowsCount={5} colunsCount={5} />
    </div>
  );
}

export default App;