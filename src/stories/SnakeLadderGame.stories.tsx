import type { Meta, StoryObj } from "@storybook/react";
import { SnakeLadderGame } from "../components/snakeLadderGame";


const meta = {
    title: "Games/SnakeLadderGame",
    component: SnakeLadderGame,
    parameters: {
        layout: "fullScreen",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof SnakeLadderGame>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PlaySnakeGame: Story = {
    args: {
        width: 700,
        height: 700,
    },
};
