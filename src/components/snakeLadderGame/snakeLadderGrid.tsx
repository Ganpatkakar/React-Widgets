import React from 'react';
import { Rect, Text } from 'react-konva';
import { SnakeLadderContext } from './snakeLadderGameContext';

const color = "#ddd";
const strokeColor = "#000";

export function SnakeLadderGrid() {
  const state = React.useContext(SnakeLadderContext);

  return (
    <>
      {Object.keys(state.scoreWithGrid).map((key, index) => {
        const [xAxis, yAxis, rectWidth, rectHeight] = state.scoreWithGrid[key];
        const centerX = xAxis + rectWidth / 2;
        const centerY = yAxis + rectWidth / 4 - 5;
        let gridColor;
        if (index % 2 === 0) {
          gridColor = "#fff6e9"
        } else {
          gridColor = "#ffefd7"
        }
        return (
          <RenderGrid
            key={key}
            name={key}
            xAxis={xAxis}
            yAxis={yAxis}
            rectWidth={rectWidth}
            rectHeight={rectHeight}
            gridColor={gridColor}
            centerX={centerX}
            centerY={centerY}
          />
        )
      })}
    </>
  )
}


export default function RenderGrid({
  name, xAxis, yAxis, rectWidth, rectHeight, gridColor, centerX, centerY
}) {
  return (
    <>
      <Rect
        key={name}
        x={xAxis}
        y={yAxis}
        width={rectWidth}
        height={rectHeight}
        fill={gridColor}
        stroke={strokeColor}
        strokeWidth={1}
      />
      <Text
        x={centerX}
        y={centerY}
        text={name}
        fontSize={16}
      />
    </>
  )
}
