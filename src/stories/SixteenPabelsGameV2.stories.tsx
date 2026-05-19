import type { Meta, StoryObj } from "@storybook/react";
import { SixteenPabelsGamev2 } from "../components/SixteenPabelsGameV2";


const meta = {
    title: "Games/SixteenPabelsGamev2",
    component: SixteenPabelsGamev2,
    parameters: {
        layout: "fullScreen",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof SixteenPabelsGamev2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IndianChessGameV3: Story = {
    args: {
    },
};
