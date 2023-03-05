import { NUMBER_OF_NUMBERS_TO_DRAW } from '../constants';
import { State } from './types';

const DRAW_SPEED = 500;

export const INITIAL_STATE: State = {
  attempts: 4213,
  drawnNumbers: [23, 1, 58, 38, 78],
  drawSpeed: DRAW_SPEED,
  isUsingRandomValues: false,
  numbersInPlay: Array.from({ length: NUMBER_OF_NUMBERS_TO_DRAW }, () => ''),
  results: {
    two: 213214,
    three: 213,
    four: 657,
    five: 5,
  },
};
