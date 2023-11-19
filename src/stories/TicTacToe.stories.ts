import type { Meta, StoryObj } from '@storybook/react';

import TicTacToeComponent from '../components/TicTacToe/ticTacToe';

const meta = {
  title: 'Games/TicTacToeComponent',
  component: TicTacToeComponent,
  parameters: {
    layout: 'fullScreen',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TicTacToeComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TicTacToe: Story = {
  args: {},
};
