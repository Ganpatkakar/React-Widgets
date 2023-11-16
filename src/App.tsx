import React from "react";
import {
  Accordian,
  AccordianItem,
  AccordianHeader,
  AccordianPanel
} from './components/Accordian';

function App() {
  return (
    <div className="App">
      <h1>Hello React..!</h1>
      <Accordian>
        <AccordianItem value="1">
          <AccordianHeader>Accordian 1</AccordianHeader>
          <AccordianPanel><div>Accordian content of 1</div></AccordianPanel>
        </AccordianItem>

        <AccordianItem value="2">
          <AccordianHeader>Accordian 2</AccordianHeader>
          <AccordianPanel><div>Accordian content of 2</div></AccordianPanel>
        </AccordianItem>

        <AccordianItem value="3">
          <AccordianHeader>Accordian 3</AccordianHeader>
          <AccordianPanel><div>Accordian content of 3</div></AccordianPanel>
        </AccordianItem>
      </Accordian>
    </div>
  );
}

export default App;