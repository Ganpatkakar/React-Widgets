import type { Meta, StoryObj } from "@storybook/react";
import { NaarBakaldiGame } from "../components/naarBakaldiGame";


const meta = {
    title: "Games/IndianChessV1",
    component: NaarBakaldiGame,
    parameters: {
        layout: "fullScreen",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof NaarBakaldiGame>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IndianChessGameV1: Story = {
    args: {
    },
};
