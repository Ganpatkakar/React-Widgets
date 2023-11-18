import React, { useEffect, useReducer } from "react";
import { Stage, Layer, Rect, Circle } from 'react-konva';
import { Button } from "../Button";
import { ModelPopover } from "../ModelPopOver";

interface ISnakeGame {
  width: number;
  height: number;
}

interface ISnakePosition {
  position: { x: number, y: number }[]
}

interface IFood {
  x: number;
  y: number
}

interface IReducerState {
  width: number,
  height: number,
  score: number,
  gameOver: boolean,
  mouthRadius: number[],
  snake: ISnakePosition;
  food: IFood;
  direction: 'ArrowUp' | 'ArrowRight' | 'ArrowDown' | 'ArrowLeft';
}

const foodCenterBy = 10;
const radiusCurve = 20;

function getInitialFoodPosition(width: number, height: number) {
  let x = Math.floor(Math.random() * width);
  x -= x % 20 + foodCenterBy;
  // if x is before 20 px
  x = x < 20 ? 30 : x;
  // if x closer to end direction
  x = x > width - 20 ? width - 20 : x;
  let y = Math.floor(Math.random() * height);
  y -= y % 20 + foodCenterBy;
  // if y is before 20 px
  y = y < 20 ? 30 : y;
  // if x closer to end direction
  y = y > width - 20 ? width - 20 : y;
  return { x, y }
}

const getInitalState = (width: number, height: number) => {
  const initialSnakePostion: ISnakePosition = {
    position: [{ x: 20, y: 40 }, { x: 40, y: 40 }, { x: 60, y: 40 }, { x: 80, y: 40 }]
  };
  const food: IFood = getInitialFoodPosition(width, height);
  const direction: 'ArrowUp' | 'ArrowRight' | 'ArrowDown' | 'ArrowLeft' = 'ArrowRight';
  return { snake: initialSnakePostion, food, direction: direction };
}

function reducer(state: IReducerState, action: any) {
  const snakePositionsSet = new Set();
  function setSnakePositionsSet() {
    let { position } = state.snake;
    position = [...position];
    position.pop();
    position.forEach(({ x, y }) => snakePositionsSet.add(`${x}:${y}`));
  }
  function isFoodEaten() {
    let { snake, food } = state;
    const { position } = snake;
    const snakeMouth = position[position.length - 1];
    const { x: snakeX, y: snakeY } = snakeMouth;
    const { x: foodX, y: foodY } = food;
    if (foodX - foodCenterBy === snakeX && foodY - foodCenterBy === snakeY) {
      return true;
    }
  }

  function checkGameOver() {
    let { snake, width, height } = state;
    const { position } = snake;
    const snakeMouth = position[position.length - 1];
    const { x, y } = snakeMouth;
    if (x < 0 || x + 20 > width) {
      return true;
    } else if (y < 0 || y + 20 > height) {
      return true;
    }
    setSnakePositionsSet();
    if (snakePositionsSet.has(`${x}:${y}`)) {
      return true;
    }
    return false;
  }

  switch (action.type) {
    case 'ArrowUp': {
      let { snake, direction, food, score } = state;
      if (direction === 'ArrowDown') {
        return { ...state };
      }
      const { position } = snake;
      let { x, y } = position[position.length - 1];
      y -= 20;
      position.push({ x, y });
      direction = 'ArrowUp';
      snake.position = [...position];
      if (checkGameOver()) {
        return { ...state, gameOver: true };
      }
      if (isFoodEaten()) {
        score += 1;
        food = getInitialFoodPosition(state.width, state.height);
      } else {
        snake.position.shift();
      }
      return {
        ...state,
        score,
        mouthRadius: [radiusCurve, radiusCurve, 0, 0],
        snake: { ...snake },
        food,
        direction: direction
      };
    }
    case 'ArrowRight': {
      let { snake, direction, food, score } = state;
      if (direction === 'ArrowLeft') {
        return { ...state };
      }
      const { position } = snake;
      let { x, y } = position[position.length - 1];
      x += 20;
      position.push({ x, y });
      direction = 'ArrowRight';
      snake.position = [...position];
      if (checkGameOver()) {
        return { ...state, gameOver: true };
      }
      if (isFoodEaten()) {
        score += 1;
        food = getInitialFoodPosition(state.width, state.height);
      } else {
        snake.position.shift();
      }
      return {
        ...state,
        score,
        mouthRadius: [0, radiusCurve, radiusCurve, 0],
        snake: { ...snake },
        food,
        direction: direction
      };
    }
    case 'ArrowDown': {
      let { snake, direction, food, score } = state;
      if (direction === 'ArrowUp') {
        return { ...state };
      }
      const { position } = snake;
      let { x, y } = position[position.length - 1];
      y += 20;
      position.push({ x, y });
      direction = 'ArrowDown';
      snake.position = [...position];
      if (checkGameOver()) {
        return { ...state, gameOver: true };
      }
      if (isFoodEaten()) {
        score += 1;
        food = getInitialFoodPosition(state.width, state.height);
      } else {
        snake.position.shift();
      }
      return {
        ...state,
        score,
        mouthRadius: [0, 0, radiusCurve, radiusCurve],
        snake: { ...snake },
        food,
        direction: direction
      };
    }
    case 'ArrowLeft': {
      let { snake, direction, food, score } = state;
      if (direction === 'ArrowRight') {
        return { ...state };
      }
      const { position } = snake;
      let { x, y } = position[position.length - 1];
      x -= 20;
      position.push({ x, y });
      direction = 'ArrowLeft';
      snake.position = [...position];
      if (checkGameOver()) {
        return { ...state, gameOver: true };
      }
      if (isFoodEaten()) {
        score += 1;
        food = getInitialFoodPosition(state.width, state.height);
      } else {
        snake.position.shift();
      }
      return {
        ...state,
        score,
        mouthRadius: [radiusCurve, 0, 0, radiusCurve],
        snake: { ...snake },
        food,
        direction: direction
      };
    }
    case 'ResetGame': {
      return {
        ...state,
        mouthRadius: [0, radiusCurve, radiusCurve, 0],
        score: 0,
        gameOver: false,
        ...getInitalState(state.width, state.height)
      };
    }
    default:
      throw Error('Unknown action: ' + action.type);
  }
}

let direction: string = '';
let gameOver: boolean = false;

export function SnakeGame(props: ISnakeGame) {
  const { width, height } = props;

  const [state, dispatch] = useReducer(reducer, {
    width,
    height,
    score: 0,
    gameOver: false,
    mouthRadius: [0, radiusCurve, radiusCurve, 0],
    ...getInitalState(width, height)
  });
  direction = state.direction;
  gameOver = state.gameOver;
  const handleKeyEvent = (event: any) => {
    event.preventDefault();
    if (state.gameOver) {
      return;
    }
    switch (event.key) {
      case 'ArrowUp': {
        dispatch({ type: 'ArrowUp' });
        break;
      }
      case 'ArrowRight': {
        dispatch({ type: 'ArrowRight' });
        break;
      }
      case 'ArrowDown': {
        dispatch({ type: 'ArrowDown' });
        break;
      }
      case 'ArrowLeft': {
        dispatch({ type: 'ArrowLeft' });
        break;
      }
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyEvent);
    // const timer = setInterval(() => {
    //   if (gameOver) {
    //     return;
    //   }
    //   dispatch({ type: direction });
    // }, 1000);

    () => {
      document.removeEventListener('keydown', handleKeyEvent);
      // clearInterval(timer);
    }
  }, []);

  const handleRestart = () => {
    dispatch({ type: 'ResetGame' })
  }

  let { position } = state.snake;
  position = [...position];
  const mouth = position.pop();

  return (
    <>
      <Button label="Restart Game" onClick={handleRestart} />
      <div>Score: {state.score}</div>
      <ModelPopover
        show={state.gameOver}
        handleApply={handleRestart}
        showApply
        handleClose={() => { }}
      >
        <div>Game Over, Restart the Game</div>
      </ModelPopover>
      <div style={{ border: "1px solid #000", width: width }}>
        <Stage width={width} height={height}>
          <Layer imageSmoothingEnabled>
            {position.map(({ x, y },) => (
              <Rect
                x={x}
                y={y}
                width={20}
                height={20}
                fill="gray"
                stroke="black"
                strokeWidth={2}
                cornerRadius={7}
              />
            ))}
          </Layer>

          <Layer>
            <Rect
              x={mouth.x}
              y={mouth.y}
              width={20}
              height={20}
              fill="#064906"
              stroke="black"
              strokeWidth={2}
              cornerRadius={state.mouthRadius}
            />
          </Layer>

          <Layer>
            <Circle
              x={state.food.x}
              y={state.food.y}
              radius={10}
              fill="brown"
            />
          </Layer>
        </Stage>
      </div>

    </>
  )
}