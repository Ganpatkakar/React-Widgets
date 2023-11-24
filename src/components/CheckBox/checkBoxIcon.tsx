import React from "react";
import styles from "./checkbox.scss";
import { checkboxChecked, checkboxMixed } from "./checkboxStates";

export const CheckboxIcon = (props: any) => {
  const { checked, width, height } = props;

  let icon = null;
  let iconClassNames = styles.checkBoxIcon;
  if (checked === "mixed") {
    icon = checkboxMixed(width - 2, height - 2);
    iconClassNames += ` ${styles.mixedIcon}`;
  } else if (checked) {
    icon = checkboxChecked(width - 2, height - 2);
    iconClassNames += ` ${styles.checkedIcon}`;
  }

  return (
    <div className={iconClassNames} style={{ width: width, height: height }}>
      {icon}
    </div>
  );
};
