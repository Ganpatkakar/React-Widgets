import type { Meta, StoryObj } from '@storybook/react';
import { SnakeGame } from '../components/Snake';


const meta = {
  title: 'Games/SnakeGame',
  component: SnakeGame,
  parameters: {
    layout: 'fullScreen',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SnakeGame>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PlaySnakeGame: Story = {
  args: {
    width: 300,
    height: 300
  },
};
