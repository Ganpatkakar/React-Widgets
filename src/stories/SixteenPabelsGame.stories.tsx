import type { Meta, StoryObj } from "@storybook/react";
import { SixteenPabelsGame } from "../components/SixteenPabelsGame";


const meta = {
    title: "Games/SixteenPabelsGame",
    component: SixteenPabelsGame,
    parameters: {
        layout: "fullScreen",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof SixteenPabelsGame>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IndianChessGameV1: Story = {
    args: {
    },
};
