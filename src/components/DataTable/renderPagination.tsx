import React from "react";
import {
  AiOutlineRight,
  AiOutlineLeft,
  AiOutlineVerticalLeft,
  AiOutlineVerticalRight,
} from "react-icons/ai";
import styles from "./DataTable.module.scss";

const Prev = "prev";
const Next = "next";
const EndLeft = "endLeft";
const EndRight = "endRight";

interface IRenderPagination {
  pageSize: number;
  setPageSize: (...args: any) => void;
  handlePageChange: (...args: any) => void;
  currentPage: number;
  totalContentLen: number;
}

export function RenderPagination({
  pageSize,
  setPageSize,
  handlePageChange,
  currentPage,
  totalContentLen,
}: IRenderPagination) {
  const pageLenArr = [10, 15, 20, 25, 30];
  const maxPages = Math.floor(totalContentLen / pageSize);
  const startFrom = currentPage * pageSize;
  let endTo = startFrom + pageSize;
  if (endTo > totalContentLen) endTo = totalContentLen;

  return (
    <div className={styles.paginationContainer}>
      <div className={"styles.paginationSizeContinaer"}>
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
      <div className={"styles.currentContent"}>
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
