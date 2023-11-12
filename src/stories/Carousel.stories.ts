import type { Meta, StoryObj } from '@storybook/react';

import Carousel from '../components/Carousel/carousel';
import { carouselList } from '../components/Carousel';

const meta = {
  title: 'Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CarouselComponent: Story = {
  args: {
    carouselList,
    container : {
      width: 700,
      height: 300
    },
    showDotControls:true
  },
};