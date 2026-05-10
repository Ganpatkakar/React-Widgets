import React, { useReducer, useRef, useEffect, useState } from 'react';
import { Shape, Stage, Layer, Circle, Line } from 'react-konva';
import { PlayerPositionRender } from './playerPositionRender';
import styles from './naarBakaldiGame.scss';
import { calculateCircleCordinates, IDefaultValues, naarBakaldiGameReducer, Actions } from './naarBakaldiGameContext';

const players = [
  {
    playerName: "GK",
    color: "rgb(0, 255, 0)",
    coins: [0, 0, 0]
  },
  {
    playerName: "NK",
    color: "rgb(255, 0, 0)",
    coins: [0, 0, 0]
  }
];

const gameMatrix = [
  [0, 0, 0,],
  [0, 0, 0,],
  [0, 0, 0,],
  [0, 0, 0,],
];

export function NaarBakaldiGame() {
  const [dimensions, setDimensions] = useState({ width: 500, height: 500 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        const height = containerRef.current.clientHeight;
        const minLen = Math.min(width, height, 500)
        setDimensions({ width: minLen, height: minLen }); // Assuming square aspect ratio
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

  const initialValues: IDefaultValues = {
    playerCoins: [[0, 0, 0], [0, 0, 0]],
    currentPlayer: 0,
    matrix: gameMatrix,
    selectedCoin: null,
    sourceCoordinates: null,
    destinationCordinates: null
  }
  const [state, dispatch] = useReducer(naarBakaldiGameReducer, initialValues);

  const { width, height } = dimensions;

  const circleCordinates = calculateCircleCordinates(width, height);

  // Event handler
  const handleGameBoardClick = (a: number, b: number) => {
    console.log("handleGameBoardClick", a, b);
    const { selectedCoin, sourceCoordinates, currentPlayer } = state;
    const targetCell = gameMatrix[a][b];

    // Other players coins should not be selectable
    if (targetCell !== 0 && currentPlayer !== targetCell - 1) {
      return;
    }

    // 1. DESELECT: If clicking the already selected source, unselect it.
    if (sourceCoordinates && sourceCoordinates.a === a && sourceCoordinates.b === b) {
      dispatch({ type: Actions.PLAYER_UNSELECT_SOURCE });
      return;
    }

    // 2. SELECT SOURCE: If nothing is selected, pick up a coin.
    if (selectedCoin === null && sourceCoordinates === null) {
      // Only select if there is actually a coin at that position
      if (targetCell !== 0) {
        dispatch({ type: Actions.PLAYER_SELECT_SOURCE, payload: { a, b } });
      }
      return;
    }

    // 3. CHANGE SELECTION: If clicking another of YOUR coins, switch selection instead of moving.
    // (Assuming gameMatrix stores player IDs like "1" or "2")
    if (targetCell !== 0 && targetCell === currentPlayer) {
      dispatch({ type: Actions.PLAYER_SELECT_SOURCE, payload: { a, b } });
      return;
    }

    // 4. Move to source in case sourceCoordinates are not present but selectedCoinIsPresent
    if (!sourceCoordinates && selectedCoin !== null) {
      if (targetCell === 0) {
        dispatch({ type: Actions.PLAYER_SELECT_DESTINATION, payload: { a, b } });
        dispatch({ type: Actions.NEXT_PLAYER_TURN });
      }
      return;
    }

    // 5. VALIDATE MOVE: Logic for destination
    const { a: prevA, b: prevB } = sourceCoordinates;
    const rowDiff = Math.abs(a - prevA);
    const colDiff = Math.abs(b - prevB);

    // Rule: Must not be the same spot (already handled) and must be empty
    if (targetCell !== 0) return;

    // Rule: Movement constraints
    const isHorizontalOrVertical = (rowDiff === 0 || colDiff === 0);
    const isSpecialDiagonal = (a === 0 && b === 1) || (prevA === 0 && prevB === 1); // As per your specific requirement

    if (!isHorizontalOrVertical && !isSpecialDiagonal) {
      return; // Invalid direction
    }

    // Rule: Jumping over coins (if distance > 1)
    if (rowDiff > 2 || colDiff > 2) {
      return; // Can't jump more than 2 spaces
    }

    const involvesApex = (a === 0 && b === 1) || (prevA === 0 && prevB === 1);

    if (involvesApex) {
      // 1. APEX JUMP (Kill Scenario)
      // Moving from (2, x) to (0, 1) or (0, 1) to (2, x)
      if (rowDiff === 2) {
        // The midpoint is always on row 1, and the column depends on the destination/source column
        const midA = 1;
        const midB = (a === 0) ? prevB : b; // The column of the non-apex point

        const midCell = gameMatrix[midA][midB];

        // Check if middle cell has an opponent's coin
        if (midCell !== 0 && midCell - 1 !== currentPlayer) {
          dispatch({ type: Actions.PLAYER_SELECT_DESTINATION, payload: { a, b } });
          dispatch({ type: Actions.PLAYER_KILL_COIN, payload: { a: midA, b: midB } });
          dispatch({ type: Actions.NEXT_PLAYER_TURN });
          return;
        }
        return; // Move invalid if no opponent coin to jump
      }

      // 2. APEX NORMAL MOVE (Distance 1)
      // Moving from (1, x) to (0, 1) or (0, 1) to (1, x)
      if (rowDiff === 1) {
        dispatch({ type: Actions.PLAYER_SELECT_DESTINATION, payload: { a, b } });
        dispatch({ type: Actions.NEXT_PLAYER_TURN });
        return;
      }
    }

    // Kill scenario
    if (rowDiff > 1 || colDiff > 1) {
      const midA = (a + prevA) / 2;
      const midB = (b + prevB) / 2;

      // Check if middle cell exists and has an opponent's coin
      const midCell = gameMatrix[midA][midB];
      if (midCell === 0 || midCell - 1 === currentPlayer) {
        return; // Can't move more than 1 space unless jumping an opponent
      }
      dispatch({ type: Actions.PLAYER_KILL_COIN, payload: { a: midA, b: midB } });
    }

    // 5. FINAL EXECUTE FOR REMAINING NORMAL MOVES (Horizontal/Vertical distance 1)
    dispatch({ type: Actions.PLAYER_SELECT_DESTINATION, payload: { a, b } });
    dispatch({ type: Actions.NEXT_PLAYER_TURN });

    // handle unselection as well, since this a transaction process so one time we select source and then we select destination
    // but what if we want to remove current selection and move another coin

    // Validate move
    // If already a coin present there
    // if the move is only horizontal or vertical and not diagonal
    // Diagonal is only allowed in case of a == 0 and b == 1
    // if the difference between source and destination is more then 1 then check if there is a different players coin exists in between

    // if (state.selectedCoin === null && gameMatrix[a][b] !== "0") {
    //   return;
    // }

    // if (state.selectedCoin === null) {
    //   dispatch({
    //     type: "PLAYER_SELECT_SOURCE",
    //     payload: { a, b }
    //   });
    //   return;
    // }

    // const {a:prevA, b: prevB} = state.sourceCoordinates;
    // if (a == prevA && b == prevB) {
    //   dispatch({
    //     type: "PLAYER_UNSELECT_SOURCE",
    //     payload: null
    //   });
    //   return;
    // }

    // if (!(a == prevA || b == prevB)) {
    //   if (a == 1 && b == 1) {
    //     // handle move
    //     dispatch({
    //       type: "PLAYER_SELECT_DESTINATION",
    //       payload: { a, b }
    //     });
    //     dispatch({
    //       type: "NEXT_PLAYER_TURN",
    //       payload: null
    //     });
    //     return;
    //   } else {
    //     return;
    //   }
    // }

    // dispatch({
    //   type: "PLAYER_SELECT_DESTINATION",
    //   payload: { a, b }
    // });
    // dispatch({
    //   type: "NEXT_PLAYER_TURN",
    //   payload: null
    // });
  }

  // Event handler
  const handleCoinSelection = (isCurrentCoinProcessed: boolean, playerIndex: number, coinIndex: number) => {
    if (isCurrentCoinProcessed || playerIndex !== state.currentPlayer) {
      return;
    }
    console.log("coin selected", playerIndex, coinIndex)

    dispatch({
      type: Actions.PLAYER_SELECT_COIN,
      payload: coinIndex
    });
  }

  return (
    <div className={styles.gameContainer}>
      <div ref={containerRef} style={{ width: '100%',}}>
        <Stage width={width} height={height}>
          <Layer>
            <Shape
              sceneFunc={(ctx, shape) => {
                ctx.beginPath();

                // Triange shape
                ctx.moveTo(width / 2, 0);
                ctx.lineTo(0, height);
                ctx.lineTo(width, height);
                ctx.lineTo(width / 2, 0);

                // First line in triangle from top "height / 3"
                ctx.moveTo(width / 3, height / 3);
                ctx.lineTo(width - width / 3, height / 3);

                // Second line in triangle from top "height - height / 3"
                ctx.moveTo(width / 6, height - height / 3);
                ctx.lineTo(width - width / 6, height - height / 3);

                ctx.moveTo(width / 2, 0);
                ctx.lineTo(width / 2, height);
                ctx.closePath();
                ctx.fillStrokeShape(shape);
              }}
              stroke="black"
              strokeWidth={1}
            />
            {
              circleCordinates.map((cordinate, index) => {
                const { x, y, r = 30, a = 0, b = 0 } = cordinate;
                let dice = null;
                if (gameMatrix[a][b] !== 0) {
                  const player = gameMatrix[a][b];
                  let isCoinSelected = false;
                  if (state.sourceCoordinates !== null) {
                    isCoinSelected = state.sourceCoordinates.a === a && state.sourceCoordinates.b === b;
                  }
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
                  <div onClick={() => handleGameBoardClick(a, b)} onTouchEnd={() => handleGameBoardClick(a, b)} key={index}>
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

      <div className={styles.playersContainer}>
        {players.map((player, playerIndex) => {
          const isCurrentPlayer = playerIndex === state.currentPlayer;
          return (
            <div
              key={player.playerName}
              className={styles.playerContainer}
              style={{
                "borderColor": isCurrentPlayer ? "blue" : "#ddd",
                "borderWidth": isCurrentPlayer ? "2px" : "1px"
              }}
            >
              <div key={player.playerName}>
                {player.playerName}
              </div>
              <div className={styles.playerCoinsContainer}>
                {player.coins.map((coin, coinIndex) => {
                  const isCurrentCoinSelected = state.selectedCoin === coinIndex;
                  const isCurrentCoinProcessed = state.playerCoins[playerIndex][coinIndex] === 1;
                  return (
                    <div className={styles.playerCoin} key={`${player.playerName}_${coinIndex}`} onClick={() => handleCoinSelection(isCurrentCoinProcessed, playerIndex, coinIndex)} onTouchEnd={() => handleCoinSelection(isCurrentCoinProcessed, playerIndex, coinIndex)}>
                      <Stage width={40} height={40}>
                        <Layer>
                          <PlayerPositionRender
                            xAxis={20}
                            yAxis={25}
                            radius={isCurrentPlayer && isCurrentCoinSelected ? 15 : 10}
                            player={player}
                          />
                          {isCurrentCoinProcessed && (
                            <>
                              <Line points={[0, 0, 40, 40]} stroke={"red"} strokeWidth={2} />
                              <Line points={[40, 0, 0, 40]} stroke={"red"} strokeWidth={2} />
                            </>
                          )}
                        </Layer>
                      </Stage>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}
