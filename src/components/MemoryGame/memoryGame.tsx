import React, { useEffect } from 'react';
import { emojis } from './emojis';
import styles from './memoryGame.scss';

interface IMemoryGame {
  gridLen: number;
}

function shuffleEmojies(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    const random = Math.floor(Math.random() * len);
    [arr[i], arr[random]] = [arr[random], arr[i]]
  }
}

function generateBoard(len) {
  const requriedEmojis = emojis.slice(0, (len * len) / 2);
  requriedEmojis.push(...requriedEmojis);
  shuffleEmojies(requriedEmojis);
  let counter = 0;
  return Array.from({ length: len })
    .map(() =>
      Array.from({ length: len })
        .map(() => requriedEmojis[counter++])
    );
}

const CardToTry = 2;

export default function MemoryGame(props: IMemoryGame) {
  const { gridLen } = props;
  const [board, setBoard] = React.useState(generateBoard(gridLen));
  const [stackFlip, setStackFlip] = React.useState([]); // positions of cards
  const [successFlip, setSuccessFlip] = React.useState(new Set());
  const [isGameOver, setGameOver] = React.useState(false);
  const cardClearedRef = React.useRef(null);

  useEffect(() => {
    if (successFlip.size === gridLen * gridLen) {
      setGameOver(true);
    }
  }, [successFlip.size]);

  const resetBoard = () => {
    setBoard(generateBoard(gridLen));
    setGameOver(false);
    setSuccessFlip(new Set());
    setStackFlip([]);
    cardClearedRef.current = null;
  }

  const handleCardClick = (position) => {
    let stackLen = stackFlip.length;
    if (stackLen === 2) {
      stackFlip.pop();
      stackFlip.pop();
      clearTimeout(cardClearedRef.current);
    }
    stackFlip.push(position);
    setStackFlip([...stackFlip]);

    stackLen = stackFlip.length;
    if (stackLen === 2) {
      const [prevX, prevY] = stackFlip[stackLen - 1].split(":").map(val => parseInt(val));
      const [prevLastX, prevLastY] = stackFlip[stackLen - 2].split(":").map(val => parseInt(val));
      if (board[prevLastX][prevLastY] === board[prevX][prevY]) {
        successFlip.add(`${prevLastX}:${prevLastY}`);
        successFlip.add(`${prevX}:${prevY}`);
      } else {
        cardClearedRef.current = setTimeout(() => {
          stackFlip.pop();
          stackFlip.pop();
          setStackFlip([...stackFlip]);
        }, 2000);
      }
    }
  }


  return (
    <>
      <div className={styles.gameContainer}>
        {
          board.map((row, rowIndex) => {
            return (
              <div className={styles.row}>
                {
                  row.map((col, colIndex) => {
                    const key = `${rowIndex}:${colIndex}`;
                    return (
                      <div key={key} className={`${styles.col} ${successFlip.has(key) ? styles.successFlip : ''}`} onClick={() => handleCardClick(key)}>
                        {(stackFlip.includes(key) || successFlip.has(key)) && col}
                      </div>
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
      {isGameOver && <button onClick={resetBoard}>Play again</button>}
    </>

  )
}
