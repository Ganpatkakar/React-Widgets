import React from 'react';
import styles from './DataTable.module.scss';

interface IRenderTableRows {
  tableHeaders: any;
  tableData: any;
}

export function RenderTableRows({ tableHeaders, tableData }: IRenderTableRows) {
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
