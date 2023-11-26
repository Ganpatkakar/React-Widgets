import React from 'react';
import { TableCell } from "./tableCell";
import Checkbox from '../Checkbox';

export function TableCellSelection(props: any) {
  const { selected } = props;
  return (
    <TableCell checkBoxContainer={true}>
      <Checkbox checked={selected} />
    </TableCell>
  )
}