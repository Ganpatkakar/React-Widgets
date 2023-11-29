import React, { useEffect, useReducer } from 'react';
import { IMenuProvider, IMenuState } from '../@types.menu';

export const MenuContext = React.createContext<IMenuState | null>(null);
export const MenuDispatchContext = React.createContext<any | null>(null);

export const ActionTypes = {
  HandlePopOver: 'HandlePopOver',
  PositionChange: 'PositionChange'
}

export const MenuProvider = (props: IMenuProvider) => {
  const {open, currentRef} = props;
  const [state, dispatchState] = useReducer(menuReducer, {open, currentRef: currentRef});

  useEffect(() => {
    if (currentRef.current) {
      dispatchState(
        {
          type: ActionTypes.PositionChange,
          payload: currentRef.current
        }
      )
    }
  }, []);

  return (
    <MenuContext.Provider value={state}>
      <MenuDispatchContext.Provider value={ dispatchState }>
        {props.children}
      </MenuDispatchContext.Provider>
    </MenuContext.Provider>
  )
}

function menuReducer (state: IMenuState, {type, payload}) {
  if (type === ActionTypes.HandlePopOver) {
    return {...state, open: payload}
  }
  if (type === ActionTypes.PositionChange) {
    return {...state, position: payload}
  }
  return {...state};
}