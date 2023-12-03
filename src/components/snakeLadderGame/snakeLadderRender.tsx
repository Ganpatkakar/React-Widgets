import React from 'react';
import { ILadder, SnakeLadderContext } from './snakeLadderGameContext';
import { Shape } from 'react-konva';

const calcWayPoints = (vertices, differencePoints): {[key: string]: number}[] => {
  let wayPoints: {[key: string]: number}[] = [];
  for (let i = 1; i < vertices.length; i++) {
    let pt0 = vertices[i - 1];
    let pt1 = vertices[i];
    let dx = pt1.x - pt0.x;
    let dy = pt1.y - pt0.y;
    for (let j = 0; j < differencePoints; j++) {
      let x = pt0.x + dx * j / differencePoints;
      let y = pt0.y + dy * j / differencePoints;
      wayPoints.push({
        x: x,
        y: y
      });
    }
  }
  return (wayPoints);
};

export function SnakeLadderRender() {
  const state = React.useContext(SnakeLadderContext);

  return (
    <>
      {
        state.ladders.map((ladder: ILadder) => {
          const { startScore, endScore } = ladder;
          const ladderStartPosition = state.scoreWithGrid[startScore];
          const ladderEndPosition = state.scoreWithGrid[endScore];
          let [sXAxis, sYAxis, sRectWidth, sRectHeight] = ladderStartPosition;
          sXAxis = sXAxis + sRectWidth / 2;
          sYAxis = sYAxis + sRectHeight / 2;

          let [eXAxis, eYAxis, eRectWidth, eRectHeight] = ladderEndPosition;
          eXAxis = eXAxis + eRectWidth / 2;
          eYAxis = eYAxis + eRectHeight / 2;

          // console.log(`startX: ${sXAxis} startY: ${sYAxis}  endX: ${eXAxis} endY: ${eYAxis}`)
          return (
            <Shape
              key={`ladderStartScore${startScore}`}
              sceneFunc={(ctx, shape) => {

                const heightOfLadder: number = Math.abs(eYAxis - sYAxis);
                const diff: number = Math.floor(heightOfLadder / 15);

                const vertex1: {x: number, y: number}[] = [{x: sXAxis, y: sYAxis}, {x: eXAxis, y: eYAxis}];
                const firstWayPoints: {[key: string]: number}[] = calcWayPoints(vertex1, diff);

                const vertex2: {x: number, y: number}[] = [{x: sXAxis + 10, y: sYAxis}, {x: eXAxis + 10, y: eYAxis}];
                const secondWayPoints: {[key: string]: number}[] = calcWayPoints(vertex2, diff);

                //console.log(startScore, diff, sXAxis, firstWayPoints, secondWayPoints);

                ctx.lineWidth = 2;
                ctx.strokeStyle = "#8d5524";
                ctx.beginPath();
                ctx.moveTo(sXAxis, sYAxis);
                ctx.lineTo(eXAxis, eYAxis);

                ctx.moveTo(sXAxis + 10, sYAxis);
                ctx.lineTo(eXAxis + 10, eYAxis);
                ctx.stroke();

                for (let i = 1; i < diff; i++ ) {
                  ctx.lineWidth = 3;
                  ctx.beginPath();
                  ctx.globalAlpha = 1;
                  ctx.strokeStyle = '#c68642';
                  ctx.moveTo(firstWayPoints[i].x, firstWayPoints[i].y);
                  ctx.lineTo(secondWayPoints[i].x, secondWayPoints[i].y);
                  ctx.stroke();
                }
                ctx.closePath();
              }}
              fill="#00D2FF"
              stroke="black"
              strokeWidth={4}
            />
          )
        })
      }
    </>
  )
}
