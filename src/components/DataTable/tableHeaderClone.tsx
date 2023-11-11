import React from 'react';

interface ITableHeader {
  tableHeaders: any;
}

export function TableHeaderClone(tableHeaders: ITableHeader) {
  const data = {};
  Object.keys(tableHeaders).map((key) => {
    data[key] = { ...tableHeaders[key] };
  });
  return data;
}
