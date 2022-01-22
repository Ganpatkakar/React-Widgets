import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import styles from "./DataTable.module.scss";
import {
  AiFillCaretDown,
  AiFillCaretUp,
  AiFillSetting,
  AiOutlineRight,
  AiOutlineLeft,
  AiOutlineVerticalLeft,
  AiOutlineVerticalRight,
} from "react-icons/ai";
import ToggleInput from "../ToggleInput";
import Button from "../Button";
import { Debounce } from "../Debounce";

const Prev = "prev";
const Next = "next";
const EndLeft = "endLeft";
const EndRight = "endRight";

function TableHeaderClone(tableHeaders) {
  const data = {};
  Object.keys(tableHeaders).map((key) => {
    data[key] = { ...tableHeaders[key] };
  });
  return data;
}

function TableRowsClone(tableData = [], from, to) {
  const data = [];
  for (let i = from; i < to; i++) {
    data.push({ ...tableData[i] });
  }
  return data;
}

function searchInfield(tableRowsData, searchBy, searchValue) {
  return tableRowsData.filter((row) => {
    return row[searchBy].toLowerCase().includes(searchValue.toLowerCase());
  });
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
}) {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [showSettings, setShowSettings] = useState(false);
  const [tableHeaderData, setTableHeaderData] = useState(
    TableHeaderClone(tableHeaders)
  );
  const [tableRowsData, setTableRowsData] = useState(
    TableRowsClone(tableData, 0, pageSize)
  );

  useEffect(() => {
    setTableRowsData(
      TableRowsClone(tableData, currentPage * pageSize, pageSize)
    );
  }, [tableData]);

  useEffect(() => {
    const from = currentPage * pageSize;
    const to = from + pageSize;
    setTableRowsData(TableRowsClone(tableData, from, to));
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
      newRows = searchInfield(tableData, searchBy, searchValue);
    } else {
      newRows = TableRowsClone(tableData, 0, pageSize);
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
              pageSize={pageSize}
              currentPage={currentPage}
              tableData={tableRowsData}
              tableHeaders={tableHeaderData}
            />
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
      </div>
    </div>
  );
}

function RenderPagination({
  pageSize,
  setPageSize,
  handlePageChange,
  currentPage,
  totalContentLen,
}) {
  const pageLenArr = [10, 15, 20, 25, 30];
  const maxPages = Math.floor(totalContentLen / pageSize);
  const startFrom = currentPage * pageSize;
  let endTo = startFrom + pageSize;
  if (endTo > totalContentLen) endTo = totalContentLen;

  return (
    <div className={styles.paginationContainer}>
      <div className={styles.paginationSizeContinaer}>
        <span>Rows per page: </span>
        <span>
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(parseInt(e.target.value));
              handlePageChange(EndLeft);
            }}
          >
            {pageLenArr.map((len) => (
              <option key={len} value={len}>
                {len}
              </option>
            ))}
          </select>
        </span>
      </div>
      <div className={styles.currentContent}>
        <p>
          {startFrom} - {endTo} of {totalContentLen}
        </p>
      </div>
      <div className={styles.pagination}>
        <span className={`${currentPage === 0 && styles.deactive}`}>
          <span onClick={() => handlePageChange(EndLeft)}>
            <AiOutlineVerticalRight />
          </span>
          <span onClick={() => handlePageChange(Prev)}>
            <AiOutlineLeft />
          </span>
        </span>
        <span className={`${endTo === totalContentLen && styles.deactive}`}>
          <span onClick={() => handlePageChange(Next)}>
            <AiOutlineRight />
          </span>
          <span onClick={() => handlePageChange(EndRight)}>
            <AiOutlineVerticalLeft />
          </span>
        </span>
      </div>
    </div>
  );
}

function RenderTableControls({
  searchEnabled,
  settingsEnabled,
  searchBy,
  handleSettingsClick,
  handleSearch,
}) {
  return (
    <div className={styles.tableControlsContainer}>
      <div className={styles.searchContainer}>
        {searchEnabled && (
          <input
            onChange={handleSearch}
            className={styles.searchInput}
            type="text"
            placeholder={`Searchby ${searchBy}`}
          />
        )}
      </div>
      <div className={styles.tableSettings}>
        {settingsEnabled && <AiFillSetting onClick={handleSettingsClick} />}
      </div>
    </div>
  );
}

function RenderSettings({
  showSettings,
  tableHeader,
  setTableHeaderData,
  setShowSettings,
  resetSettings,
}) {
  const handleClick = (key, value) => {
    setTableHeaderData((prevState) => {
      prevState[key].visible = value;
      return { ...prevState };
    });
  };

  const handleApply = () => {
    console.log("apply clicked");
    setShowSettings(false);
  };

  const handleCancel = () => {
    resetSettings();
    setShowSettings(false);
  };

  return (
    <div
      className={`${showSettings ? styles.showSettings : "hide"} ${
        styles.settingsContainer
      }`}
    >
      <div className={styles.settingsTitle}>Settings</div>
      <div className={styles.settingsContent}>
        {Object.keys(tableHeader).map((key) => (
          <div key={key} className={styles.settingsRow}>
            <div className={styles.settingsLabel}>{tableHeader[key].label}</div>
            <ToggleInput
              value={key}
              onClick={handleClick}
              initialState={tableHeader[key].visible}
            />
          </div>
        ))}
      </div>
      <div className={styles.settingsActions}>
        <Button text="Apply" onClick={handleApply} />
        <Button text="Cancel" onClick={handleCancel} />
      </div>
    </div>
  );
}

function RenderTableHeader({ tableHeaders, handleSorting }) {
  const [sortKey, setSortKey] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const handleSort = (key) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortOrder("asc");
    }
    setSortKey(key);
    handleSorting(key, sortOrder);
  };
  const refs = [];
  return (
    <div className={`${styles.tableHeader} `}>
      {Object.keys(tableHeaders).map((key, index) => {
        const { label, minWidth, visible, sortable } = tableHeaders[key];
        return (
          visible && (
            <RenderTableHeaderCell
              index={index}
              refs={refs}
              key={key}
              handleSort={() => handleSort(key)}
              sorted={sortKey === key}
              sortOrder={sortOrder}
              label={label}
              minWidth={minWidth}
              sortable={sortable}
            />
          )
        );
      })}
    </div>
  );
}

const RenderTableHeaderCell = ({
  index,
  refs,
  label,
  minWidth,
  sortable,
  handleSort,
  sorted,
  sortOrder,
}) => {
  const resizeRef = useRef(null);
  const resizeContainerRef = useRef(null);

  useEffect(() => {
    const resize = (e) => {
      if (resizeContainerRef && resizeContainerRef.current) {
        const dx = e.pageX - resizeContainerRef.current.getBoundingClientRect().left;
        const newWidth = parseInt(getComputedStyle(resizeContainerRef.current, "").width) + dx +"px";
        resizeContainerRef.current.style.width = newWidth;
      }
    }
    if (resizeRef && resizeRef.current) {
      resizeRef.current.addEventListener("mousedown",function (e) {
        document.addEventListener("mousemove", resize, false);
        document.addEventListener('mouseup', mouseUpHandler);
      }, false);

      const mouseUpHandler = function () {
        // Remove the handlers of `mousemove` and `mouseup`
        document.removeEventListener('mousemove', resize);
        document.removeEventListener('mouseup', mouseUpHandler);
      };

      return function cleanup() {
        resizeRef.current.removeEventListener("mousedown", resize, false);
      };
    }
  }, []);

  return (
    <div
      id={label}
      key={label}
      style={{ minWidth: minWidth }}
      className={styles.tableHeaderItem}
      ref={resizeContainerRef}
    >
      <div className={styles.tableHeaderContent} onClick={handleSort}>
        <span className={styles.tablerHeaderItemLabel}>{label}</span>
        {sortable && (
          <span
            className={`${styles.sortableIcons} ${
              sorted && styles.sortableIconActive
            }`}
          >
            {sorted && sortOrder === "asc" && <AiFillCaretUp />}
            {sorted && sortOrder === "desc" && <AiFillCaretDown />}
            {!sorted && <AiFillCaretUp />}
          </span>
        )}
      </div>
      <div className={styles.dragBorder} ref={resizeRef}></div>
    </div>
  );
};

function RenderTableRows({ tableHeaders, tableData }) {
  return (
    <div className={styles.tableRows}>
      {tableData.map((data, index) => (
        <div key={data.id} className={`${styles.tableRow} ${styles.rowStyle}`}>
          {Object.keys(data).map(
            (key) =>
              (tableHeaders[key] && tableHeaders[key].visible && (
                <div
                  key={key}
                  style={{ minWidth: tableHeaders[key].minWidth }}
                  className={styles.tableRowItem}
                >
                  {data[key]}
                </div>
              )) ||
              null
          )}
        </div>
      ))}
    </div>
  );
}
