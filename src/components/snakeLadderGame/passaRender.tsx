import React, { useState } from 'react';
import { Button } from '../Button';
import { Actions, SnakeLadderContext, SnakeLadderDispatcher, maxGridLayers } from './snakeLadderGameContext';

export const maxPassaSides = 6;

export default function PassaRender() {
  const [isPassaActive, setIsPassaActive] = useState(true);
  const dispatch = React.useContext(SnakeLadderDispatcher);
  const state = React.useContext(SnakeLadderContext);
  const {players, currentPlayer} = state;

  const resetNextPlayerSettings = React.useCallback(() => {
    dispatch({
      type: Actions.NextPlayerTurn,
      payload: null
    })
    dispatch(
      {
        type: Actions.PassaAction,
        payload: null
      }
    )
    setIsPassaActive(true);
  }, []);

  const animateTillNextVal = React.useCallback((randomPassaValue, curr) => {
    if (curr >= randomPassaValue) {

      requestAnimationFrame(() => {
        const currentPlayerScore = players[currentPlayer].score;
        //console.log(currentPlayer, randomPassaValue, currentPlayerScore);
        if (state.snakesMouthScoreMap.has(currentPlayerScore)) {
          //console.log(state.snakesMouthScoreMap);
          setTimeout(() => {
            dispatch(
              {
                type: Actions.UpdateScore,
                payload: state.snakesMouthScoreMap.get(currentPlayerScore)
              }
            )
            resetNextPlayerSettings();
          }, 300);

          return;
        }
        
        //console.log(currentPlayer, randomPassaValue, currentPlayerScore);
        if (state.laddersMap.has(currentPlayerScore)) {
          //console.log(state.snakesMouthScoreMap);
          setTimeout(() => {
            dispatch(
              {
                type: Actions.UpdateScore,
                payload: state.laddersMap.get(currentPlayerScore)
              }
            )
            resetNextPlayerSettings()
          }, 300);
          return;
        }

        resetNextPlayerSettings();
      });

      return;
    }

    const timer = setTimeout(() => {
      requestAnimationFrame(() => {
        dispatch(
          {
            type: Actions.UpdateScore,
            payload: players[currentPlayer].score + 1
          }
        )
        clearTimeout(timer);
        animateTillNextVal(randomPassaValue, ++curr);
      })
    }, 300);
  }, [state.currentPlayer]);


  const handlePassa = React.useCallback((event: any) => {
    event.preventDefault();
    if (!isPassaActive) {
      return;
    }

    setIsPassaActive(false);
    const randomPassaValue = Math.ceil(Math.random() * maxPassaSides);
    dispatch(
      {
        type: Actions.PassaAction,
        payload: randomPassaValue
      }
    )

    if (state.players[state.currentPlayer].score + randomPassaValue <= (maxGridLayers * maxGridLayers)) {
      animateTillNextVal(randomPassaValue, 0);
    } else {
      const timer = setTimeout(() => {
        dispatch({
          type: Actions.NextPlayerTurn,
          payload: null
        })
        dispatch(
          {
            type: Actions.PassaAction,
            payload: null
          }
        )
        setIsPassaActive(true);
        clearTimeout(timer);
      }, 1000);
    }

  }, [state.currentPlayer]);

  return (
    <>
      <Button label="Passa" onClick={handlePassa} disabled={!isPassaActive} />
      <span>{state.passaValue || null}</span>
    </>
  )
}
