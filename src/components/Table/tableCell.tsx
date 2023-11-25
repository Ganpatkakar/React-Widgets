import React from "react";
import styled from "styled-components";

const TableCellContainer = styled.div<{ $checkBoxContainer?: boolean; }>`
  display: flex;
  flex-basis: 0px;
  flex-grow: 1;
  flex-shrink: 1;
  align-items: center;
  min-height: 44px;
  box-sizing: border-box;
  padding: 0 8px;

  ${(props) => {
    if (props.$checkBoxContainer) {
      return `
        max-width: 44px;
        min-width: 44px;
      `
    }
  }}
`

export function TableCell(props: any) {
  return (
    <TableCellContainer $checkBoxContainer={props.checkBoxContainer}>
      {props.children}
    </TableCellContainer>
  )
}