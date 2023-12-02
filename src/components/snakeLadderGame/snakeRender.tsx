import React from 'react';
import { SnakeLadderContext, ISnake } from './snakeLadderGameContext';
import { Circle } from 'react-konva';

export function SnakeRender() {
  const state = React.useContext(SnakeLadderContext);
  
  return (
    <>
      {
        state.snakes.map((snake: ISnake) => {
          const {mouthScore, tailScore} = snake;
          const mouthPosition = state.scoreWithGrid[mouthScore];
          const tailPosition = state.scoreWithGrid[tailScore];
          const [mXAxis, mYAxis, mRectWidth, mRectHeight] = mouthPosition;
          const [tXAxis, tYAxis, tRectWidth, tRectHeight] = tailPosition;
          console.log(mouthScore, tailScore)
          return (
            <>
              <Circle
                key={`snakeMouth${mXAxis}`}
                x={mXAxis + mRectWidth / 2}
                y={mYAxis + mRectHeight / 2}
                radius={mRectWidth/3}
                fill={"yellow"}
              />
              <Circle
                key={`snakeTail${tXAxis}`}
                x={tXAxis + tRectWidth / 2}
                y={tYAxis + tRectHeight / 2}
                radius={tRectWidth/3}
                fill={"brown"}
              />
            </>
          )
        })
      }
    </>
  )
}
