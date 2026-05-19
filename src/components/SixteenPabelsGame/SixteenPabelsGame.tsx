import React, { useReducer, useRef, useEffect, useState } from 'react';
import { Shape, Stage, Layer, Circle, Line, Group } from 'react-konva';
import { PlayerPositionRender } from './playerPositionRender';
import styles from './SixteenPabelsGame.scss';
import { bottomTrianlgeCircles, topTrianlgeCircles, squareCircles, sixteenPabelsGameReducer, IDefaultValues, Actions} from './SixteenPabelsGameContext';

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

export function SixteenPabelsGame() {
  const [dimensions, setDimensions] = useState({ containerWidth: 500, containerHeight: 500 });
  const containerRef = useRef<HTMLDivElement>(null);

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
  const [upperTriangleWidth, upperTriangleHeight] = [containerWidth / 1.5, 120];
  const [lowerTriangleWidth, lowerTriangleHeight] = [containerWidth / 1.5, 120];
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
    const source = state.sourceCoordinates;
    const value = state.matrix[a][b];
    const currentPlayer = state.currentPlayer;
    const opponent = currentPlayer === 1 ? 2 : 1;

    // 1 DESELECT: If clicking the already selected source, unselect it.
    // 2 SELECT: If clicked on the current playaers coin and make it source destination
    // 3 Destination coordinates can only be horizontal or vertical
    // 4 Special handling cases includes => upper triangle move and bottom triangle moves
    // 4.1 condition to enter to upper triangle is only from {a: 2, b: 2}
    // 4.2 condition to enter the bottom triangle is only from {a: 6 ,b: 2}
    // 4.3 From these special cordinates only diagonal move is possible
    // 5 Single place move is only going to move current selected source value to next selected destination
    // 6 Double place move (jump to another pabel, so check the condition if there is another players pabel in between, if not then not valid move)
    // 7 If jump to double is a valid move then kill another players pabel
    // 8 Player can jump multiple times if they have killed previously, so in case of kill player choose to kill another or pass the turn to next player on each kill

    // 1 & 2: Selection / Deselection Logic
    if (!source) {
      if (value === currentPlayer) {
        dispatch({ type: Actions.PLAYER_SELECT_SOURCE, payload: { a, b } });
      }
      return;
    }

    if (source.a === a && source.b === b) {
      dispatch({ type: Actions.PLAYER_UNSELECT_SOURCE });
      return;
    }

    if (value === currentPlayer) {
      if (!state.hasKilledThisTurn) {
        dispatch({ type: Actions.PLAYER_SELECT_SOURCE, payload: { a, b } });
      }
      return;
    }

    // 3, 4, 5, 6, 7: Move Validation and Execution
    if (value === 0) {
      const distA = Math.abs(a - source.a);
      const distB = Math.abs(b - source.b);

      if (!state.hasKilledThisTurn) {
        const isAdjacent = (distA === 1 && distB === 0) || (distA === 0 && distB === 1);
        const isTransitionDiag = (
          (source.a === 2 && source.b === 2 && a === 1 && (b === 1 || b === 3)) ||
          (a === 2 && b === 2 && source.a === 1 && (source.b === 1 || source.b === 3)) ||
          (source.a === 6 && source.b === 2 && a === 7 && (b === 1 || b === 3)) ||
          (a === 6 && b === 2 && source.a === 7 && (source.b === 1 || source.b === 3))
        );

        const isForbiddenTransition = (
          (source.a === 1 && a === 2 && b !== 2) || (source.a === 2 && a === 1 && source.b !== 2) ||
          (source.a === 7 && a === 6 && b !== 2) || (source.a === 6 && a === 7 && source.b !== 2)
        );

        if ((isAdjacent || isTransitionDiag) && !isForbiddenTransition) {
          dispatch({ type: Actions.PLAYER_SELECT_DESTINATION, payload: { a, b } });
          dispatch({ type: Actions.NEXT_PLAYER_TURN });
          return;
        }
      }

      let jumpMid: { a: number, b: number } | null = null;
      if ((distA === 2 && distB === 0) || (distA === 0 && distB === 2)) {
        jumpMid = { a: (source.a + a) / 2, b: (source.b + b) / 2 };
      } else if (distA === 2 && distB === 1) {
        if (a === 2 && b === 2 && source.a === 0 && (source.b === 1 || source.b === 3)) jumpMid = { a: 1, b: source.b };
        else if (source.a === 2 && source.b === 2 && a === 0 && (b === 1 || b === 3)) jumpMid = { a: 1, b: b };
        else if (a === 6 && b === 2 && source.a === 8 && (source.b === 1 || source.b === 3)) jumpMid = { a: 7, b: source.b };
        else if (source.a === 6 && source.b === 2 && a === 8 && (b === 1 || b === 3)) jumpMid = { a: 7, b: b };
      }

      if (jumpMid && state.matrix[jumpMid.a][jumpMid.b] === opponent) {
        const mid = jumpMid;
        dispatch({ type: Actions.PLAYER_KILL_PABEL, payload: mid });
        dispatch({ type: Actions.PLAYER_SELECT_DESTINATION, payload: { a, b } });

        const nextMatrix = state.matrix.map(r => [...r]);
        nextMatrix[source.a][source.b] = 0;
        nextMatrix[mid.a][mid.b] = 0;
        nextMatrix[a][b] = currentPlayer;

        if (checkFurtherJumps(a, b, nextMatrix)) {
          dispatch({ type: Actions.PLAYER_SELECT_SOURCE, payload: { a, b } });
        } else {
          dispatch({ type: Actions.NEXT_PLAYER_TURN });
        }
      }
    }
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
              renderPlayers(topTrianlgeCordinates, handlePlayerClick, state)
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
              renderPlayers(bottomTrianlgeCordinates, handlePlayerClick, state)
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

                ctx.closePath();
                ctx.fillStrokeShape(shape);
              }}
              stroke="black"
              strokeWidth={1}
            />
            {
              renderPlayers(squareCordinates, handlePlayerClick, state)
            }
          </Layer>
        </Stage>
      </div>
    </div>
  )
}

const renderPlayers = (coordinates: Array<any>, clickHandler: any, state: IDefaultValues) => {
  return coordinates.map((coordinate, index) => {
    const { x, y, r = 30, a = 0, b = 0 } = coordinate;
    const cellValue = state.matrix[a][b];
    let dice = null;

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
        <Circle x={x} y={y} radius={r} fill="transparent" />
        <Circle x={x} y={y} radius={2} fill="black" stroke={"black"}/>
        {dice}
      </Group>
    );
  })
}