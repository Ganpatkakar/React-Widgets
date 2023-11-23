import React, { useEffect, useRef } from 'react';
import styles from './checkBox.scss';

export const CheckBoxInput = (props: any) => {
  const cRef = useRef<HTMLInputElement>();
  const { checked, handleCheckBox, name } = props;

  useEffect(() => {
    const indeterminate = checked === 'mixed';
    cRef.current.indeterminate = indeterminate;
  }, [cRef, checked]);

  let inputClassNames = styles.checkBoxInput;

  return (
    <input
      className={inputClassNames}
      type="checkbox"
      onChange={handleCheckBox}
      id={name}
      defaultChecked={checked === true ? true : false}
      ref={cRef}
    />
  )
}