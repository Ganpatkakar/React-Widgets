import React, { useState } from "react";
import DataTableComponent from "./components/DataTable";

function App() {
  const [show, setShow] = useState(true);
  const handleClose = (event: React.MouseEvent<Element, MouseEvent>) => {
    event.preventDefault();
    setShow(false);
  }
  return (
    <div className="App">
      <h1>Hello React..!</h1>
      <DataTableComponent />
    </div>
  );
}

export default App;