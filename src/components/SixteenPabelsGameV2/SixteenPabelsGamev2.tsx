import React, { useReducer, useRef, useEffect, useState } from 'react';
import { Shape, Stage, Layer, Circle, Group } from 'react-konva';
import { PlayerPositionRender } from './playerPositionRender';
import styles from './SixteenPabelsGamev2.scss';
import { bottomTrianlgeCircles, topTrianlgeCircles, squareCircles, sixteenPabelsGameReducer, IDefaultValues, Actions, coordinatesPossibleMoves } from './SixteenPabelsGameContextv2';

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


  const { containerWidth, containerHeight } = dimensions;
  const [upperTriangleWidth, upperTriangleHeight] = [containerWidth / 1.5, 100];
  const [lowerTriangleWidth, lowerTriangleHeight] = [containerWidth / 1.5, 100];
  const [squareWidth, squareHeight] = [containerWidth, containerHeight];

  const topTrianlgeCordinates = topTrianlgeCircles(upperTriangleWidth, upperTriangleHeight);
  const bottomTrianlgeCordinates = bottomTrianlgeCircles(lowerTriangleWidth, lowerTriangleHeight);
  const squareCordinates = squareCircles(squareWidth, squareHeight);

  const handlePlayerClick = (a: number, b: number) => {
    const source = state.sourceCoordinates;
    const value = state.matrix[a][b];
    const currentPlayer = state.currentPlayer;
    const opponent = currentPlayer === 1 ? 2 : 1;
    const key: string = `${a}_${b}`;
    // if not player has selected own pabel then return
    // if no selected value, then make current coordinates as selecte coordinates then return
    if (!source) {
      if (value === currentPlayer) {
        dispatch({ type: Actions.PLAYER_SELECT_SOURCE, payload: { a, b } });
      }
      return;
    }

    const sourceKey: string = `${source.a}_${source.b}`;

    // if user selects already selected pabel then deselct it
    if (source.a === a && source.b === b) {
      dispatch({ type: Actions.PLAYER_UNSELECT_SOURCE });
      return;
    }

    // if user one of his own pabel, and he didn't kill in previous turn then select other coin
    if (value === currentPlayer) {
      if (!state.hasKilledThisTurn) {
        dispatch({ type: Actions.PLAYER_SELECT_SOURCE, payload: { a, b } });
      }
      return;
    }

    if (value !== 0) return;

    const moves = coordinatesPossibleMoves[sourceKey] || { oneStep: [], jump: [] };

    if (!state.hasKilledThisTurn) {
      const isSingleStep = moves.oneStep.some(([da, db]) => (source.a + da) === a && (source.b + db) === b);
      if (isSingleStep) {
        dispatch({ type: Actions.PLAYER_SELECT_DESTINATION, payload: { a, b } });
        dispatch({ type: Actions.NEXT_PLAYER_TURN });
        return;
      }
    }

    const isJump = moves.jump.some(([da, db]) => (source.a + da) === a && (source.b + db) === b);
    if (isJump) {
      let midA = (source.a + a) / 2;
      let midB = (source.b + b) / 2;
      if ((source.a === 2 && source.b === 2) || (a === 2 && b === 2)) {
        if (source.a === 2 && source.b === 2 && a === 0) {
          midA = 1;
          midB = b;
        } else if (a === 2 && b === 2 && source.a === 0) {
          midA = 1;
          midB = source.b;
        }
      } else if ((source.a === 6 && source.b === 2) || (a === 6 && b === 2)) {
        if (source.a === 6 && source.b === 2 && a === 8) {
          midA = 7;
          midB = b;
        } else if (a === 6 && b === 2 && source.a === 8) {
          midA = 7;
          midB = source.b;
        }
      }

      if (state.matrix[midA][midB] === opponent) {
        dispatch({ type: Actions.PLAYER_KILL_PABEL, payload: { a: midA, b: midB } });
        dispatch({ type: Actions.PLAYER_SELECT_DESTINATION, payload: { a, b } });
      }
    }
  };

  return (
    <div className={styles.gameContainer}>
      <div ref={containerRef} style={{ width: '100%', }}>
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
              renderPlayers(squareCordinates, handlePlayerClick, state)
            }
          </Layer>
        </Stage>
        <div className={styles.passContainer}>
          <button disabled={!state.hasKilledThisTurn} className={styles.passButton} onClick={() => dispatch({ type: Actions.NEXT_PLAYER_TURN })}>Pass Turn</button>
        </div>
      </div>
    </div>
  )
}

const renderPlayers = (coordinates: Array<any>, clickHandler: any, state: IDefaultValues) => {

  return coordinates.map((coordinate) => {
    const { x, y, r = 30, a = 0, b = 0 } = coordinate;
    const cellValue = state.matrix[a][b];
    let dice = null;
    let color = "black";
    if (cellValue > 0) {
      let radius = 10;
      if (state.sourceCoordinates?.a === a && state.sourceCoordinates?.b === b) {
        radius = 12;
        console.log(radius);
      }
      console.log(radius);
      const isCurrentPlayerPabelsActive = state.currentPlayer === cellValue;
      dice = (
        <PlayerPositionRender
          xAxis={x}
          yAxis={y}
          radius={radius}
          player={players[cellValue - 1]}
          isCurrentPlayerPabelsActive={isCurrentPlayerPabelsActive}
        />
      )
    }
    return (
      <Group key={`${a}-${b}`} onClick={() => clickHandler(a, b)} onTouchEnd={() => clickHandler(a, b)}>
        <Circle x={x} y={y} radius={r} fill="transparent" />
        <Circle x={x} y={y} radius={1} fill={color} stroke={color} />
        {/* <Text x={x} y={y} text={`${a}_${b}`} fontSize={15} fill="green"/> */}
        {dice}
      </Group>
    );
  });

}