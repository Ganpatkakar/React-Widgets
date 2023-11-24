import React, { useState } from "react";
import styles from "./checkbox.scss";
import { CheckboxInput } from "./checkboxInput";
import { CheckboxIcon } from "./checkboxIcon";

interface ICheckbox {
  // indeterminateState
  checked: true | false | "mixed";

  // check if checkbox is disabled
  disabled?: true | false;

  // unique name for every checkbox
  name: string;

  // Checkbox label, default value empty string
  label?: string;

  // Callback function to receive back this components internal state of checked when event triggers
  handleClick?: (value: boolean) => void;

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

function Checkbox(props: ICheckbox) {
  let { checked } = props;
  const { label, handleClick, name, disabled } = props;

  const handleCheckBoxWithUpdatedValue = (event) => {
    event.preventDefault();
    if (disabled) {
      return;
    }
    let newCheck = checked;
    if (newCheck === true) {
      newCheck = false;
    } else {
      newCheck = true;
    }
    checked = newCheck;
    handleClick(newCheck);
  };

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
Checkbox.displayName = "CheckBox";

export default Checkbox;
