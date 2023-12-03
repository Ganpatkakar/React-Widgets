import React, { Key } from "react";

export interface IPlayer {
  name: string;
  score: number;
  color: string;
}

export interface ISnake {
  tailScore: number,
  mouthScore: number
}

export interface ILadder {
  startScore: number,
  endScore: number
}

export interface IScoreWithGrid {
  [key: string | number]: any[]
}

export interface IDefaultValues {
  scoreWithGrid: IScoreWithGrid,
  passaValue: null | number,
  players: IPlayer[],
  currentPlayer: number,
  ladders: ILadder[],
  laddersMap: Map<number, number>
  snakes: ISnake[],
  snakesMouthScoreMap: Map<number, number>
}

export const SnakeLadderContext = React.createContext<IDefaultValues | null>(null);
export const SnakeLadderDispatcher = React.createContext(null);

export const Actions: any = {
  PassaAction: "PassaAction",
  NextPlayerTurn: "NextPlayerTurn"
}

export const initialValues: IDefaultValues = {
  scoreWithGrid: {},
  passaValue: null,
  players: [
    { name: "Gk", score: 1, color: "rgb(255 0 0 / 90%)" },
    { name: "Nk", score: 1, color: "rgb(0 255 0 / 90%)" }
  ],
  currentPlayer: 0,
  ladders: [
    {startScore: 2, endScore: 37},
    {startScore: 7, endScore: 14},
    {startScore: 9, endScore: 31},
    {startScore: 21, endScore: 42},
    {startScore: 28, endScore: 84},
    {startScore: 36, endScore: 44},
    {startScore: 51, endScore: 69},
    {startScore: 71, endScore: 91},
    {startScore: 80, endScore: 100},
  ],
  laddersMap: new Map(),
  snakes: [
    {tailScore: 6, mouthScore: 16},
    {tailScore: 11, mouthScore: 49},
    {tailScore: 20, mouthScore: 62},
    {tailScore: 24, mouthScore: 87},
    {tailScore: 26, mouthScore: 47},
    {tailScore: 59, mouthScore: 64},
    {tailScore: 79, mouthScore: 98},
    {tailScore: 76, mouthScore: 95},
    {tailScore: 74, mouthScore: 93},
  ],
  snakesMouthScoreMap: new Map()
}

export const maxGridLayers = 10;

export const SnakeLadderReducer = (state: IDefaultValues, { type, payload }) => {
  if (type === Actions.PassaAction) {
    return {
      ...state,
      passaValue: payload,
    }
  }

  if (type === Actions.UpdateScore) {
    const {players, currentPlayer} = state;
    players[currentPlayer].score = payload;
    return {
      ...state,
      players: [...players],
    }
  }

  if (type === Actions.NextPlayerTurn) {
    const { currentPlayer, players } = state;
    return {
      ...state,
      currentPlayer: currentPlayer + 1 >= players.length ? 0 : currentPlayer + 1
    }
  }

  return { ...state };
}
