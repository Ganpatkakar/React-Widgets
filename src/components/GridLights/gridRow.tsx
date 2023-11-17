import React from "react";
import { GridColumn } from "./gridColumn";
import styles from './gridLights.scss';

interface IGridRow {
  row: any[];
  rowIndex: number;
}
export function GridRow({ row, rowIndex }: IGridRow) {
  return (
    <div className={styles.gridRowContainer}>
      {
        row.map((col, index) => {
          return <GridColumn key={index} col={col} rowIndex={rowIndex} columnIndex={index} />
        })
      }
    </div>
  )
}