import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Accordian,
  AccordianItem,
  AccordianHeader,
  AccordianPanel
} from '../components/Accordian';

// export default {
//   title: 'Accordion',
//   component: Accordian,
//   argTypes: {},
// };

// const AccordionTemplate = ({}) => (
//   <Accordian>
//     <AccordianItem value="1">
//       <AccordianHeader>Accordian 1</AccordianHeader>
//       <AccordianPanel><div>Accordian content of 1</div></AccordianPanel>
//     </AccordianItem>

//     <AccordianItem value="2">
//       <AccordianHeader>Accordian 2</AccordianHeader>
//       <AccordianPanel><div>Accordian content of 2</div></AccordianPanel>
//     </AccordianItem>

//     <AccordianItem value="3">
//       <AccordianHeader>Accordian 3</AccordianHeader>
//       <AccordianPanel><div>Accordian content of 3</div></AccordianPanel>
//     </AccordianItem>
//   </Accordian>
// );

// export const Accordion = AccordionTemplate.bind({});

// const example = (
//   <Accordian>
//     <AccordianItem value="1">
//       <AccordianHeader>Accordian 1</AccordianHeader>
//       <AccordianPanel><div>Accordian content of 1</div></AccordianPanel>
//     </AccordianItem>

//     <AccordianItem value="2">
//       <AccordianHeader>Accordian 2</AccordianHeader>
//       <AccordianPanel><div>Accordian content of 2</div></AccordianPanel>
//     </AccordianItem>

//     <AccordianItem value="3">
//       <AccordianHeader>Accordian 3</AccordianHeader>
//       <AccordianPanel><div>Accordian content of 3</div></AccordianPanel>
//     </AccordianItem>
//   </Accordian>
// );

// Accordion.parameters = {
//   docs: {
//     source: {
//       code: example,
//     },
//   },
// };

const meta = {
  title: 'Components/Accordian',
  component: Accordian,
  parameters: {
    layout: 'fullScreen',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Accordian>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Accodrian: Story = {
  args: {
    children: [
      (
        <AccordianItem value="1">
          <AccordianHeader>Accordian 1</AccordianHeader>
          <AccordianPanel><div>Accordian content of 1</div></AccordianPanel>
        </AccordianItem>
      ),

      (
        <AccordianItem value="2">
          <AccordianHeader>Accordian 2</AccordianHeader>
          <AccordianPanel><div>Accordian content of 2</div></AccordianPanel>
        </AccordianItem>
      ),

      (
        <AccordianItem value="3">
          <AccordianHeader>Accordian 3</AccordianHeader>
          <AccordianPanel><div>Accordian content of 3</div></AccordianPanel>
        </AccordianItem>
      )
    ]
  },
};
