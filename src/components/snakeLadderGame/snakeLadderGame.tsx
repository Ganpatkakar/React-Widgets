import React, { useReducer } from 'react';
import { SnakeLadderGrid } from './snakeLadderGrid';
import { SnakeLadderRender } from './snakeLadderRender';
import { SnakeRender } from './snakeRender';
import { PlayerPositionRender } from './playerPositionRender';
import { Layer, Stage } from 'react-konva';
import PassaRender from './passaRender';
import { ILadder, ISnake, SnakeLadderContext, SnakeLadderDispatcher, SnakeLadderReducer, initialValues, maxGridLayers } from './snakeLadderGameContext';

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

  initialValues.scoreWithGrid = React.useMemo(() => {
    const rectWidth = width / maxGridLayers;
    const rectHeight = width / maxGridLayers;

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
  }, [width, height]);

  initialValues.snakesMouthScoreMap = React.useMemo(() => {
    const map: Map<number, number> = new Map();
    initialValues.snakes.forEach(({mouthScore, tailScore}: ISnake) => {
      map.set(mouthScore, tailScore);
    });

    return map;
  }, [width, height]);


  initialValues.laddersMap = React.useMemo(() => {
    const map: Map<number, number> = new Map();
    initialValues.ladders.forEach(({startScore, endScore}: ILadder) => {
      map.set(startScore, endScore);
    });

    return map;
  }, [width, height]);

  const [state, dispatch] = useReducer(SnakeLadderReducer, initialValues);

  return (
    <SnakeLadderContext.Provider value={state}>
      <SnakeLadderDispatcher.Provider value={dispatch}>
        <div>Active player: {state.players[state.currentPlayer].name}</div>
        <PassaRender />

        <div>Players Score:
          {state.players.map((player) => {
            return <div key={player.name}>{player.name}: {player.score}</div>
          })
        }
        </div>

        <Stage width={width} height={height}>
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
      </SnakeLadderDispatcher.Provider>
    </SnakeLadderContext.Provider>
  )
}


SnakeLadderGame.defaultProps = defaultProps;