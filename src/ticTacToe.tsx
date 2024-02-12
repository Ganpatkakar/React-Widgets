import React from 'react';
import styles from "./ticTacToeStyle.scss";

const config = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
]

const values = {
  0: [0, 0],
  1: [0, 1],
  2: [0, 2],
  3: [1, 0],
  4: [1, 1],
  5: [1, 2],
  6: [2, 0],
  7: [2, 1],
  8: [2, 2]
}

const winningCombination = [
  [0,3,6],
  [0,1,2],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [3,4,5],
  [6,7,8],
  [2,4,6]
];

function checkWin(board: any) {
  for(let win of winningCombination) {
    const [x, y, z] = win;
    const [x1, x2] = values[x];
    const [y1, y2] = values[y];
    const [z1, z2] = values[z];

    if (
      board[x1][x2] !== '' &&
      board[x1][x2] === board[y1][y2] &&
      board[y1][y2] === board[z1][z2]
    ) {
      return true
    }

  }
  return false;
}

export default function TicTacToe() {

  const [player, setPlayer] = React.useState('X');

  const [board, setBoard] = React.useState([...config.map((val) => [...val])]);

  const [winner, setWinner] = React.useState(null);

  const resetBoard = () => {
    setBoard([...config.map((val) => [...val])])
    setWinner(null);
  }

  const handleTurn = () => {
    if (player === 'X') {
      setPlayer('O')
    } else {
      setPlayer('X');
    }
  }

  const handlePlayerClick = (position) => {
    const [row, col] = position.split(":");
    if (winner !== null || board[row][col] !== '') return;
    board[row][col] = player;
    setBoard([...board]);
    if (checkWin(board)) {
      setWinner(player)
      return;
    }

    handleTurn();
  }

  let counter = 1;

  return (
    <>
    <div>Players Turn {player}</div>
    {winner && (<div>Player Won {player}</div>)}
    <div>
      {
        config.map((val, rowIndex) => {
          return (
            <div key={rowIndex} className={styles.rows}>
              {
                val.map((colVal, colIndex) => {
                  const currentVal = counter++;
                  return (
                    <div 
                      key={colIndex} 
                      className={styles.cols} 
                      onClick={() => handlePlayerClick(`${rowIndex}:${colIndex}`)}
                    >
                      {board[rowIndex][colIndex]}
                    </div>
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
  );
}
