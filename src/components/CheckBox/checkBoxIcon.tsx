import React from "react";
import styles from './checkBox.scss';
import { checkBoxChecked, checkBoxMixed } from "./checkBoxStates";

export const CheckBoxIcon = (props: any) => {
  const { checked, width, height } = props;

  let icon = null;
  let iconClassNames = styles.checkBoxIcon;
  if (checked === 'mixed') {
    icon = checkBoxMixed(width - 2, height - 2);
    iconClassNames += ` ${styles.mixedIcon}`
  } else if (checked) {
    icon = checkBoxChecked(width - 2, height - 2);
    iconClassNames += ` ${styles.checkedIcon}`
  }
  
  return (
    <div className={iconClassNames} style={{width: width, height: height}}>
      {icon}
    </div>
  );
}