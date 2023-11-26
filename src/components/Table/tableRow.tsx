import React, { useContext, useEffect, useId } from "react";
import Checkbox from "../Checkbox";
import { TableCell } from "./tableCell";
import styled from 'styled-components'
import { ActionTypes, TableContext, TableDispatchContext } from "./context/table.context";

const TableRowContainer = styled.div<{ 
  $selectedRow?: boolean;
  $style: any;
}>`
  ${(props) => ({...props.$style})}
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  border-collapse: collapse;
  box-sizing: border-box;
  cursor: pointer;
  height: 44px;

  &:hover {
    background-color: #f5f5f5;
  }

  ${(props) => {
    if (props.$selectedRow) {
      return `
      background-color: #e4e9f2;
      `
    }
  }}
`;

interface ITableRow {
  id: number | string;
  selectionEnabled?: boolean;
  children: any;
  selectedRows?: Set<any>;
  handleSelection?: (event, data) => void;
  style?: any
}

type DefaultProps = Partial<ITableRow>;

const defaultProps: DefaultProps = {}

export function TableRow(props: ITableRow) {
  const { id = useId(), children, style = {} } = props;
  const state: any = useContext(TableContext);
  const dispatch = useContext(TableDispatchContext);

  const handleTableRowClick = (event: any) => {
    event.preventDefault();
    if (state.selectionEnabled) {
      dispatch({
        type: ActionTypes.UpdateTableRowSelection,
        payload: id
      })
    }
  }
  
  return (
    <TableRowContainer onClick={handleTableRowClick} $selectedRow={state.selectedRows.has(id)} $style={style}>
      {state.selectionEnabled && (
        <TableCell checkBoxContainer={true}>
          <Checkbox checked={state.selectedRows.has(id)}/>
        </TableCell>
      )}
      {children}
    </TableRowContainer>
  )
}

TableRow.defaultProps = defaultProps;