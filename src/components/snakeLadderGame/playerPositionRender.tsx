import React from 'react';
import { SnakeLadderContext } from './snakeLadderGameContext';
import { Circle } from 'react-konva';

export function PlayerPositionRender() {
  const state = React.useContext(SnakeLadderContext);
  return (
    <>
      {
        state.players.map((player) => {
          const { name, score, color } = player;
          let [xAxis, yAxis, rectWidth] = state.scoreWithGrid[score];
          xAxis = xAxis + rectWidth / 2;
          yAxis = yAxis + rectWidth / 2;
          const radius = rectWidth / (state.players.length + 2);
          return (
            <Circle
              key={name}
              x={xAxis}
              y={yAxis}
              radius={radius}
              fill={color}
              duration={0.2}
            />
          )
        })
      }
    </>
  )
}
