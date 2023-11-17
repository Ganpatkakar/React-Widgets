import React, { useState } from "react";
import { GridRow } from "./gridRow";
import styles from './gridLights.scss';

interface IGridLights {
  rowsCount?: number;
  colunsCount?: number;
}

function getGridLayout(rowsCount: number, colunsCount: number) {
  const matrixCol = Array.from({ length: colunsCount }, () => '');
  return Array.from({ length: rowsCount }, () => [...matrixCol]);
}

const stack = [];
let timer = null;

export function GridLights(props: IGridLights) {
  const { rowsCount = 3, colunsCount = 3 } = props;
  const initialGrid: any = getGridLayout(rowsCount, colunsCount);

  const [grid, setGrid] = useState(initialGrid);

  const handleColumnClick = (event: any) => {
    const target = event.target;
    if (!target.dataset.hasOwnProperty('row')) {
      return;
    }

    const rowIndex = target.dataset.row;
    const columnIndex = target.dataset.column;

    if (grid[rowIndex][columnIndex] !== '') {
      return;
    }

    stack.push(`${rowIndex},${columnIndex}`);

    const gridRow = grid[rowIndex];
    gridRow[columnIndex] = 'x';
    grid[rowIndex] = [...gridRow];
    setGrid([...grid]);

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      reverseGridLights();
      timer = null;
    }, 3000);
  }

  const reverseGridLights = async () => {
    const reversedStack = stack.reverse();
    for(let val of reversedStack) {
      const lastVal = val;
      const awaitedVal: string = await new Promise((res) => {
        setTimeout(() => {
          res(lastVal)
        }, 200);
      });
      const [rowIndex, columnIndex] = awaitedVal.split(',');
      const gridRow = grid[rowIndex];
      gridRow[columnIndex] = '';
      grid[rowIndex] = [...gridRow];
      setGrid([...grid]);
    }
  }

  return (
    <div className={styles.gridContainer} onClick={handleColumnClick}>
      {
        grid.map((row: any[], index: number) => {
          return <GridRow key={index} row={row} rowIndex={index}/>
        })
      }
    </div>
  )
}