import React from 'react';
import { SnakeLadderContext, ISnake } from './snakeLadderGameContext';
import { Circle, Line, Shape } from 'react-konva';

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
  return ({x: x, y: y});
};

const calcWayPoints = (vertices, difference) => {
  const wayPoints = [];
  for (let i = 1; i < vertices.length; i += 3) {
    let startPt = {x: vertices[i - 1].x, y: vertices[i - 1].y}
    let ct1 = {x: vertices[i].x, y: vertices[i].y}
    let ct2 = {x: vertices[i + 1].x, y: vertices[i + 1].y}
    let endPt = {x: vertices[i + 2].x, y: vertices[i + 2].y}
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

const colors = ["#ffcc02", "#ff9900", "#009966", "#ff999a", "#0099cc"];

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

            return (
                <>
                  <Line
                      x={mXAxis - 5}
                      y={mYAxis - 5}
                      points={[0, 0, 15, 0, 15, 15]}
                      tension={0.5}
                      closed
                      stroke="#000"
                      strokeWidth={1}
                      fill={color}
                  />
                  <Shape
                      sceneFunc={(ctx, shape) => {
                        ctx.closePath();
                        let points: {x: number, y: number}[] = [
                          { x: mXAxis, y: mYAxis },
                          { x: mXAxis - (Math.max(tXAxis, mXAxis) - Math.min(tXAxis, mXAxis)) / 2, y: mYAxis + (tYAxis - mYAxis)/3 },
                          { x: mXAxis + (Math.max(tXAxis, mXAxis) - Math.min(tXAxis, mXAxis)) / 2, y: mYAxis + (tYAxis - mYAxis)/1.5 },
                          { x: tXAxis, y: tYAxis }
                        ];
                        let a = bezierPointsCalc(points, 2);
                        // console.log(a);

                        let wayPoints = calcWayPoints(a, 5);

                        ctx.lineWidth = 2;
                        ctx.beginPath();
                        // for (var i = 1; i < a.length; i += 3) {
                        //   if (i <= a.length - 3) {
                        //     ctx.bezierCurveTo(a[i].x, a[i].y, a[i + 1].x, a[i + 1].y, a[i + 2].x, a[i + 2].y);
                        //   }
                        // }

                        // console.log(mouthScore, tailScore, mXAxis, tXAxis, wayPoints);
                        for (let i = 0; i < wayPoints.length; i++) {
                          ctx.lineWidth = 8;
                          ctx.beginPath();
                          ctx.globalAlpha = 1;
                          ctx.strokeStyle = color;
                          if (i === 0) {
                            ctx.moveTo(wayPoints[i].x, wayPoints[i].y);
                          } else {
                            ctx.moveTo(wayPoints[i - 1].x, wayPoints[i - 1].y);
                            ctx.lineTo(wayPoints[i].x, wayPoints[i].y);
                          }
                          ctx.stroke();
                        }
                        ctx.closePath();
                      }}
                      fill="#00D2FF"
                      stroke="black"
                  />
                </>
            )
          })
        }
      </>
  )
}
