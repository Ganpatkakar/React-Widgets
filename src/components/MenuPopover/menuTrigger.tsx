import React, { useContext } from 'react';
import { ActionTypes, MenuContext, MenuDispatchContext } from './context/menu.context';

interface IMenuTrigger {
  children: any;
}

export function MenuTrigger(props: IMenuTrigger) {
  const state = useContext(MenuContext);
  const dispatch = useContext(MenuDispatchContext);

  const handleMenuTrigger = (event: any) => {
    event.preventDefault();
    dispatch(
      {
        type: ActionTypes.HandlePopOver,
        payload: !state.open
      }
    )
  }

  return (
    <div onClick={handleMenuTrigger}>{props.children}</div>
  )
}