import { InputFriendlyNumber } from '../types';

export type Results = {
  two: number;
  three: number;
  four: number;
  five: number;
};

export type Action =
  | { command: 'SET_DRAW_SPEED'; drawSpeed: number }
  | { command: 'SET_USER_NUMBERS'; numbersInPlay: InputFriendlyNumber[] }
  | { command: 'TOGGLE_RANDOM_VALUES'; isUsingRandomValues: boolean }
  | { command: 'SET_NEW_LOTTERY_NUMBERS'; drawnNumbers: InputFriendlyNumber[] }
  | { command: 'UPDATE_RESULTS'; results: Partial<Results> }
  | { command: 'INCREMENT_ATTEMPTS' }
  | { command: 'STOP_DRAW' }
  | { command: 'RESET' };

export type State = {
  attempts: number;
  drawnNumbers: InputFriendlyNumber[];
  drawSpeed: number;
  isDrawing: boolean;
  isUsingRandomValues: boolean;
  numbersInPlay: InputFriendlyNumber[];
  results: Results;
};
