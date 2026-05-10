import React, { useEffect, useReducer, useRef, useState } from 'react';
import { SnakeLadderGrid } from './snakeLadderGrid';
import { SnakeLadderRender } from './snakeLadderRender';
import { SnakeRender } from './snakeRender';
import { PlayerPositionRender } from './playerPositionRender';
import { Layer, Stage } from 'react-konva';
import PassaRender from './passaRender';
import { ILadder, ISnake, SnakeLadderContext, SnakeLadderDispatcher, SnakeLadderReducer, initialValues, maxGridLayers } from './snakeLadderGameContext';
import styles from "./snakeLadderGame.scss";
import { IoMdInformationCircleOutline } from 'react-icons/io'

interface ISnakeLadderGame {
  width?: number;
  height?: number;
}

type DefaultProps = Partial<ISnakeLadderGame>;

const defaultProps: DefaultProps = {
  width: 500,
  height: 500
}

export function SnakeLadderGame({ width, height }: ISnakeLadderGame) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [stageSize, setStageSize] = useState({
    width: width ?? defaultProps.width!,
    height: width ?? defaultProps.height!
  });

  useEffect(() => {
    const updateSize = () => {
      const containerWidth = containerRef.current?.getBoundingClientRect().width;
      const containerHeight = containerRef.current?.getBoundingClientRect().height;
      if (!containerWidth || !containerHeight) {
        return;
      }
      const size = Math.min(Math.floor(containerWidth), Math.floor(containerHeight));
      setStageSize({ width: size, height: size });
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [width]);

  initialValues.scoreWithGrid = React.useMemo(() => {
    const rectWidth = stageSize.width / maxGridLayers;
    const rectHeight = stageSize.width / maxGridLayers;

    const scorePointsWithGridPosition = {};
    for (let i = 0; i < maxGridLayers; i++) {
      const yAxis = rectHeight * i;
      let oddVal = maxGridLayers - 1;
      for (let j = 0; j < maxGridLayers; j++) {
        const xAxis = rectWidth * j;
        let key;
        if (i % 2 !== 0) {
          key = maxGridLayers * maxGridLayers - (maxGridLayers * i) - oddVal;
          oddVal--;
        } else {
          key = maxGridLayers * maxGridLayers - (maxGridLayers * i + j);
        }
        scorePointsWithGridPosition[key] = [xAxis, yAxis, rectWidth, rectHeight];
      }
    }

    return scorePointsWithGridPosition;
  }, [stageSize.width]);

  initialValues.snakesMouthScoreMap = React.useMemo(() => {
    const map: Map<number, number> = new Map();
    initialValues.snakes.forEach(({ mouthScore, tailScore }: ISnake) => {
      map.set(mouthScore, tailScore);
    });

    return map;
  }, [width, height]);


  initialValues.laddersMap = React.useMemo(() => {
    const map: Map<number, number> = new Map();
    initialValues.ladders.forEach(({ startScore, endScore }: ILadder) => {
      map.set(startScore, endScore);
    });

    return map;
  }, [width, height]);

  const [state, dispatch] = useReducer(SnakeLadderReducer, initialValues);

  return (
    <div className={styles.snakeLadderGameContainer}>
      <SnakeLadderContext.Provider value={state}>
        <SnakeLadderDispatcher.Provider value={dispatch}>
          <div className={styles.snakeLadderGameStage} ref={containerRef}>
            <Stage width={stageSize.width} height={stageSize.height}>
              <Layer>
              <SnakeLadderContext.Provider value={state}>
                <SnakeLadderGrid />
                <SnakeRender />
                <SnakeLadderRender />
              </SnakeLadderContext.Provider>
            </Layer>
            <Layer>
              <SnakeLadderContext.Provider value={state}>
                <PlayerPositionRender />
              </SnakeLadderContext.Provider>
            </Layer>
          </Stage>
          </div>

          <div className={styles.snakeLadderGameControls}>
            <div className={styles.activePlayer}>
              <h3>Next player's turn: {' '}
                <span
                  className={styles.activePlayerName}
                  style={{ 'color': state.players[state.currentPlayer].color }}
                  data-color={state.players[state.currentPlayer].color}
                >
                  {state.players[state.currentPlayer].name}
                </span>
              </h3>
            </div>
            <div>
              <PassaRender />
              <p className={styles.instructions}>
                <span>
                  <IoMdInformationCircleOutline color='green' fontSize={16}/>
                </span>

                <span>Click on the dice to roll it</span></p>
            </div>

            <div className={styles.playerScores}>
              Players Score:
              {state.players.map((player) => {
                return <div key={player.name}>{player.name}: {player.score}</div>
              })
              }
            </div>
          </div>
        </SnakeLadderDispatcher.Provider>
      </SnakeLadderContext.Provider>
    </div>
  )
}


SnakeLadderGame.defaultProps = defaultProps;
