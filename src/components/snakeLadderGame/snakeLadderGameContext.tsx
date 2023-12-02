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
  snakes: ISnake[]
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
    { name: "Gk", score: 1, color: "#000000" },
    { name: "Nk", score: 1, color: "green" }
  ],
  currentPlayer: 0,
  ladders: [
    {startScore: 2, endScore: 37},
    {startScore: 4, endScore: 14},
    {startScore: 9, endScore: 31},
    {startScore: 21, endScore: 42},
    {startScore: 28, endScore: 84},
    {startScore: 36, endScore: 44},
    {startScore: 51, endScore: 67},
    {startScore: 71, endScore: 91},
    {startScore: 80, endScore: 100},
  ],
  snakes: [
    {tailScore: 6, mouthScore: 16},
    {tailScore: 11, mouthScore: 49},
    {tailScore: 19, mouthScore: 62},
    {tailScore: 24, mouthScore: 87},
    {tailScore: 26, mouthScore: 47},
    {tailScore: 53, mouthScore: 56},
    {tailScore: 60, mouthScore: 64},
    {tailScore: 78, mouthScore: 98},
    {tailScore: 75, mouthScore: 95},
    {tailScore: 73, mouthScore: 93},
  ]
}

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