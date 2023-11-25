import React, { useContext, useEffect, useState } from "react";
import styles from './table.scss';
import Checkbox from "../Checkbox";
import { TableCell } from "./tableCell";
import styled from 'styled-components'
import { ActionTypes, TableContext, TableDispatchContext } from "./context/table.context";
import { ITableState } from "./@types.table";
import { TableHeaderCell } from "./tableHeaderCell";

const TableRowContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  border-collapse: collapse;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

interface ITableRow {
  selectionEnabled: boolean;
  children: any;
  selectedRows: Set<any>,
  handleSelection: (event, data) => void
}

type DefaultProps = Partial<ITableRow>;

const defaultProps: DefaultProps = {}

export function TableHeaderRow(props: ITableRow) {
  const { children } = props;
  const state: ITableState = useContext(TableContext);
  const dispatch = useContext(TableDispatchContext);

  const handleHeaderCheckBoxClick = (event)  => {
    event.preventDefault();
    dispatch({
      type: ActionTypes.UpdateTableHeaderSelection,
      payload: ''
    })
  }
  
  return (
    <TableRowContainer>
      {state.selectionEnabled && state.isMultiSelectEnabled && (
        <TableHeaderCell checkBoxContainer={true} onClick={() => {}}>
          <Checkbox checked={state.isHeaderSelected} handleClick={handleHeaderCheckBoxClick}/>
        </TableHeaderCell>
      )}
      {children}
    </TableRowContainer>
  )
}

TableHeaderRow.defaultProps = defaultProps;