import React, { useState } from "react";
import { ProgressBar } from "./components/Progressbar";

function App() {
  return (
    <div className="App">
      <h1>Hello React..!</h1>
      <ProgressBar 
        value={0.75} 
        label="Default progress bar"
      />
    </div>
  );
}

export default App;