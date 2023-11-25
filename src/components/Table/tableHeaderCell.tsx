import React, { useContext } from "react";
import styles from './table.scss';
import styled from "styled-components";
import { ActionTypes, TableDispatchContext } from "./context/table.context";

interface ITableHeaderCell {
  children: any;
  onClick: (event: any, data?: any) =>  void;
  checkBoxContainer?: boolean;
}

const TableHeaderCellContainer  = styled.div<{ $checkBoxContainer?: boolean; }>`
  display: flex;
  flex-basis: 0px;
  flex-grow: 1;
  flex-shrink: 1;
  align-items: center;
  min-height: 32px;
  box-sizing: border-box;
  padding: 0 8px;
  border-right: 1px solid #ddd;

  ${(props) => {
    if (props.$checkBoxContainer) {
      return `
        max-width: 44px;
        min-width: 44px;
      `
    }
  }}
`


export function TableHeaderCell(props: ITableHeaderCell) {
  const {onClick: handleClickCallBack} = props;
  const dispatch = useContext(TableDispatchContext);

  const handleTableHeaderCellClick = (event: any) => {
    event.preventDefault();
    if (props.checkBoxContainer) {
      return;
    }
    dispatch(
      {
        type: ActionTypes.TableHeaderSortingClick,
        pacyload: event
      }
    )
    handleClickCallBack(event);
  }
  return (
    <TableHeaderCellContainer onClick={handleTableHeaderCellClick} $checkBoxContainer={props.checkBoxContainer}>
      {props.children}
    </TableHeaderCellContainer>
  )
}