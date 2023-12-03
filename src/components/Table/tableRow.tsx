import React, { useId } from "react";
import styled from 'styled-components'

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
  children: any;
  selected?: boolean;
  onClick?: (event, data) => void;
  style?: any
}

type DefaultProps = Partial<ITableRow>;

const defaultProps: DefaultProps = {
  selected: false,
  style: {}
}

export function TableRow(props: ITableRow) {
  const { id = useId(), children, style, onClick: handleCallBack = (event: any, data: any) => {}, selected } = props;

  const handleTableRowClick = (event: any) => {
    event.preventDefault();
    handleCallBack(event, id);
  }

  return (
    <TableRowContainer onClick={handleTableRowClick} $selectedRow={selected} $style={style}>
      {children}
    </TableRowContainer>
  )
}

TableRow.defaultProps = defaultProps;
