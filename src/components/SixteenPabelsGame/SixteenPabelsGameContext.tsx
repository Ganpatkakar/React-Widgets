export enum Actions {
  NEXT_PLAYER_TURN = "NEXT_PLAYER_TURN",
  PLAYER_SELECT_SOURCE = "PLAYER_SELECT_SOURCE",
  PLAYER_SELECT_DESTINATION = "PLAYER_SELECT_DESTINATION",
  PLAYER_UNSELECT_SOURCE = "PLAYER_UNSELECT_SOURCE",
  PLAYER_KILL_PABEL = "PLAYER_KILL_PABEL"
}

export interface IPlayer {
  playerName: string;
  color: string;
}

export interface IDefaultValues {
  currentPlayer: number;
  matrix: Array<Array<number>>;
  sourceCoordinates: { a: number, b: number } | null;
  destinationCordinates: { a: number, b: number } | null;
  hasKilledThisTurn: boolean;
}

export const sixteenPabelsGameReducer = (state: IDefaultValues, { type, payload = null }: { type: Actions, payload?: any }) => {

  // Next player turn, once destination is selected
  if (type === Actions.NEXT_PLAYER_TURN) {
    return {
      ...state,
      currentPlayer: state.currentPlayer === 1 ? 2 : 1,
      hasKilledThisTurn: false,
    }
  }

  // expected payload data source cordinates {a, b}
  if (type === Actions.PLAYER_SELECT_SOURCE) {
    return {
      ...state,
      sourceCoordinates: payload,
    }
  }

  if (type == Actions.PLAYER_UNSELECT_SOURCE) {
    return {
      ...state,
      sourceCoordinates: null,
    }
  }

  // expected payload data destinate cordinates {a, b}
  if (type === Actions.PLAYER_SELECT_DESTINATION) {
    if (!state.sourceCoordinates) return state;

    const { a: prevA, b: prevB } = state.sourceCoordinates;
    const { a, b } = payload;
    const newMatrix = state.matrix.map(row => [...row]);
    
    newMatrix[a][b] = state.matrix[prevA][prevB];
    newMatrix[prevA][prevB] = 0;

    return {
      ...state,
      sourceCoordinates: null, // Clear selection after move
      matrix: newMatrix,
    }
  }

  if (type === Actions.PLAYER_KILL_PABEL) {
    const matrix = state.matrix.map(row => [...row]);
    matrix[payload.a][payload.b] = 0;
    return {
      ...state,
      matrix,
      hasKilledThisTurn: true,
    }
  }


  return { ...state };
}

export const topTrianlgeCircles = (width: number, height: number) => [
  // row 1
  {
    x: 0,
    y: 0,
    r: 20,
    a: 0,
    b: 1
  },
  {
    x: width / 2,
    y: 0,
    r: 20,
    a: 0,
    b: 2
  },
  {
    x: width,
    y: 0,
    r: 20,
    a: 0,
    b: 3
  },
  // row 2
  {
    x: width / 4,
    y: height / 2,
    r: 20,
    a: 1,
    b: 1
  },
  {
    x: width / 2,
    y: height / 2,
    r: 20,
    a: 1,
    b: 2
  },
  {
    x: width - width / 4,
    y: height / 2,
    r: 20,
    a: 1,
    b: 3
  },
]

export const squareCircles = (width: number, height: number) => [
  // row 1
  {
    x: 0,
    y: 0,
    r: 20,
    a: 2,
    b: 0
  },
  {
    x: width / 4,
    y: 0,
    r: 20,
    a: 2,
    b: 1
  },
  {
    x: width / 2,
    y: 0,
    r: 20,
    a: 2,
    b: 2
  },
  {
    x: width - width / 4,
    y: 0,
    r: 20,
    a: 2,
    b: 3
  },
  {
    x: width,
    y: 0,
    r: 20,
    a: 2,
    b: 4
  },
  // row 2
  {
    x: 0,
    y: height / 4,
    r: 20,
    a: 3,
    b: 0
  },
  {
    x: width / 4,
    y: height / 4,
    r: 20,
    a: 3,
    b: 1
  },
  {
    x: width / 2,
    y: height / 4,
    r: 20,
    a: 3,
    b: 2
  },
  {
    x: width - width / 4,
    y: height / 4,
    r: 20,
    a: 3,
    b: 3
  },
  {
    x: width,
    y: height / 4,
    r: 20,
    a: 3,
    b: 4
  },
  // row 3
  {
    x: 0,
    y: height / 2,
    r: 20,
    a: 4,
    b: 0
  },
  {
    x: width / 4,
    y: height / 2,
    r: 20,
    a: 4,
    b: 1
  },
  {
    x: width / 2,
    y: height / 2,
    r: 20,
    a: 4,
    b: 2
  },
  {
    x: width - width / 4,
    y: height / 2,
    r: 20,
    a: 4,
    b: 3
  },
  {
    x: width,
    y: height / 2,
    r: 20,
    a: 4,
    b: 4
  },
  // row 4
  {
    x: 0,
    y: height - height / 4,
    r: 20,
    a: 5,
    b: 0
  },
  {
    x: width / 4,
    y: height - height / 4,
    r: 20,
    a: 5,
    b: 1
  },
  {
    x: width / 2,
    y: height - height / 4,
    r: 20,
    a: 5,
    b: 2
  },
  {
    x: width - width / 4,
    y: height - height / 4,
    r: 20,
    a: 5,
    b: 3
  },
  {
    x: width,
    y: height - height / 4,
    r: 20,
    a: 5,
    b: 4
  },
  // row 5
  {
    x: 0,
    y: height,
    r: 20,
    a: 6,
    b: 0
  },
  {
    x: width / 4,
    y: height,
    r: 20,
    a: 6,
    b: 1
  },
  {
    x: width / 2,
    y: height,
    r: 20,
    a: 6,
    b: 2
  },
  {
    x: width - width / 4,
    y: height,
    r: 20,
    a: 6,
    b: 3
  },
  {
    x: width,
    y: height,
    r: 20,
    a: 6,
    b: 4
  },
]

export const bottomTrianlgeCircles = (width: number, height: number) => [
  // row 1
  {
    x: width / 4,
    y: height / 2,
    r: 20,
    a: 7,
    b: 1
  },
  {
    x: width / 2,
    y: height / 2,
    r: 20,
    a: 7,
    b: 2
  },
  {
    x: width - width / 4,
    y: height / 2,
    r: 20,
    a: 7,
    b: 3
  },
  // row 2
  {
    x: 0,
    y: height,
    r: 20,
    a: 8,
    b: 1
  },
  {
    x: width / 2,
    y: height,
    r: 20,
    a: 8,
    b: 2
  },
  {
    x: width,
    y: height,
    r: 20,
    a: 8,
    b: 3
  },
]