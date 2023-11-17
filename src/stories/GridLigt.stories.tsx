import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { GridLights } from '../components/GridLights';

const meta = {
  title: 'GridLights',
  component: GridLights,
  parameters: {
    layout: 'fullScreen',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof GridLights>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomGridLights3X3: Story = {
  args: {
    rowsCount: 3,
    colunsCount: 3
  },
};
export const CustomGridLights6X9: Story = {
  args: {
    rowsCount: 6,
    colunsCount: 6
  },
};
