import * as React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from '../components/Progressbar';

const meta = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Progressbar: Story = {
  args: {
    value: 0.5,
    label: "Default ProgressBar"
  },
};

export const ProgressbarWarning: Story = {
  args: {
    min: 0,
    max: 5,
    value: 2,
    label: "Warning ProgressBar",
    labelColor: 'red',
    color: 'red'
  },
};

export const ProgressbarSuccess: Story = {
  args: {
    value: 0.8,
    label: "Success ProgressBar",
    labelColor: 'green',
    color: 'green'
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
    <ProgressBar max={42} value={value} label={`There have been ${value} files downloaded`}/>
  );
}

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