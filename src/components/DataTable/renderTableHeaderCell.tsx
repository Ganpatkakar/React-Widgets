import React, {useRef, useEffect, useState} from "react";
import {
  AiFillCaretDown,
  AiFillCaretUp,
} from "react-icons/ai";
import styles from './DataTable.module.scss';

interface IRenderTableHeaderCell {
  index?: number,
  refs?: any,
  label: string
  minWidth: number;
  sortable: boolean;
  handleSort: (...args: any[]) => void
  sorted: boolean
  sortOrder: string
}

export const RenderTableHeaderCell = ({
  index,
  refs,
  label,
  minWidth,
  sortable,
  handleSort,
  sorted,
  sortOrder,
}: IRenderTableHeaderCell) => {
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


interface IRenderTableHeader {
  tableHeaders: object;
  handleSorting: (...args: any[]) => void
}

export function RenderTableHeader({ tableHeaders, handleSorting }: IRenderTableHeader) {
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
