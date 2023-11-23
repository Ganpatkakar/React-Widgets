import React, { useEffect, useRef } from 'react';
import styles from './checkbox.scss';

export const CheckboxInput = (props: any) => {
  const cRef = useRef<HTMLInputElement>();
  const { checked, handleClick, name } = props;

  useEffect(() => {
    const indeterminate = checked === 'mixed';
    cRef.current.indeterminate = indeterminate;
  }, [cRef, checked]);

  let inputClassNames = styles.checkBoxInput;

  const handleCheckBoxWithUpdatedValue = (event) => {
    event.preventDefault();
    let newCheck = checked
    if (newCheck === true) {
      newCheck = false;
    } else {
      newCheck = true;
    }
    console.log(newCheck);
    handleClick(newCheck)
  }

  return (
    <input
      className={inputClassNames}
      type="checkbox"
      onChange={handleCheckBoxWithUpdatedValue}
      id={name}
      defaultChecked={checked === true ? true : false}
      ref={cRef}
    />
  )
}