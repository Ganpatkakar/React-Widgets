import React, { useCallback } from "react";
import styles from "./checkbox.scss";
import { CheckboxInput } from "./checkboxInput";
import { CheckboxIcon } from "./checkboxIcon";

export interface ICheckbox {
  // indeterminateState
  checked: boolean | "mixed";

  // check if checkbox is disabled
  disabled?: true | false;

  // unique name for every checkbox
  name: string;

  // Checkbox label, default value empty string
  label?: string;

  // Callback function to receive back these components internal state of checked when event triggers
  handleClick?: (event: any, value: boolean) => void;

  width?: number;
  height?: number;
}

type DefaultProps = Partial<ICheckbox>;

const defaultProps: DefaultProps = {
  checked: true,
  disabled: false,
  name: "",
  label: "",
  width: 14,
  height: 14,
  handleClick: () => {},
};

export function Checkbox(props: ICheckbox) {
  let { checked } = props;
  const { label, handleClick, name, disabled } = props;

  const handleCheckBoxWithUpdatedValue = useCallback((event: any) => {
    event.preventDefault();
    if (disabled) {
      return;
    }
    let newCheck = checked;
    newCheck = newCheck !== true;
    checked = newCheck;
    handleClick(event, newCheck);
  }, []);

  return (
    <span
      className={`${styles.checkBoxContainer} ${
        disabled && styles.disabledCheckBox
      }`}
      onClick={handleCheckBoxWithUpdatedValue}
    >
      <CheckboxInput {...props} checked={checked} />
      <CheckboxIcon {...props} checked={checked} />
      <label className={styles.labelContainer} htmlFor={name}>
        {label}
      </label>
    </span>
  );
}

Checkbox.defaultProps = defaultProps;
