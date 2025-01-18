import type { Meta, StoryObj } from "@storybook/react";
import { FamilyTreeComponent } from "../components/FamilyTree/FamilyTreeComponent";

const meta = {
  title: "Games/FamilyTreeComponent",
  component: FamilyTreeComponent,
  parameters: {
    layout: "fullScreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof FamilyTreeComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FamilyTree: Story = {
  args: {},
};