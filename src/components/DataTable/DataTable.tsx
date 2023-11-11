import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import styles from "./DataTable.module.scss";
import { Debounce } from "../Debounce";
import { TableHeaderClone } from './tableHeaderClone';
import { TableRowsClone } from './tableRowClone';
import { searchInfield } from './searchField';
import { RenderPagination } from './renderPagination';
import { RenderTableHeader } from './renderTableHeaderCell';
import { RenderSettings } from "./renderSettings";
import { RenderTableControls } from "./renderTableControls";
import { RenderTableRows } from "./renderTableRow";

const Prev = "prev";
const Next = "next";
const EndLeft = "endLeft";
const EndRight = "endRight";

interface IDataTable {
  tableData: any;
  tableHeaders: any;
  overrideStyles?: any;
  title: string;
  searchEnabled: boolean;
  searchBy: string;
  paginationEnabled: boolean;
  settingsEnabled: boolean;
}

export default function DataTable({
  tableData,
  tableHeaders,
  overrideStyles,
  title,
  searchEnabled,
  searchBy = "",
  paginationEnabled,
  settingsEnabled,
}: IDataTable) {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [showSettings, setShowSettings] = useState(false);
  const [tableHeaderData, setTableHeaderData] = useState(
    TableHeaderClone(tableHeaders)
  );
  const [tableRowsData, setTableRowsData] = useState(
    TableRowsClone({ tableData, from: 0, to: pageSize })
  );

  useEffect(() => {
    setTableRowsData(
      TableRowsClone({ tableData, from: currentPage * pageSize, to: pageSize })
    );
  }, [tableData]);

  useEffect(() => {
    const from = currentPage * pageSize;
    const to = from + pageSize;
    setTableRowsData(TableRowsClone({ tableData, from, to }));
  }, [pageSize, currentPage]);

  const handleSettingsClick = () => {
    setShowSettings(!showSettings);
  };

  if (searchEnabled && searchBy.length == 0) {
    searchEnabled = false;
    alert("Please provide a search field");
  }

  const resetSettings = () => {
    setTableHeaderData(TableHeaderClone(tableHeaders));
  };

  const handleSearch = Debounce((e) => {
    const searchValue = e.target.value;
    let newRows;
    if (searchValue.length > 0) {
      newRows = searchInfield({ tableRowsData: tableData, searchBy, searchValue });
    } else {
      newRows = TableRowsClone({ tableData, from: 0, to: pageSize });
    }
    setTableRowsData(newRows);
  }, 500);

  const handleSorting = (key, sortOrder) => {
    console.log("sorting by", key, sortOrder);
    // sort table Rows Data
    const newRows = [].concat(tableRowsData).sort((a, b) => {
      if (sortOrder === "asc") {
        return b[key] > a[key] ? 1 : -1;
      } else {
        return a[key] > b[key] ? 1 : -1;
      }
    });
    setTableRowsData(newRows);
  };

  const handlePageChange = (direction) => {
    if (direction === Prev) {
      if (currentPage === 0) return;
      setCurrentPage(currentPage - 1);
    } else if (direction === Next) {
      const maxPages = Math.floor(tableData.length / pageSize);
      if (currentPage === maxPages) return;
      setCurrentPage(currentPage + 1);
    } else if (direction === EndLeft) {
      setCurrentPage(0);
    } else if (direction === EndRight) {
      setCurrentPage(Math.floor(tableData.length / pageSize));
    }
  };

  return (
    <div className={styles.tableComponent}>
      <div className={styles.tableTitle}>{title}</div>
      <RenderTableControls
        searchEnabled={searchEnabled}
        settingsEnabled={settingsEnabled}
        searchBy={tableHeaderData[searchBy].label}
        handleSearch={handleSearch}
        handleSettingsClick={handleSettingsClick}
      />
      <div className={styles.tableContainer}>
        {/* Settings flexpane for table columns show and hide options */}
        <RenderSettings
          showSettings={showSettings}
          tableHeader={tableHeaderData}
          setTableHeaderData={setTableHeaderData}
          setShowSettings={setShowSettings}
          resetSettings={resetSettings}
        />
        <div className={styles.tableOverflow}>
          <div className={styles.tableContent}>
            <RenderTableHeader
              tableHeaders={tableHeaderData}
              handleSorting={handleSorting}
            />
            <RenderTableRows
              // pageSize={pageSize}
              // currentPage={currentPage}
              tableData={tableRowsData}
              tableHeaders={tableHeaderData}
            />
          </div>
        </div>
        {paginationEnabled && (
          <RenderPagination
            pageSize={pageSize}
            setPageSize={setPageSize}
            handlePageChange={handlePageChange}
            currentPage={currentPage}
            totalContentLen={tableData.length}
          />
        )}
      </div>
    </div>
  );
}
