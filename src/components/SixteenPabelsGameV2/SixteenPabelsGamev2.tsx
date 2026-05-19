import React, { useReducer, useRef, useEffect, useState } from 'react';
import { Shape, Stage, Layer, Circle, Group, Text } from 'react-konva';
import { PlayerPositionRender } from './playerPositionRender';
import styles from './SixteenPabelsGamev2.scss';
import { bottomTrianlgeCircles, topTrianlgeCircles, squareCircles, sixteenPabelsGameReducer, IDefaultValues, Actions, coordinatesPossibleMoves} from './SixteenPabelsGameContextv2';

const players = [
  {
    playerName: "GK",
    color: "#2a9d49"
  },
  {
    playerName: "NK",
    color: "#dc3c29"
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

export function SixteenPabelsGamev2() {
  const [dimensions, setDimensions] = useState({ containerWidth: 500, containerHeight: 500 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [possibleMoves, setPossibleMoves] = useState<any>(new Map());
  const [possibleJumps, setPossibleJumps] = useState<any>(new Map());

  const initialValues: IDefaultValues = {
    currentPlayer: 1,
    matrix: gameMatrix,
    sourceCoordinates: null,
    destinationCordinates: null,
    hasKilledThisTurn: false,
  }
  const [state, dispatch] = useReducer(sixteenPabelsGameReducer, initialValues);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        const height = containerRef.current.clientHeight;
        const minLen = Math.min(width - 60, height - 60, 500);
        setDimensions({ containerWidth: minLen, containerHeight: minLen });
      }
    };

    updateDimensions();

    const resizeObserver = new ResizeObserver(updateDimensions);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);


  const {containerWidth, containerHeight} = dimensions;
  const [upperTriangleWidth, upperTriangleHeight] = [containerWidth / 1.5, 100];
  const [lowerTriangleWidth, lowerTriangleHeight] = [containerWidth / 1.5, 100];
  const [squareWidth, squareHeight] = [containerWidth, containerHeight];

  const topTrianlgeCordinates = topTrianlgeCircles(upperTriangleWidth, upperTriangleHeight);
  const bottomTrianlgeCordinates = bottomTrianlgeCircles(lowerTriangleWidth, lowerTriangleHeight);
  const squareCordinates = squareCircles(squareWidth, squareHeight);

  const checkFurtherJumps = (row: number, col: number, matrix: number[][]) => {
    const opponent = state.currentPlayer === 1 ? 2 : 1;
    const potentialJumps = [
      { dr: 2, dc: 0, mr: row + 1, mc: col },
      { dr: -2, dc: 0, mr: row - 1, mc: col },
      { dr: 0, dc: 2, mr: row, mc: col + 1 },
      { dr: 0, dc: -2, mr: row, mc: col - 1 },
    ];

    for (const j of potentialJumps) {
      const nr = row + j.dr, nc = col + j.dc;
      if (nr >= 0 && nr < 9 && nc >= 0 && nc < 5) {
        if (matrix[nr][nc] === 0 && matrix[j.mr][j.mc] === opponent) return true;
      }
    }

    // Special diagonal transitions jumps
    if (row === 2 && col === 2) {
      if (matrix[0][1] === 0 && matrix[1][1] === opponent) return true;
      if (matrix[0][3] === 0 && matrix[1][3] === opponent) return true;
    }
    if (row === 0 && col === 1 && matrix[2][2] === 0 && matrix[1][1] === opponent) return true;
    if (row === 0 && col === 3 && matrix[2][2] === 0 && matrix[1][3] === opponent) return true;
    
    if (row === 6 && col === 2) {
      if (matrix[8][1] === 0 && matrix[7][1] === opponent) return true;
      if (matrix[8][3] === 0 && matrix[7][3] === opponent) return true;
    }
    if (row === 8 && col === 1 && matrix[6][2] === 0 && matrix[7][1] === opponent) return true;
    if (row === 8 && col === 3 && matrix[6][2] === 0 && matrix[7][3] === opponent) return true;

    return false;
  };

  const handlePlayerClick = (a: number, b: number) => {
    console.log("player click", a, b);
    const key: string = `${a}_${b}`;
    const { oneStep, jump } = coordinatesPossibleMoves[key];
    const map = new Map();
    const jumpMap = new Map();
    const res: any[] = [];
    oneStep.map(([aa, bb]) => {
      map.set(`${a + aa}_${b +bb}`, true);
      res.push([aa + aa, bb + bb]);
    });
    console.log(JSON.stringify(res));
    jump.map(([aa, bb]) => {
      jumpMap.set(`${a + aa}_${b +bb}`, true);
    });
    setPossibleMoves(map);
    setPossibleJumps(jumpMap);
    console.log(jump);
  };

  return (
    <div className={styles.gameContainer}>
      <div ref={containerRef} style={{ width: '100%',}}>
        <Stage width={containerWidth + 60} height={upperTriangleHeight + squareHeight + lowerTriangleHeight + 60}>
          <Layer x={containerWidth / 6 + 30} y={30}>
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
              renderPlayers(topTrianlgeCordinates, handlePlayerClick, state, possibleMoves, possibleJumps)
            }
          </Layer>
          <Layer x={containerWidth / 6 + 30} y={upperTriangleHeight + squareHeight + 30}>
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
              renderPlayers(bottomTrianlgeCordinates, handlePlayerClick, state, possibleMoves, possibleJumps)
            }
          </Layer>
          <Layer x={30} y={upperTriangleHeight + 30}>
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

                // Diagonal line 1
                ctx.moveTo(0, 0);
                ctx.lineTo(squareWidth, squareHeight);

                // Diagonal line 2
                ctx.moveTo(squareWidth, 0);
                ctx.lineTo(0, squareHeight);

                // tilted square
                ctx.moveTo(squareWidth / 2, 0);
                ctx.lineTo(squareWidth, squareHeight / 2);
                ctx.lineTo(squareWidth / 2, squareHeight);
                ctx.lineTo(0, squareHeight / 2);


                ctx.closePath();
                ctx.fillStrokeShape(shape);
              }}
              stroke="black"
              strokeWidth={1}
            />
            {
              renderPlayers(squareCordinates, handlePlayerClick, state, possibleMoves, possibleJumps)
            }
          </Layer>
        </Stage>
      </div>
    </div>
  )
}

const renderPlayers = (coordinates: Array<any>, clickHandler: any, state: IDefaultValues, possibleMoves: Map<string, boolean>, possibleJumps: Map<string, boolean>) => {

  return coordinates.map((coordinate, index) => renderPlayer(coordinate, clickHandler, state, possibleMoves, possibleJumps));
    
}

const renderPlayer = (coordinate: any, clickHandler: any, state: IDefaultValues, possibleMoves: Map<string, boolean>, possibleJumps: Map<string, boolean>) => {
  
  const { x, y, r = 30, a = 0, b = 0 } = coordinate;
  const cellValue = state.matrix[a][b];
  let dice = null;
  const key = `${a}_${b}`
  let color = "black";
  if (possibleMoves.has(key)) {
    color = "red";
  }
  if (possibleJumps.has(key)) {
    color = "blue";
  }
  if (cellValue > 0) {
    const isPabelSelected = state.sourceCoordinates?.a === a && state.sourceCoordinates?.b === b;
    const isCurrentPlayerPabelsActive =  state.currentPlayer === cellValue;
    dice = (
      <PlayerPositionRender
        xAxis={x}
        yAxis={y}
        radius={isPabelSelected ? 12 : 10}
        player={players[cellValue - 1]}
        isCurrentPlayerPabelsActive={isCurrentPlayerPabelsActive}
      />
    )
  }
  return (
    <Group key={`${a}-${b}`} onClick={() => clickHandler(a, b)} onTouchEnd={() => clickHandler(a, b)}>
      <Circle x={x} y={y} radius={r} fill="transparent"/>
      <Circle x={x} y={y} radius={4} fill={color} stroke={color} />
      <Text x={x} y={y} text={`${a}_${b}`} fontSize={15} fill="green"/>
      {/* {dice} */}
    </Group>
  );
}