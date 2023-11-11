import React, { useState } from "react";
import ModelPopover from "./components/ModelPopOver";
import { Noop } from "./components/noop";

function App() {
  const [show, setShow] = useState(true);
  const handleClose = (event: React.MouseEvent<Element, MouseEvent>) => {
    event.preventDefault();
    setShow(false);
  }
  return (
    <div className="App">
      <h1>Hello React..!</h1>
      <ModelPopover
        show={show}
        handleClose={handleClose}
      >
        <div>Model internal content</div>
      </ModelPopover>
    </div>
  );
}

export default App;