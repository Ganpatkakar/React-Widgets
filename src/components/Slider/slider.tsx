import React, { useEffect } from "react";
import styles from "./slider.scss";

interface ISlider {
  id: string;
  defaultValue?: number;
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  handleSliderChange?: (event: any, data: number) => void;
  vertical?: boolean;
}

type DefaultProps = Partial<ISlider>;
const defaultProps: DefaultProps = {
  id: "slider",
  min: 0,
  max: 100,
  step: 1,
  handleSliderChange: () => {},
  vertical: false,
};

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    orient?: string;
  }
}

function Slider(props: ISlider): React.JSX.Element {
  const {
    id,
    defaultValue,
    value,
    min,
    max,
    step,
    handleSliderChange,
    vertical,
  } = props;

  let initialValue = 0;
  if (defaultValue) initialValue = defaultValue;
  if (value) initialValue = value;

  const [sliderVal, setSliderVal] = React.useState(initialValue);
  useEffect(() => {
    setSliderVal(value);
  }, [value]);
  const handleChange = (event: any) => {
    const targetVal = event.target.valueAsNumber;
    setSliderVal(targetVal);
    handleSliderChange(event, targetVal);
  };

  return (
    <span className={styles.sliderContainer}>
      <input
        id={id}
        type="range"
        value={sliderVal}
        min={min}
        max={max}
        onChange={handleChange}
        step={step}
        orient={vertical ? "vertical" : "horizontal"}
      />
    </span>
  );
}

Slider.defaultProps = defaultProps;
Slider.displayName = "Slider";
export default Slider;
