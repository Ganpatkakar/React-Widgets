import React from "react";
import styles from "./checkbox.scss";
import { checkboxChecked, checkboxMixed } from "./checkboxStates";

export const CheckboxIcon = (props: any) => {
  const { checked, width, height } = props;

  let icon = null;
  let iconClassNames: string[] = [styles.checkBoxIcon];
  if (checked === "mixed") {
    icon = checkboxMixed(width - 2, height - 2);
    iconClassNames.push(styles.mixedIcon);
  } else if (checked) {
    icon = checkboxChecked(width - 2, height - 2);
    iconClassNames.push(styles.checkedIcon);
  }

  return (
    <div className={iconClassNames.join(" ")} style={{ width: width, height: height }}>
      {icon}
    </div>
  );
};
