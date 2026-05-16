import React, { useReducer, useRef, useEffect, useState } from 'react';
import { Shape, Stage, Layer, Circle, Line, Group } from 'react-konva';
import { PlayerPositionRender } from './playerPositionRender';
import styles from './SixteenPabelsGame.scss';
import { bottomTrianlgeCircles, topTrianlgeCircles, squareCircles } from './SixteenPabelsGameContext';

const players = [
  {
    playerName: "GK",
    color: "rgb(0, 255, 0)"
  },
  {
    playerName: "NK",
    color: "rgb(255, 0, 0)"
  }
];

const gameMatrix = [
  [-1, 1, 1, 1, -1],
  [-1, 1, 1, 1, -1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0],
  [2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2],
  [-1, 2, 2, 2, -1],
  [-1, 2, 2, 2, -1],
];

// special cordinates 2.2 and 6.2, these are the only cordinates from which
// top inverted triangle and bottom triangle can be accessed

export function SixteenPabelsGame() {
  const [containerWidth, containerHeight] = [500, 500];
  const [upperTriangleWidth, upperTriangleHeight] = [containerWidth / 2, 120];
  const [lowerTriangleWidth, lowerTriangleHeight] = [containerWidth / 2, 120];
  const [squareWidth, squareHeight] = [containerWidth, containerHeight];

  const topTrianlgeCordinates = topTrianlgeCircles(upperTriangleWidth, upperTriangleHeight);
  const bottomTrianlgeCordinates = bottomTrianlgeCircles(lowerTriangleWidth, lowerTriangleHeight);
  const squareCordinates = squareCircles(squareWidth, squareHeight);

  return (
    <div className={styles.gameContainer}>
      <div style={{ width: '100%', }}>
        <Stage width={containerWidth} height={upperTriangleHeight + 60}>
          <Layer x={containerWidth / 4 + 30} y={60}>
            <Shape
              sceneFunc={(ctx, shape) => {
                ctx.beginPath();

                // Triange shape
                ctx.moveTo(0, 0);
                ctx.lineTo(upperTriangleWidth / 2, upperTriangleHeight);
                ctx.lineTo(upperTriangleWidth, 0);
                ctx.lineTo(0, 0);

                // First line in triangle from top "upperTriangleHeight / 3"
                ctx.moveTo(upperTriangleWidth / 4, upperTriangleHeight / 2);
                ctx.lineTo(upperTriangleWidth - upperTriangleWidth / 4, upperTriangleHeight / 2);

                // straight line
                ctx.moveTo(upperTriangleWidth / 2, 0);
                ctx.lineTo(upperTriangleWidth / 2, upperTriangleHeight);
                ctx.closePath();
                ctx.fillStrokeShape(shape);
              }}
              stroke="black"
              strokeWidth={1}
            />
            {
              topTrianlgeCordinates.map((cordinate, index) => {
                const { x, y, r = 30, a = 0, b = 0 } = cordinate;
                let dice = null;
                if (gameMatrix[a][b] !== 0) {
                  const player = gameMatrix[a][b];
                  let isCoinSelected = false;
                  // if (state.sourceCoordinates !== null) {
                  //   isCoinSelected = state.sourceCoordinates.a === a && state.sourceCoordinates.b === b;
                  // }
                  dice = (
                    <PlayerPositionRender
                      xAxis={x}
                      yAxis={y}
                      radius={isCoinSelected ? 15 : 10}
                      player={players[player - 1]}
                    />
                  )
                }
                return (
                  <div key={index}>
                    <Circle
                      key={index}
                      x={x}
                      y={y}
                      radius={r}
                    />
                    {dice}
                  </div>
                );
              })
            }
          </Layer>
        </Stage>
        <Stage width={squareWidth + 60} height={squareHeight + 60}>
          <Layer x={30} y={30}>
            <Shape
              sceneFunc={(ctx, shape) => {
                ctx.beginPath();

                // Triange shape
                ctx.moveTo(0, 0);
                ctx.lineTo(0, squareHeight);
                ctx.lineTo(squareWidth, squareHeight);
                ctx.lineTo(squareWidth, 0);
                ctx.lineTo(0, 0);

                // first horizontal line at width 0 to width squareWidth and height squareHeight / 4
                ctx.moveTo(0, squareHeight / 4);
                ctx.lineTo(squareWidth, squareHeight / 4);

                // Second horizontal line at width 0 to width squareWidth and height squareHeight / 2
                ctx.moveTo(0, squareHeight / 2);
                ctx.lineTo(squareWidth, squareHeight / 2);

                // thirs horizontal line at width 0 to width squareWidth and height squareHeight - squareHeight / 4
                ctx.moveTo(0, squareHeight - squareHeight / 4);
                ctx.lineTo(squareWidth, squareHeight - squareHeight / 4);

                // first vertical line from width squareWidth / 4 and height 0 to height square height
                ctx.moveTo(squareWidth / 4, 0);
                ctx.lineTo(squareWidth / 4, squareHeight);
                // Second vertical line from width squareWidth / 2 and height 0 to height square height
                ctx.moveTo(squareWidth / 2, 0);
                ctx.lineTo(squareWidth / 2, squareHeight);
                // Third vertical line from width squareWidth - squareWidth / 4 and height from 0 to squareHeight
                ctx.moveTo(squareWidth - squareWidth / 4, 0);
                ctx.lineTo(squareWidth - squareWidth / 4, squareHeight);

                ctx.closePath();
                ctx.fillStrokeShape(shape);
              }}
              stroke="black"
              strokeWidth={1}
            />
            {
              squareCordinates.map((cordinate, index) => {
                const { x, y, r = 30, a = 0, b = 0 } = cordinate;
                let dice = null;
                if (gameMatrix[a][b] !== 0) {
                  const player = gameMatrix[a][b];
                  let isCoinSelected = false;
                  // if (state.sourceCoordinates !== null) {
                  //   isCoinSelected = state.sourceCoordinates.a === a && state.sourceCoordinates.b === b;
                  // }
                  dice = (
                    <PlayerPositionRender
                      xAxis={x}
                      yAxis={y}
                      radius={isCoinSelected ? 15 : 10}
                      player={players[player - 1]}
                    />
                  )
                }
                return (
                  <div key={index}>
                    <Circle
                      key={index}
                      x={x}
                      y={y}
                      radius={r}
                    />
                    {dice}
                  </div>
                );
              })
            }
          </Layer>
        </Stage>
        <Stage width={containerWidth} height={upperTriangleHeight + 30}>
          <Layer x={containerWidth / 4 + 30} y={30}>
            <Shape
              sceneFunc={(ctx, shape) => {
                ctx.beginPath();

                // Triange shape
                ctx.moveTo(lowerTriangleWidth / 2, 0);
                ctx.lineTo(0, lowerTriangleHeight);
                ctx.lineTo(lowerTriangleWidth, lowerTriangleHeight);
                ctx.lineTo(lowerTriangleWidth / 2, 0);

                // First line in triangle from top "lowerTriangleHeight / 3"
                ctx.moveTo(lowerTriangleWidth / 4, lowerTriangleHeight / 2);
                ctx.lineTo(lowerTriangleWidth - lowerTriangleWidth / 4, lowerTriangleHeight / 2);

                ctx.moveTo(lowerTriangleWidth / 2, 0);
                ctx.lineTo(lowerTriangleWidth / 2, lowerTriangleHeight);
                ctx.closePath();
                ctx.fillStrokeShape(shape);
              }}
              stroke="black"
              strokeWidth={1}
            />
            {
              bottomTrianlgeCordinates.map((cordinate, index) => {
                const { x, y, r = 30, a = 0, b = 0 } = cordinate;
                let dice = null;
                if (gameMatrix[a][b] !== 0) {
                  const player = gameMatrix[a][b];
                  let isCoinSelected = false;
                  // if (state.sourceCoordinates !== null) {
                  //   isCoinSelected = state.sourceCoordinates.a === a && state.sourceCoordinates.b === b;
                  // }
                  dice = (
                    <PlayerPositionRender
                      xAxis={x}
                      yAxis={y}
                      radius={isCoinSelected ? 15 : 10}
                      player={players[player - 1]}
                    />
                  )
                }
                return (
                  <div key={index}>
                    <Circle
                      key={index}
                      x={x}
                      y={y}
                      radius={r}
                    />
                    {dice}
                  </div>
                );
              })
            }
          </Layer>
        </Stage>
      </div>
    </div>
  )
}
