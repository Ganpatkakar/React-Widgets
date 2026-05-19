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
    r: 30,
    a: 0,
    b: 1
  },
  {
    x: width / 2,
    y: 0,
    r: 25,
    a: 0,
    b: 2
  },
  {
    x: width,
    y: 0,
    r: 30,
    a: 0,
    b: 3
  },
  // row 2
  {
    x: width / 4,
    y: height / 2,
    r: 24,
    a: 1,
    b: 1
  },
  {
    x: width / 2,
    y: height / 2,
    r: 24,
    a: 1,
    b: 2
  },
  {
    x: width - width / 4,
    y: height / 2,
    r: 24,
    a: 1,
    b: 3
  },
]

export const squareCircles = (width: number, height: number) => [
  // row 1
  {
    x: 0,
    y: 0,
    r: 30,
    a: 2,
    b: 0
  },
  {
    x: width / 4,
    y: 0,
    r: 30,
    a: 2,
    b: 1
  },
  {
    x: width / 2,
    y: 0,
    r: 25,
    a: 2,
    b: 2
  },
  {
    x: width - width / 4,
    y: 0,
    r: 30,
    a: 2,
    b: 3
  },
  {
    x: width,
    y: 0,
    r: 30,
    a: 2,
    b: 4
  },
  // row 2
  {
    x: 0,
    y: height / 4,
    r: 30,
    a: 3,
    b: 0
  },
  {
    x: width / 4,
    y: height / 4,
    r: 30,
    a: 3,
    b: 1
  },
  {
    x: width / 2,
    y: height / 4,
    r: 30,
    a: 3,
    b: 2
  },
  {
    x: width - width / 4,
    y: height / 4,
    r: 30,
    a: 3,
    b: 3
  },
  {
    x: width,
    y: height / 4,
    r: 30,
    a: 3,
    b: 4
  },
  // row 3
  {
    x: 0,
    y: height / 2,
    r: 30,
    a: 4,
    b: 0
  },
  {
    x: width / 4,
    y: height / 2,
    r: 30,
    a: 4,
    b: 1
  },
  {
    x: width / 2,
    y: height / 2,
    r: 30,
    a: 4,
    b: 2
  },
  {
    x: width - width / 4,
    y: height / 2,
    r: 30,
    a: 4,
    b: 3
  },
  {
    x: width,
    y: height / 2,
    r: 30,
    a: 4,
    b: 4
  },
  // row 4
  {
    x: 0,
    y: height - height / 4,
    r: 30,
    a: 5,
    b: 0
  },
  {
    x: width / 4,
    y: height - height / 4,
    r: 30,
    a: 5,
    b: 1
  },
  {
    x: width / 2,
    y: height - height / 4,
    r: 30,
    a: 5,
    b: 2
  },
  {
    x: width - width / 4,
    y: height - height / 4,
    r: 30,
    a: 5,
    b: 3
  },
  {
    x: width,
    y: height - height / 4,
    r: 30,
    a: 5,
    b: 4
  },
  // row 5
  {
    x: 0,
    y: height,
    r: 30,
    a: 6,
    b: 0
  },
  {
    x: width / 4,
    y: height,
    r: 30,
    a: 6,
    b: 1
  },
  {
    x: width / 2,
    y: height,
    r: 25,
    a: 6,
    b: 2
  },
  {
    x: width - width / 4,
    y: height,
    r: 30,
    a: 6,
    b: 3
  },
  {
    x: width,
    y: height,
    r: 30,
    a: 6,
    b: 4
  },
]

export const bottomTrianlgeCircles = (width: number, height: number) => [
  // row 1
  {
    x: width / 4,
    y: height / 2,
    r: 24,
    a: 7,
    b: 1
  },
  {
    x: width / 2,
    y: height / 2,
    r: 24,
    a: 7,
    b: 2
  },
  {
    x: width - width / 4,
    y: height / 2,
    r: 24,
    a: 7,
    b: 3
  },
  // row 2
  {
    x: 0,
    y: height,
    r: 30,
    a: 8,
    b: 1
  },
  {
    x: width / 2,
    y: height,
    r: 25,
    a: 8,
    b: 2
  },
  {
    x: width,
    y: height,
    r: 30,
    a: 8,
    b: 3
  },
]

export const coordinatesPossibleMoves: Record<string, { oneStep: Array<Array<number>>, jump: Array<Array<number>> }> = {
  "0_1": { oneStep: [[0, 1], [1, 0]], jump: [[2, 1], [0, 2]] },
  "0_2": { oneStep: [[0, -1], [0, 1], [1, 0]], jump: [[2, 0]] },
  "0_3": { oneStep: [[0, -1], [1, 0]], jump: [[0, -2], [2, -1]] },
  "1_1": { oneStep: [[-1, 0], [0, 1], [1, 1]], jump: [[2, 2], [0, 2]] },
  "1_2": { oneStep: [[0, -1], [-1, 0], [0, 1], [1, 0]], jump: [[2, 0]] },
  "1_3": { oneStep: [[0, -1], [-1, 0], [1, -1]], jump: [[0, -2], [2, -2]] },
  "7_1": { oneStep: [[1, 0], [0, 1], [-1, 1]], jump: [[0, 2], [-2, 2]] },
  "7_2": { oneStep: [[0, -1], [-1, 0], [0, 1], [1, 0]], jump: [[-2, 0]] },
  "7_3": { oneStep: [[1, 0], [0, -1], [-1, -1]], jump: [[-2, -2], [0, -2]] },
  "8_1": { oneStep: [[0, 1], [-1, 0]], jump: [[-2, 1], [0, 2]] },
  "8_2": { oneStep: [[0, -1], [0, 1], [-1, 0]], jump: [[-2, 0]] },
  "8_3": { oneStep: [[0, -1], [-1, 0]], jump: [[0, -2], [-2, -1]] },
  "2_0": { oneStep: [[0, 1], [1, 1], [1, 0]], jump: [[0, 2], [2, 2], [2, 0]] },
  "2_1": { oneStep: [[0, -1], [0, 1], [1, 0]], jump: [[0, 2], [2, 0]] },
  "2_2": { oneStep: [[0, -1], [-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1]], jump: [[0, -2], [-2, -1], [-2, 0], [-2, 1], [0, 2], [2, 2], [2, 0], [2, -2]] },
  "2_3": { oneStep: [[0, -1], [0, 1], [1, 0]], jump: [[0, -2], [2, 0]] },
  "2_4": { oneStep: [[0, -1], [1, 0], [1, -1]], jump: [[0, -2], [2, 0], [2, -2]] },
  "3_0": { oneStep: [[-1, 0], [0, 1], [1, 0]], jump: [] },
  "3_1": { oneStep: [[0, -1], [-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1]], jump: [] },
  "3_2": { oneStep: [[0, -1], [-1, 0], [0, 1], [1, 0]], jump: [] },
  "3_3": { oneStep: [[0, -1], [-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1]], jump: [] },
  "3_4": { oneStep: [[0, -1], [-1, 0], [1, 0]], jump: [] },
  "4_0": { oneStep: [[-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0]], jump: [] },
  "4_1": { oneStep: [[0, -1], [-1, 0], [0, 1], [1, 0]], jump: [] },
  "4_2": { oneStep: [[0, -1], [-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1]], jump: [] },
  "4_3": { oneStep: [[0, -1], [-1, 0], [0, 1], [1, 0]], jump: [] },
  "4_4": { oneStep: [[0, -1], [-1, -1], [-1, 0], [1, 0], [1, -1]], jump: [] },
  "5_0": { oneStep: [[-1, 0], [0, 1], [1, 0]], jump: [] },
  "5_1": { oneStep: [[0, -1], [-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1]], jump: [] },
  "5_2": { oneStep: [[0, -1], [-1, 0], [0, 1], [1, 0]], jump: [] },
  "5_3": { oneStep: [[0, -1], [-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1]], jump: [] },
  "5_4": { oneStep: [[0, -1], [-1, 0], [1, 0]], jump: [] },
  "6_0": { oneStep: [[-1, 0], [-1, 1], [0, 1]], jump: [] },
  "6_1": { oneStep: [[0, -1], [-1, 0], [0, 1]], jump: [] },
  "6_2": { oneStep: [[0, -1], [-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1]], jump: [] },
  "6_3": { oneStep: [[0, -1], [-1, 0], [0, 1]], jump: [] },
  "6_4": { oneStep: [[0, -1], [-1, -1], [-1, 0]], jump: [] },
}