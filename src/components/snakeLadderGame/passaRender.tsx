import React, { useState } from 'react';
import { Button } from '../Button';
import { Actions, SnakeLadderContext, SnakeLadderDispatcher } from './snakeLadderGameContext';

export const maxPassaSides = 6;

export default function PassaRender() {
  const [isPassaActive, setIsPassaActive] = useState(true);
  const dispatch = React.useContext(SnakeLadderDispatcher);
  const state = React.useContext(SnakeLadderContext);

  const animateTillNextVal = React.useCallback((randomPassaValue, curr) => {
    if (curr > randomPassaValue) {
      requestAnimationFrame(() => {
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
      });

      return;
    }

    const timer = setTimeout(() => {
      requestAnimationFrame(() => {
        dispatch(
          {
            type: Actions.UpdateScore,
            payload: state.players[state.currentPlayer].score + 1
          }
        )
        clearTimeout(timer);
        animateTillNextVal(randomPassaValue, ++curr);
      })
    }, 200);
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

    if (state.players[state.currentPlayer].score + randomPassaValue <= 35) {
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
