import { State } from './types';

const DRAW_SPEED = 500;

export const INITIAL_STATE: State = {
  drawnNumbers: [],
  drawSpeed: DRAW_SPEED,
  numberOfPlays: 0,
  numbersInPlay: [],
  results: {
    two: 0,
    three: 0,
    four: 0,
    five: 0,
  },
};
