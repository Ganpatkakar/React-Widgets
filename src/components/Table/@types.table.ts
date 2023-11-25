export interface ITable {
  id?: number | string;
  sortingEnabled?: boolean
  selectedRows?: Set<any>;
  selectionEnabled?: boolean;
  isMultiSelectEnabled?: boolean;
  onSelectionChang?: (e, data) => void;
  children: any;
}

export type TableContextType = {
  state: any
};

export type TableDispatchContextType = {
  dispatch: React.Dispatch<{ type: any; payload: any; }>
};

export interface ITableState {
  tableRowIds: Set<number | string>,
  tableId?: number | string;
  sortingEnabled: boolean;
  selectedRows: Set<any>;
  selectionEnabled: boolean;
  isMultiSelectEnabled: boolean;
  isHeaderSelected: boolean
}


