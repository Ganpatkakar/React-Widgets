import React from 'react';

interface IsearchInField {
  tableRowsData: any[];
  searchBy: string | number;
  searchValue: string;
}

export function searchInfield(props: IsearchInField) {
  const {tableRowsData, searchBy, searchValue} = props
  return tableRowsData.filter((row) => {
    return row[searchBy].toLowerCase().includes(searchValue.toLowerCase());
  });
}
