import React, { Children, JSXElementConstructor, ReactElement } from "react";
import styles from './accordian.style.scss';

interface IAccordianPanel {
  isActive?: boolean;
  children: ReactElement<any, string | JSXElementConstructor<any>>
}

export function AccordianPanel({ children, isActive }: IAccordianPanel) {
  return (
    <>
      <div className={isActive ? styles.displayPanel : styles.hidePanel}>
        {children}
      </div>
    </>
  )
}