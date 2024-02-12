import React from 'react';
import styles from './tickTacToe.scss';

interface ITicTacToe {
  n: number;
  m: number;
}

function getBoard (n: number): any[] {
  return Array.from({length: n}).map(() => Array.from({length: n}).map(() => ''));
}

function getRow (currPosition, board): any[] {
  const [row] = currPosition.split(":").map(val => parseInt(val));
  return [...board[row]];
}

function getColumn (currPosition, board): any[] {
  const n = board.length;
  const [row, column] = currPosition.split(":").map(val => parseInt(val));
  
  let res = [];
  let r = 0;
  while(r < n) {
    res.push(board[r][column]);
    r++;
  }
  return res;
}

function getDiagonalLeft(currPosition, board): any[] {
  const n = board.length;
  const [row, column] = currPosition.split(":").map(val => parseInt(val));
  console.log(currPosition, row, column);
  let r = row;
  let c = column;
  let res = [];
  while(r >= 0 && r < n && c >= 0 && c < n) {
    res.push(board[r][c]);
    r -= 1;
    c -= 1;
  }
  res=res.reverse();
  r = row + 1;
  c = column + 1;
  while(r >= 0 && r < n && c >= 0 && c < n) {
    res.push(board[r][c]);
    r += 1;
    c += 1;
  }
  return res;
}

function getDiagonalRight(currPosition, board): any[] {
  const n = board.length;
  const [row, column] = currPosition.split(":").map(val => parseInt(val));
  let r = row;
  let c = column;
  let res = [];
  while (r >= 0 && r < n && c >= 0 && c < n) {
    res.push(board[r][c]);
    r -= 1;
    c += 1;
  }
  res=res.reverse();
  r = row + 1;
  c = column - 1;
  while (r >= 0 && r < n && c >= 0 && c < n) {
    res.push(board[r][c]);
    r += 1;
    c -= 1;
  }
  return res;
}

function checkWinner (board, currPosition, m, player) {
  const currRow = getRow(currPosition, board);
  const currCol = getColumn(currPosition, board);
  const diagonalRight = getDiagonalRight(currPosition, board);
  const diagonalLeft = getDiagonalLeft(currPosition, board);

  console.log(currRow, currCol, diagonalLeft, diagonalRight);

  for(let line of [currRow, currCol, diagonalLeft, diagonalRight]) {
    let currSum = 0;
    let max = 0
    for(let position of line) {
      if (position === player) {
        currSum++;
        max = Math.max(currSum, max);
      } else {
        currSum = 0;
      }
    }
    if (max === m) return true;
  }
  return false;
}

export default function TicTacToe(props: ITicTacToe) {
  const {n, m} = props;
  const [board, setBoard] = React.useState(getBoard(n));
  
  const [winner, setWinner] = React.useState(null);
  const [player, setPlayer] = React.useState('X');
  // "X"/"O"

  const playerClick = (position: string) => {
    const [row, column] = position.split(":");
    if (winner !== null || board[row][column] !== '') return;

    board[row][column] = player;
    setBoard([...board]);
    if (checkWinner(board, position, m, player)) {
      setWinner(player);
      return;
    }
    changePlayer();
  }

  const changePlayer = () => {
    if (player === 'X') {
      setPlayer('O');
    } else {
      setPlayer('X');
    }
  }

  const resetBoard = () => {
    setBoard(getBoard(n));
    setWinner(null);
  }

  return (
    <>
      {!winner && <div className={styles.player}>Player turn: {player}</div>}
      {winner && <div className={styles.winner}>Winner player: {winner}</div>}
      <div className={styles.board}>
        {
          board.map((row, rowIndex) => {
            return (
              <div className={styles.boardRow}>
                {
                  row.map((col, colIndex) => {
                    return (
                      <div className={styles.boardColumn} onClick={() => playerClick(`${rowIndex}:${colIndex}`)}>{col}</div>
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
      <button onClick={resetBoard}>Reset</button>
    </>
  )
}
