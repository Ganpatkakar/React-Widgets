import React, { useReducer, useState } from "react";
import Checkbox from "./components/Checkbox";
import Slider from "./components/Slider";

function App() {
  const [slideVal, setSliderVal] = useState(10);
  const handleSlider = (event, value) => {
    setSliderVal(value);
  };
  return (
    <div className="App">
      <h1>Hello React..!</h1>
      <Slider
        defaultValue={20}
        vertical={false}
        value={slideVal}
        handleSliderChange={handleSlider}
        step={25}
      />
    </div>
  );
}

export default App;
