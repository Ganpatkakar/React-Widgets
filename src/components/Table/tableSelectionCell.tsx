import React from 'react';
import { TableCell } from "./tableCell";
import { Checkbox } from "../Checkbox";

interface ITableSelectionCell {
  id: number | string;
  selected: boolean;
  onClick: (event, data) => void
}

export function TableSelectionCell(props: ITableSelectionCell) {
  const { id = '', selected, onClick: handleClick } = props;
  const handleCheckBoxClick = (event) => {
    event.preventDefault();
    handleClick(event, id);
  }
  return (
    <TableCell checkBoxContainer={true}>
      <Checkbox checked={selected} handleClick={handleCheckBoxClick} name={"tableRow"}/>
    </TableCell>
  )
}
