import type { Meta, StoryObj } from "@storybook/react";
import Slider from "../components/Slider";
import React, { useState } from "react";

const meta = {
    title: "Components/Slider",
    component: Slider,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SliderStory: Story = {
    args: {
        id: "slider1",
        defaultValue: 20
    },
};

export const VerticalSlider: Story = {
    args: {
        id: "slider2",
        defaultValue: 20,
        vertical: true
    },
};

export const StepSlider: Story = {
    args: {
        id: "slider3",
        min: 0,
        max: 100,
        step: 20
    },
};

export const CustomControlSlider = () => {
    const [slideVal, setSliderVal] = useState(25);
    const handleSlider = (event, value) => {
        setSliderVal(value);
    };

    return (
        <div className="App">
            <label>Slider value {slideVal}</label>
            <div>
                <Slider
                    vertical={false}
                    value={slideVal}
                    handleSliderChange={handleSlider}
                    step={25}
                />
            </div>
        </div>
    );
}
