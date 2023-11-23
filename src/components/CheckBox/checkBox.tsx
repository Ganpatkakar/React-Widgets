import React, { useState } from "react";
import styles from './checkBox.scss';
import { CheckBoxInput } from "./checkBoxInput";
import { CheckBoxIcon } from "./checkBoxIcon";

interface ICheckBox {
  // indeterminateState
  checked: true | false | "mixed"

  // unique name for every checkbox
  name: string;

  // Checkbox label, default value empty string
  label?: string;

  // Callback function to receive back this components internal state of checked when event triggers
  handleClick?: (value: boolean) => void

  width?: number;
  height?: number
}

type DefaultProps = Partial<ICheckBox>;

const defaultProps: DefaultProps = {
  checked: true,
  name: '',
  label: '',
  width: 14,
  height: 14,
  handleClick: () => {}
};

function CheckBox(props: ICheckBox) {

  const { checked, label, handleClick, name } = props;

  return (
    <div className={styles.checkBoxContainer}>
      <CheckBoxInput {...props} checked={checked} handleClick={handleClick}  />
      <CheckBoxIcon {...props} checked={checked} />
      <label className={styles.labelContainer} htmlFor={name}>{label}</label>
    </div>
  )
}

CheckBox.defaultProps = defaultProps;
CheckBox.displayName = 'CheckBox';

export default CheckBox;