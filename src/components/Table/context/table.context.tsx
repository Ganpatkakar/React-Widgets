import React, { useReducer } from 'react';
import { ITable, ITableState } from '../@types.table';

export const TableContext = React.createContext<ITableState | null>(null);
export const TableDispatchContext = React.createContext<any | null>(null);

export const ActionTypes = {
  UpdateTableRowSelection: 'UpdateTableRowSelection',
  UpdateTableHeaderSelection: 'UpdateTableHeaderSelection',
  TableHeaderSortingClick: 'TableHeaderSortingClick',
  UpdateTableRowIdSet: 'UpdateTableRowIdSet'
}

export const TableProvider = (props: ITable) => {
  const {selectedRows, selectionEnabled, isMultiSelectEnabled, sortingEnabled} = props;
  const [state, dispatchState] = useReducer(tableReducer, {
    selectedRows,
    selectionEnabled,
    isMultiSelectEnabled,
    tableRowIds: new Set(''),
    sortingEnabled,
    isHeaderSelected: false
  });

  return (
    <TableContext.Provider value={state}>
      <TableDispatchContext.Provider value={ dispatchState }>
        {props.children}
      </TableDispatchContext.Provider>
    </TableContext.Provider>
  )
}

function tableReducer (state: ITableState, {type, payload}) {
  if (type === ActionTypes.UpdateTableRowSelection) {
    const {selectedRows} = state;
    if (selectedRows.has(payload)) {
      selectedRows.delete(payload);
    } else {
      selectedRows.add(payload);
    }
    return {...state, selectedRows};
  }

  if (type === ActionTypes.UpdateTableHeaderSelection) {
    let {isHeaderSelected, selectedRows, tableRowIds} = state;
    isHeaderSelected = !isHeaderSelected;

    // update all the table rows based on new selection
    if (isHeaderSelected) {
      selectedRows = new Set([...tableRowIds]);
    } else {
      selectedRows.clear();
    }
    return {...state, isHeaderSelected, selectedRows};
  }

  if (type === ActionTypes.TableHeaderSortingClick) {
    console.log("table header sorting cliked");
    return {...state}
  }

  if (type === ActionTypes.UpdateTableRowIdSet) {
    const {tableRowIds} = state;
    tableRowIds.add(payload);
    return {...state, tableRowIds};
  }
}