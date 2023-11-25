import React from "react";
import styles from './table.scss';

export function TableHeader(props: any) {
  return (
    <div className={styles.tableHeader}>
      {props.children}
    </div>
  )
}