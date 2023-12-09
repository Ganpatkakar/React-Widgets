import React, { useEffect, useRef } from "react";
import styles from "./checkbox.scss";

export function CheckboxInput(props: any): React.JSX.Element {
  const cRef: React.MutableRefObject<HTMLInputElement> = useRef<HTMLInputElement>();
  const { checked, name } = props;

  useEffect(() => {
    cRef.current.indeterminate = checked === "mixed";
  }, [cRef, checked]);

  return (
    <input
      className={styles.checkBoxInput}
      type="checkbox"
      id={name}
      defaultChecked={checked === true}
      ref={cRef}
    />
  );
};
