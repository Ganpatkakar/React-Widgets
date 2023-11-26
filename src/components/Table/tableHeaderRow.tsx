import React from "react";
import styled from 'styled-components'

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
  children: any;
}

type DefaultProps = Partial<ITableRow>;

const defaultProps: DefaultProps = {}

export function TableHeaderRow(props: ITableRow) {
  const { children } = props;
  return (
    <TableRowContainer>
      {children}
    </TableRowContainer>
  )
}

TableHeaderRow.defaultProps = defaultProps;