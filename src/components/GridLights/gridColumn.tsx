import React from "react";
import styles from './gridLights.scss';

interface IGridColumn {
  col: string;
  columnIndex: number;
  rowIndex: number;
}

export function GridColumn({ col, rowIndex, columnIndex }: IGridColumn) {
  return (
    <div 
      className={`${styles.columnContainer} ${col === '' ? styles.columnDisabled : styles.columnActive}`}
      data-row={rowIndex}
      data-column={columnIndex}
    >
    </div>
  )
}