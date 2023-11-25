import React, { useState } from "react";
import { TableProvider } from "./context/table.context";
import { ITable } from "./@types.table";

type DefaultProps = Partial<ITable>;

const defaultProps: DefaultProps = {
  selectedRows: new Set(),
  sortingEnabled: false,
  selectionEnabled: false,
  isMultiSelectEnabled: true,
  onSelectionChang: (event: any, data: any) => {}
}

export function Table(props: ITable) {
  const {children, ...restProps} = props;

  return (
    <TableProvider {...restProps}>
      {children}
    </TableProvider>
  )
}

Table.defaultProps = defaultProps;