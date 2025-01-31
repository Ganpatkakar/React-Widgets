import React from "react";
import styles from "./connectfour.style.scss";

const rows = 6;
const columns = 7;
const playerColor = ["#d9313d", "#fdc601"];

export default function ConnectFour() {
  const [player, setPlayer] = React.useState(0);
  const [win, setWin] = React.useState(false);
  const [grid, setGrid] = React.useState(new Array(rows).fill(null).map(() => new Array(columns).fill(-1)))

  const handleDiceSelection = (column) => {
    console.log("dice selected", column);
    if (win) return;
    for(var i = rows - 1; i >= 0; i--) {
      if (grid[i][column] !== -1) {
        continue;
      }
      grid[i][column] = player;
      break;
    }
    if (i < 0) return;
    if (checkIfCurrentPlayerWon(i, column)) {
      setWin(true);
      return;
    }
    setPlayer((state) => Number(!state));
  };

  const checkIfCurrentPlayerWon = (row, col) => {
    // check on top and bottom and collect count, if count is greater then or equal to 4, return true
    let count = 1;
    let r = row - 1;
    while(r >= 0) {
      if (grid[r][col] != player || grid[r][col] == -1) break;
      count++;
      r--;
    }
    r = row + 1;
    while(r < rows) {
      if (grid[r][col] != player || grid[r][col] == -1) break;
      count++;
      r++;
    }
    if (count >= 4) return true;
    // check on left and right and collect count, if count is greater then or equal to 4, return true
    count = 1;
    let c = col - 1;
    while(c >= 0) {
      if (grid[row][c] != player || grid[row][c] == -1) break;
      count++;
      c--;
    }
    c = col + 1
    while(c < columns) {
      if (grid[row][c] != player || grid[row][c] == -1) break;
      count++;
      c++;
    }
    if (count >= 4) return true;
    // check [-1, 1] and [1, -1] and collect count
    count = 1;
    r = row - 1;
    c = col + 1;
    while(r >= 0 && r < rows && c >= 0 && c < columns) {
      if (grid[r][c] !== player || grid[r][c] == -1) break;
      count++;
      r = r - 1;
      c = c + 1;
    }
    r = row + 1;
    c = col - 1
    while(r >= 0 && r < rows && c >= 0 && c < columns) {
      if (grid[r][c] !== player || grid[r][c] == -1) break;
      count++;
      r = r + 1;
      c = c - 1;
    }
    if (count >= 4) return true;
    // check [-1, -1] and [1, 1] and collect count
    count = 1;
    r = row - 1;
    c = col - 1;
    while(r >= 0 && r < rows && c >= 0 && c < columns) {
      if (grid[r][c] !== player || grid[r][c] == -1) break;
      count++;
      r = r - 1;
      c = c - 1;
    }
    r = row + 1;
    c = col + 1
    while(r >= 0 && r < rows && c >= 0 && c < columns) {
      if (grid[r][c] !== player || grid[r][c] == -1) break;
      count++;
      r = r + 1;
      c = c + 1;
    }
    if (count >= 4) return true;
    return false;
  }

  const restart = () => {
    setGrid(new Array(rows).fill(null).map(() => new Array(columns).fill(-1)));
    setPlayer(() => 0);
    setWin(false);
  }

  return (
    <div>
      <div>Choose four</div>
      <div className={styles.gameContianer}>
        <HoverForTurn
          activePlayer={player}
          columns={columns}
          selectDice={handleDiceSelection}
        />
        <GridRender grid={grid} />
        {win && <div className={styles.showWinText} style={{backgroundColor: playerColor[player]}}>Win</div>}
        {win && <button onClick={restart}>Restart</button>}
      </div>
    </div>
  );
}

function HoverForTurn({ activePlayer, columns, selectDice }) {
  const diceColor = playerColor[activePlayer];
  const handleDiceClick = (index) => {
    selectDice(index);
  };
  return (
    <div className={styles.choiceContainer}>
      {Array(columns)
        .fill(null)
        .map((value, index) => {
          return (
            <div
              key={index}
              className={styles.choice}
              style={{ backgroundColor: diceColor }}
              onClick={() => handleDiceClick(index)}
            ></div>
          );
        })}
    </div>
  );
}

function GridRender({ grid }) {
  return (
    <div className={styles.gridContainer}>
      {grid.map((row, rowIndex) => {
        return (
          <div key={{rowIndex}} className={styles.girdRow}>
            {row.map((col, colIndex) => {
              const colorCode = grid[rowIndex][colIndex];
              const color = colorCode > -1 ? playerColor[colorCode] : 'white';
              return <div key={`${rowIndex}:${colIndex}`} className={styles.gridSections} style={{backgroundColor: color}}></div>;
            })}
          </div>
        );
      })}
    </div>
  );
}

// requirements
// two players with different colors
// grid of 7 * 6
// render the grid
// let player choose any column to add their colored dice
// on every entry check if the current player win, if not let the next player choose to enter the dice
// check if current colomn is full or not

