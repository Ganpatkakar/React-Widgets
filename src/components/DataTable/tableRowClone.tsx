import React from 'react';

interface ITableRowClone {
  tableData: any[];
  from: number;
  to: number;
}

export function TableRowsClone({tableData = [], from, to}: ITableRowClone) {
  const data = [];
  for (let i = from; i < to; i++) {
    data.push({ ...tableData[i] });
  }
  return data;
}
