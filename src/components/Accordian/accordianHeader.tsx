import React, { ReactNode } from "react"
import styles from './accordian.style.scss';

interface IAccordianHeader {
  icon?: ReactNode;
  children: ReactNode;
  isActive?: boolean;
}

export function AccordianHeader(props: any) {
  const { icon, children, isActive } = props;
  return (
    <div className={styles.accordianHeader}>
      {isActive ? (<div>-</div>) : (<div>+</div>)}
      <div className={styles.accordianHeaderTitle}>
        {icon && icon}
        {children}
      </div>
    </div>
  )
}