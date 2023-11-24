import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBar } from "../components/Progressbar";

const meta = {
  title: "Components/ProgressBar",
  component: ProgressBar,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Progressbar: Story = {
  args: {
    value: 0.5,
    label: "Default ProgressBar",
  },
};

export const ProgressbarWarning: Story = {
  args: {
    min: 0,
    max: 5,
    value: 2,
    label: "Warning ProgressBar",
    labelColor: "red",
    color: "red",
  },
};

export const ProgressbarSuccess: Story = {
  args: {
    value: 0.8,
    label: "Success ProgressBar",
    labelColor: "green",
    color: "green",
  },
};

const intervalDelay = 100;
const intervalIncrement = 1;

const template = () => {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setValue(value < 42 ? intervalIncrement + value : 0);
    }, intervalDelay);
    return () => {
      clearInterval(id);
    };
  });

  return (
    <ProgressBar
      max={42}
      value={value}
      label={`There have been ${value} files downloaded`}
    />
  );
};

export const ContinouseProgress = template.bind({});

const example = `
import * as React from "react";
import { ProgressBar } from '../components/Progressbar';

const intervalDelay = 100;
const intervalIncrement = 1;

export const Max = () => {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setValue(value < 42 ? intervalIncrement + value : 0);
    }, intervalDelay);
    return () => {
      clearInterval(id);
    };
  });
  return (<ProgressBar max={42} value={value} label={"There have been \${value} files downloaded"}/>);
};
`;

ContinouseProgress.parameters = {
  docs: {
    source: {
      code: example,
    },
  },
};


const states = {
  idle: 'idle',
  loading: 'loading',
  completed: 'completed'
}
let loading = 0;

function template2() {
  const currentState = React.useRef(null); 
  const [value, setValue] = React.useState(0);

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

  React.useEffect(() => {
    const timer = setTimeout(() => {
      startLoading();
      const apiTimer1 = setTimeout(() => {
        endLoading();
        console.log("2 second timer");
        clearTimeout(timer);
        clearTimeout(apiTimer1);

        startLoading();
        const apiTimer2 = setTimeout(() => {
          endLoading();
          console.log("3 second timer");
          clearTimeout(timer);
          clearTimeout(apiTimer2);
        }, 3000);

      }, 2000);

      setTimeout(() =>{
        startLoading();
        const apiTimer3 = setTimeout(() => {
          endLoading();
          console.log("1 second timer");
          clearTimeout(timer);
          clearTimeout(apiTimer3);
        }, 1000);

        startLoading();
        const apiTimer4 = setTimeout(() => {
          endLoading();
          console.log("2 second timer");
          clearTimeout(timer);
          clearTimeout(apiTimer4);
        }, 2000);
      }, 500)

    }, 100);
  }, []);


  return (
    <ProgressBar value={value} label="Api calls progress bar" />
  );
}

export const ApiCallUpdatesProgressBar = template2.bind({});

const eample2 = `
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

  // Replicate API call using set timeout, with multiple overlaping calls example
  React.useEffect(() => {
    const timer = setTimeout(() => {
      startLoading();
      const apiTimer1 = setTimeout(() => {
        endLoading();
        console.log("2 second timer");
        clearTimeout(timer);
        clearTimeout(apiTimer1);

        startLoading();
        const apiTimer2 = setTimeout(() => {
          endLoading();
          console.log("3 second timer");
          clearTimeout(timer);
          clearTimeout(apiTimer2);
        }, 3000);

      }, 2000);

      setTimeout(() =>{
        startLoading();
        const apiTimer3 = setTimeout(() => {
          endLoading();
          console.log("1 second timer");
          clearTimeout(timer);
          clearTimeout(apiTimer3);
        }, 1000);

        startLoading();
        const apiTimer4 = setTimeout(() => {
          endLoading();
          console.log("2 second timer");
          clearTimeout(timer);
          clearTimeout(apiTimer4);
        }, 2000);
      }, 500)

    }, 100);
  }, []);


  return (
    <ProgressBar value={value} label="Api calls progress bar" />
  );
}

`;

ApiCallUpdatesProgressBar.parameters = {
  docs: {
    source: {
      code: eample2,
    },
  },
};
