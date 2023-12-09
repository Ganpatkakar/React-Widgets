import React, { useEffect, useRef } from "react";
import styles from "./checkbox.scss";

export function CheckboxInput(props: any) {
  const cRef = useRef<HTMLInputElement>();
  const { checked, name } = props;

  useEffect(() => {
    const indeterminate = checked === "mixed";
    cRef.current.indeterminate = indeterminate;
  }, [cRef, checked]);

  let inputClassNames = styles.checkBoxInput;

  return (
    <input
      className={inputClassNames}
      type="checkbox"
      id={name}
      defaultChecked={checked === true ? true : false}
      ref={cRef}
    />
  );
};
