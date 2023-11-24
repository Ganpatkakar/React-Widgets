import React, { useEffect, useReducer, useRef, useState } from "react";
import { ProgressBar } from "./components/Progressbar";

// slider states => idle => 0%, loading => 95%, completed => 100%
// when any api call happens change states
// setLoading => this will modify the loading counts and modify value of progress bar based on states,
// endLoading => modify => states based on current loading counts and modify the value

const states = {
  idle: 'idle',
  loading: 'loading',
  completed: 'completed'
}
let loading = 0;
function App() {
  const currentState = useRef(null); 
  const [value, setValue] = useState(0);

  const startLoading = () => {
    if (loading === 0) {
      currentState.current = states.idle
    } else if (loading > 0) {
      currentState.current = states.loading;
    }

    switch (currentState.current) {
      case states.completed:
        currentState.current = states.idle;
        loading = 0;
        setValue(0);
      case states.idle:
        currentState.current = states.loading;
        setValue(0.75);
        break;
      case states.loading:
        currentState.current = states.loading;
        setValue(0.75);
        break;
    }
    loading++;
  }

  const endLoading = () => {
    loading = Math.max(loading - 1, 0);
    if (loading === 0) {
      currentState.current = states.completed
    } else if (loading > 0) {
      currentState.current = states.loading;
    }

    switch (currentState.current) {
      case states.completed:
        setValue(1);
        break;
      case states.loading:
        setValue(0.75);
        break;
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      startLoading();
      const apiTimer = setTimeout(() => {
        endLoading();
        console.log("3 second timer");
        clearTimeout(timer);
        clearTimeout(apiTimer);

        startLoading();
        const apiTimer2 = setTimeout(() => {
          endLoading();
          console.log("5 second timer");
          clearTimeout(timer);
          clearTimeout(apiTimer2);
        }, 5000);

      }, 3000);

      setTimeout(() =>{
        startLoading();
        const apiTimer1 = setTimeout(() => {
          endLoading();
          console.log("3 second timer");
          clearTimeout(timer);
          clearTimeout(apiTimer1);
        }, 2000);

        startLoading();
        const apiTimer2 = setTimeout(() => {
          endLoading();
          console.log("4 second timer");
          clearTimeout(timer);
          clearTimeout(apiTimer2);
        }, 4000);
      }, 500)

    }, 100);
  }, []);


  return (
    <div className="App">
      <h1>Hello React..!</h1>
      <ProgressBar value={value} label="Api calls progress bar" />
    </div>
  );
}

export default App;
