import React, { useReducer } from 'react';
import { SnakeLadderGrid } from './snakeLadderGrid';
import { SnakeLadderRender } from './snakeLadderRender';
import { SnakeRender } from './snakeRender';
import { PlayerPositionRender } from './playerPositionRender';
import { Layer, Stage } from 'react-konva';
import PassaRender from './passaRender';
import { SnakeLadderContext, SnakeLadderDispatcher, SnakeLadderReducer, initialValues } from './snakeLadderGameContext';

const maxGridLayers = 10;

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

  const [state, dispatch] = useReducer(SnakeLadderReducer, initialValues);

  return (
    <SnakeLadderContext.Provider value={state}>
      <SnakeLadderDispatcher.Provider value={dispatch}>
        <div>Active player: {state.players[state.currentPlayer].name}</div>
        <PassaRender />

        <div>Players Score:
          {state.players.map((player) => {
            return <span key={player.name}>{player.name}: {player.score}</span>
          })
        }
        </div>

        <Stage width={width} height={height}>
          <Layer>
            <SnakeLadderContext.Provider value={state}>
              <SnakeLadderGrid />
              {/* <PlayerPositionRender /> */}
            </SnakeLadderContext.Provider>
          </Layer>
          <Layer>
            <SnakeLadderContext.Provider value={state}>
              <PlayerPositionRender />
            </SnakeLadderContext.Provider>
          </Layer>
          {/* <Layer>
            <SnakeLadderRender />
          </Layer> */}
          <Layer>
            <SnakeLadderContext.Provider value={state}>
              <SnakeRender />
            </SnakeLadderContext.Provider>
          </Layer>
        </Stage>
      </SnakeLadderDispatcher.Provider>
    </SnakeLadderContext.Provider>
  )
}


SnakeLadderGame.defaultProps = defaultProps;