import React, { useEffect, useState } from "react";
import DataTable from "./DataTable.component";
import { movies } from "../../src/data";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/cjs/styles/prism';

// const tableData = [
//   {
//     id: 1,
//     name: "Frozen yogurt",
//     type: "Ice cream",
//     calories: 159,
//     fat: 6,
//     carbs: 24,
//     protein: 4,
//     sodium: 87,
//     calcium: 14,
//     iron: 1,
//   },
//   {
//     id: 2,
//     name: "Ice cream sandwhich",
//     type: "Ice cream",
//     calories: 237,
//     fat: 9,
//     carbs: 37,
//     protein: 4.3,
//     sodium: 129,
//     calcium: 8,
//     iron: 1,
//   },
//   {
//     id: 3,
//     name: "Eclair",
//     type: "Pastry",
//     calories: 262,
//     fat: 16,
//     carbs: 37,
//     protein: 6,
//     sodium: 337,
//     calcium: 6,
//     iron: 7,
//   },
//   {
//     id: 4,
//     name: "Cupcake",
//     type: "Pastry",
//     calories: 305,
//     fat: 3.7,
//     carbs: 67,
//     protein: 4.3,
//     sodium: 413,
//     calcium: 3,
//     iron: 8,
//   },
//   {
//     id: 5,
//     name: "Gingerbread",
//     type: "Pastry",
//     calories: 356,
//     fat: 16,
//     carbs: 49,
//     protein: 3.9,
//     sodium: 327,
//     calcium: 7,
//     iron: 16,
//   },
//   {
//     id: 6,
//     name: "Jelly bean",
//     type: "Other",
//     calories: 375,
//     fat: 0,
//     carbs: 94,
//     protein: 0,
//     sodium: 50,
//     calcium: 0,
//     iron: 0,
//   },
//   {
//     id: 7,
//     name: "Lollipop",
//     type: "Other",
//     calories: 392,
//     fat: 0.2,
//     carbs: 98,
//     protein: 0,
//     sodium: 38,
//     calcium: 0,
//     iron: 2,
//   },
//   {
//     id: 8,
//     name: "Honeycomb",
//     type: "Other",
//     calories: 408,
//     fat: 3.2,
//     carbs: 87,
//     protein: 6.5,
//     sodium: 562,
//     calcium: 0,
//     iron: 45,
//   },
//   {
//     id: 9,
//     name: "Donut",
//     type: "Pastry",
//     calories: 52,
//     fat: 25,
//     carbs: 51,
//     protein: 4.9,
//     sodium: 326,
//     calcium: 2,
//     iron: 22,
//   },
//   {
//     id: 10,
//     name: "KitKat",
//     type: "Other",
//     calories: 16,
//     fat: 6,
//     carbs: 65,
//     protein: 7,
//     sodium: 54,
//     calcium: 12,
//     iron: 6,
//   },
// ];
// const tableHeaders = {
//   id: { label: "ID", minWidth: 50, visible: true },
//   name: { label: "Name", minWidth: 300, sortable: true, visible: true },
//   type: { label: "Type", minWidth: 200, sortable: true, visible: true },
//   calories: { label: "Calories (g)", minWidth: 200, sortable: true, visible: true },
//   fat: { label: "Fat (g)", minWidth: 200, sortable: true, visible: true },
//   carbs: { label: "Carbs (g)", minWidth: 100, sortable: true, visible: true },
//   protein: { label: "Protein (g)", minWidth: 100, sortable: true, visible: true },
//   sodium: { label: "Sodium (mg)", minWidth: 200, sortable: true, visible: true },
//   calcium: { label: "Calcium (mg)", minWidth: 50, sortable: true, visible: true },
//   iron: { label: "Iron (mg)", minWidth: 100, sortable: true, visible: true }
// };

const tableHeaders2 = {
  title: { label: "Title", minWidth: 150, visible: true },
  year: { label: "Year", minWidth: 50, sortable: true, visible: true },
  runtime: { label: "RunTime", minWidth: 50, sortable: true, visible: true },
  director: { label: "Director", minWidth: 100, sortable: true, visible: true }
};

export default function DataTableComponent(props) {
  const [tableData, setTableData] = useState(movies);
  useEffect(() => {
    fetch("/api/movies", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
        "x-rapidapi-key": "d9c87f999amshb4af30838481e71p1ea5f2jsnce1fbcd684a2"
      }
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      // setTableData(data);
      setTableData(movies);
    })
    .catch(err => {
      console.error(err);
    });
  }, []);

  return (
    <>
      <div>
        <DataTable
          title="Data Table Example"
          tableHeaders={tableHeaders2}
          tableData={tableData}
          searchEnabled={true}
          searchBy={"title"} // table header key name which needs to be searched
          paginationEnabled={true}
          settingsEnabled={true}
        />
      </div>

      <h2>How to call DataTable component</h2>
      <p>import data table component and call it</p>
      <SyntaxHighlighter language="javascript" style={materialOceanic}>
  {`
  import DataTable from "./DataTable.component";

  function DataTableComponent() {
    const [tableData, setTableData] = useState(movies);
    useEffect(() => {
      fetch("/api/movies", {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
          "x-rapidapi-key": "d9c87f999amshb4af30838481e71p1ea5f2jsnce1fbcd684a2"
        }
      })
      .then(response => {
        return response.json();
      })
      .then(data => {
        setTableData(data);
      })
      .catch(err => {
        console.error(err);
      });
    }, []);
    
    return (
      <DataTable
          title="Data Table Example"
          tableHeaders={tableHeaders2}
          tableData={tableData}
          searchEnabled={true}
          searchBy={"title"} // table header key name which needs to be searched
          paginationEnabled={true}
          settingsEnabled={true}
        />
    )
  }
  `
  }
      </SyntaxHighlighter>

      <h2>Data Table component</h2>
      <SyntaxHighlighter language="javascript" style={materialOceanic}>
        {`        
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
        <span className={"$"{currentPage === 0 && styles.deactive}}>
          <span onClick={() => handlePageChange(EndLeft)}>
            <AiOutlineVerticalRight />
          </span>
          <span onClick={() => handlePageChange(Prev)}>
            <AiOutlineLeft />
          </span>
        </span>
        <span className={"$"{endTo === totalContentLen && styles.deactive}}>
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
            placeholder={Searchby "$"{searchBy}}
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
      className={"$"{showSettings ? styles.showSettings : "hide"} "$"{
        styles.settingsContainer
      }}
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
    <div className={"$"{styles.tableHeader}}>
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
        document.removeEventListener('mousemove', resize);
        document.removeEventListener('mouseup', mouseUpHandler);
      };

      return function cleanup() {
        if (resizeRef && resizeRef.current) {
          resizeRef.current.removeEventListener("mousedown", resize, false);
        }
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
            className={"$"{styles.sortableIcons} "$"{
              sorted && styles.sortableIconActive
            }}
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
        <div key={data.id} className={"$"{styles.tableRow} "$"{styles.rowStyle}}>
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

        `}
      </SyntaxHighlighter>

      <p>Note: Please replace "$" with `$ icon</p>

      <h2>Style with scss</h2>
      <SyntaxHighlighter language="scss" style={materialOceanic}>
{`      
.tableComponent {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;

  .tableTitle {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .tableControlsContainer {
    display: flex;
    // border: 1px solid #aaa;
    padding: 0.5rem;
    border-bottom: 0px;
    justify-content: end;
    -moz-box-align: end;
    align-items: center;
    border-radius: 4px 4px 0px 0px;

    .searchContainer {
      display: flex;
      flex-direction: column;
      margin-right: 1rem;

      .searchInput {
        width: 100%;
        border: 1px solid #ccc;
        padding: 0.5rem;
        border-radius: 0.25rem;
      }
    }
    .tableSettings {
      padding: 0 0 0 1rem;
      font-size: 16px;
    }
  }

  .paginationContainer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0.5rem;

    > div {
      padding: 0 10px;
    }

    .pagination {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem;
      color: #000;
      font-size: 16px;

      .deactive {
        color: #ddd;
      }
    }
  }

  .tableContainer {
    position: relative;
    width: 100%;
    min-height: 0px;
    // border: 1px solid #aaa;
    border-radius: 0px 0px 4px 4px;

    .showSettings {
      display: block !important;
    }

    .settingsContainer {
      position: absolute;
      top: 0px;
      right: 0px;
      z-index: 1;
      background-color: rgba(255, 255, 255, .9);
      border-left: 1px solid #aaa;
      border-radius: 4px 0px 0px 4px;
      display: none;
      width: 50%;
      height: 100%;
      overflow: auto;

      .settingsTitle {
        font-weight: 500;
        padding: 0.5rem;
      }
      
      .settingsRow {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem;
      }

      .settingsActions {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0.5rem;
      }
    }

    .tableOverflow {
      position: relative;
      width: 100%;
      border-radius: inherit;
      overflow: auto hidden;

      .tableContent {
        display: table;
        position: relative;
        box-sizing: border-box;
        flex-direction: column;
        width: 100%;
        height: 100%;
        max-width: 100%;
        color: rgba(0, 0, 0, 0.87);
        background-color: rgb(255, 255, 255);
  
        .rowStyle {
          border-bottom: 1px solid #ddd;
          min-height: 48px;
          align-items: center;
        }
    
        .tableHeader {
          display: flex;
          border-bottom: 1px solid #ddd;
      
          .tableHeaderItem {
            flex: 1;
            margin: 0.5rem;
            display: flex;
            justify-content: start;
            align-items: center;
            position: relative;

            .tableHeaderContent {
              display: flex;
              cursor: pointer;
              font-weight: 500;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;

              .tablerHeaderItemLabel {
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }
  
              .sortableIcons {
                color: #ddd;
                display: flex;
                padding: 0 5px;
              }
  
              &:hover .sortableIcons, .sortableIcons.sortableIconActive {
                color: #000;
              }
            }

            .dragBorder {
              border: 1px solid #ddd;
              height: 100%;
              position: absolute;
              right: 0px;

              &:hover {
                border-color: #000;
                cursor: ew-resize;
              }
            }
          }
        }
        .tableRows {
          .tableRow {
            display: flex;
            
            
            .tableRowItem {
              flex: 1;
              margin: 0.5rem;
            }
          }
        }
      }
    }
  }
}
`}
      </SyntaxHighlighter>
    </>
  );
}
