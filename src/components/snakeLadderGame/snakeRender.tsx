import React from 'react';
import { SnakeLadderContext, ISnake } from './snakeLadderGameContext';
import { Shape } from 'react-konva';
import { drawSnake, generateSegmentedSnakePath } from './snakeRenderer';

function bezierPointsCalc(a, f) {
  for (var b = [], c, e = 0; e < a.length; e++)
    if (0 == e)
      b.push(a[0]);
    else {
      var g, h, l;
      l = e - 1;
      g = 0 === l ? 0 : l - 1;
      h = l === a.length - 1 ? l : l + 1;
      c = Math.abs((a[h].x - a[g].x) / (0 === a[h].x - a[l].x ? 0.01 : a[h].x - a[l].x)) * (f - 1) / 2 + 1;
      var t = (a[h].x - a[g].x) / c;
      c = (a[h].y - a[g].y) / c;
      b[b.length] = a[l].x > a[g].x && 0 < t || a[l].x < a[g].x && 0 > t ? {
        x: a[l].x + t / 3,
        y: a[l].y + c / 3
      } : {
        x: a[l].x,
        y: a[l].y + c / 9
      };
      l = e;
      g = 0 === l ? 0 : l - 1;
      h = l === a.length - 1 ? l : l + 1;
      c = Math.abs((a[h].x - a[g].x) / (0 === a[l].x - a[g].x ? 0.01 : a[l].x - a[g].x)) * (f - 1) / 2 + 1;
      t = (a[h].x - a[g].x) / c;
      c = (a[h].y - a[g].y) / c;
      b[b.length] = a[l].x > a[g].x && 0 < t || a[l].x < a[g].x && 0 > t ? {
        x: a[l].x - t / 3,
        y: a[l].y - c / 3
      } : {
        x: a[l].x,
        y: a[l].y - c / 9
      };
      b[b.length] = a[e]
    }
  return b
}

const getQuadraticBezierXYatT = (startPt, ct1, ct2, endPt, t) => {
  let x = Math.pow(1 - t, 3) * startPt.x + 3 * Math.pow(1 - t, 2) * t * ct1.x + 3 * (1 - t) * Math.pow(t, 2) * ct2.x + Math.pow(t, 3) * endPt.x
  let y = Math.pow(1 - t, 3) * startPt.y + 3 * Math.pow(1 - t, 2) * t * ct1.y + 3 * (1 - t) * Math.pow(t, 2) * ct2.y + Math.pow(t, 3) * endPt.y
  return ({ x: x, y: y });
};

const calcWayPoints = (vertices, difference) => {
  const wayPoints = [];
  for (let i = 1; i < vertices.length; i += 3) {
    let startPt = { x: vertices[i - 1].x, y: vertices[i - 1].y }
    let ct1 = { x: vertices[i].x, y: vertices[i].y }
    let ct2 = { x: vertices[i + 1].x, y: vertices[i + 1].y }
    let endPt = { x: vertices[i + 2].x, y: vertices[i + 2].y }
    for (let t = 0; t < difference; t++) {
      let pointers = getQuadraticBezierXYatT(startPt, ct1, ct2, endPt, t / difference);
      wayPoints.push({
        x: pointers.x,
        y: pointers.y
      });
    }
  }
  return (wayPoints);
};

const colors = [
  "#bb9f2fff",
  "#6e6251ff",
  "#012b1dff",
  "#186619ff",
  "#011304ff"
];

const segmentsDefinition = [
  { amplitude: 0.6, lengthRatio: 0.10, points: 100 },
  { amplitude: 0.8, lengthRatio: 0.30, points: 100 },  // Tight coil near head
  { amplitude: 1.0, lengthRatio: 0.25, points: 80 },  // Medium S-bend
  { amplitude: 1.2, lengthRatio: 0.15, points: 50 },
  { amplitude: 1.0, lengthRatio: 0.15, points: 30 },   // Long, gentle tail
  { amplitude: 0.8, lengthRatio: 0.05, points: 20 },   // Long, gentle tail
];

export function SnakeRender() {
  const state = React.useContext(SnakeLadderContext);

  return (
    <>
      {
        state.snakes.map((snake: ISnake, index) => {
          const { mouthScore, tailScore } = snake;

          const mouthPosition = state.scoreWithGrid[mouthScore];
          const tailPosition = state.scoreWithGrid[tailScore];

          let [mXAxis, mYAxis, mRectWidth, mRectHeight] = mouthPosition;
          mXAxis = mXAxis + mRectWidth / 2;
          mYAxis = mYAxis + mRectHeight / 2;

          let [tXAxis, tYAxis, tRectWidth, tRectHeight] = tailPosition;
          tXAxis = tXAxis + tRectWidth / 2;
          tYAxis = tYAxis + tRectHeight / 2;
          const color = colors[index % colors.length];

          // --- 2. Calculate Total Length (Hypotenuse) ---
          const lengthX = tXAxis - mXAxis;
          const lengthY = tYAxis - mYAxis;
          const straightLineDistance = Math.sqrt(lengthX * lengthX + lengthY * lengthY);

          // --- 3. Determine Dynamic BASE_WIDTH ---
          let lengthCoefficient = 0.02;
          if (straightLineDistance < 200) {
            lengthCoefficient = 0.05;
          } else if (straightLineDistance < 300) {
            lengthCoefficient = 0.03;
          }
          
          const dynamicBaseWidth = straightLineDistance * lengthCoefficient;

          //     // Generate the path coordinates
          const customSnakePath = generateSegmentedSnakePath(
            mXAxis, mYAxis,
            tXAxis, tYAxis,
            segmentsDefinition
          );

          return (
            <>
              <Shape
                sceneFunc={(ctx) => drawSnake(ctx, customSnakePath, color, dynamicBaseWidth)}
              />
            </>
          )
        })
      }
    </>
  )
}
