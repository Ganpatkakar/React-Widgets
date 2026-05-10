export enum Actions {
  PLAYER_SELECT_COIN = "PLAYER_SELECT_COIN",
  NEXT_PLAYER_TURN = "NEXT_PLAYER_TURN",
  PLAYER_SELECT_SOURCE = "PLAYER_SELECT_SOURCE",
  PLAYER_SELECT_DESTINATION = "PLAYER_SELECT_DESTINATION",
  PLAYER_UNSELECT_SOURCE = "PLAYER_UNSELECT_SOURCE",
  PLAYER_KILL_COIN = "PLAYER_KILL_COIN"
}

export interface IPlayer {
  playerName: string;
  coins: number[];
  color: string;
}

// state data
// player coins => [[0, 0, 0], [0, 0, 0]]
// current player => index
// matrix => Array<Array<numbers>>
// selected coin => index
// if player no select from the players data and select an existing coin then
// source cordinates of matrix => {a, b}

export interface IDefaultValues {
  playerCoins: Array<Array<number>>;
  currentPlayer: number;
  matrix: Array<Array<number>>;
  selectedCoin: number | null;
  sourceCoordinates: { a: number, b: number } | null;
  destinationCordinates: { a: number, b: number } | null;
}

export const naarBakaldiGameReducer = (state: IDefaultValues, { type, payload = null }: { type: Actions, payload?: any }) => {

  // Player selects coin from the arsenal
  if (type === Actions.PLAYER_SELECT_COIN) {
    return {
      ...state,
      selectedCoin: payload,
      sourceCoordinates: null,
    }
  }

  // Next player turn, once destination is selected
  if (type === Actions.NEXT_PLAYER_TURN) {
    return {
      ...state,
      currentPlayer: state.currentPlayer + 1 >= state.playerCoins.length ? 0 : state.currentPlayer + 1,
      selectedCoin: null,
    }
  }

  // expected payload data source cordinates {a, b}
  if (type === Actions.PLAYER_SELECT_SOURCE) {
    return {
      ...state,
      sourceCoordinates: payload,
      selectedCoin: null,
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
    if (state.sourceCoordinates === null) {
      const matrix = [...state.matrix];
      matrix[payload.a][payload.b] = state.currentPlayer + 1;

      let playerCoins = [...state.playerCoins]
      playerCoins[state.currentPlayer][state.selectedCoin!] = 1;

      return {
        ...state,
        selectedCoin: null,
        matrix: [...matrix],
      }
    } else {
      const { a: prevA, b: prevB } = state.sourceCoordinates;
      const { a, b } = payload;
      const matrix = [...state.matrix];
      matrix[a][b] = state.currentPlayer + 1;
      matrix[prevA][prevB] = 0;

      return {
        ...state,
        sourceCoordinates: null,
        matrix: [...matrix],
      }
    }
  }

  if (type === Actions.PLAYER_KILL_COIN) {
    const matrix = [...state.matrix];
    matrix[payload.a][payload.b] = 0;
    return {
      ...state,
      matrix: [...matrix],
    }
  }


  return { ...state };
}

export const calculateCircleCordinates = (width: number, height: number) => [
  {
    x: width / 2,
    y: 0,
    r: 30,
    a: 0,
    b: 1
  },
  {
    x: width / 3,
    y: height / 3,
    r: 25,
    a: 1,
    b: 0
  },
  {
    x: width - width / 3,
    y: height / 3,
    r: 25,
    a: 1,
    b: 2
  },
  {
    x: width / 6,
    y: height - height / 3,
    r: 30,
    a: 2,
    b: 0
  },
  {
    x: width - width / 6,
    y: height - height / 3,
    r: 30,
    a: 2,
    b: 2
  },
  {
    x: width / 2,
    y: height,
    r: 30,
    a: 3,
    b: 1
  },
  {
    x: 0,
    y: height,
    r: 40,
    a: 3,
    b: 0
  },
  {
    x: width,
    y: height,
    r: 40,
    a: 3,
    b: 2
  },
  {
    x: width / 2,
    y: height / 3,
    r: 20,
    a: 1,
    b: 1
  },
  {
    x: width / 2,
    y: height - height / 3,
    r: 30,
    a: 2,
    b: 1
  }
]