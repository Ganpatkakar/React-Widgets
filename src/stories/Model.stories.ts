import type { Meta, StoryObj } from "@storybook/react";

import { ModelPopover } from "../components/ModelPopOver";
import { Button } from "../components/Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/ModelPopover",
  component: ModelPopover,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullScreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof ModelPopover>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ModelPopever: Story = {
  args: {
    show: true,
    children: "Some text there",
    handleClose: () => {
      console.log("Handle clicked");
    },
    showFooter: true,
  },
};
