import React from "react";
import styles from './table.scss';

export function TableBody(props: any) {
  return (
    <div className={styles.tableBodyContainer}>
      {props.children}
    </div>
  )
}