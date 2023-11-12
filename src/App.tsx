import React, { useState } from "react";
import DataTableComponent from "./components/DataTable";
import CarouselComponent from "./components/Carousel";

function App() {
  const [show, setShow] = useState(true);
  const handleClose = (event: React.MouseEvent<Element, MouseEvent>) => {
    event.preventDefault();
    setShow(false);
  }
  return (
    <div className="App">
      <h1>Hello React..!</h1>
      <CarouselComponent />
    </div>
  );
}

export default App;