import { INITIAL_DRAW_SPEED, NUMBER_OF_NUMBERS_TO_DRAW } from '../constants';
import storage from '../utils/storage/storage';
import { Results, State } from './types';

export const DEFAULT_STATE: State = {
  attempts: 0,
  drawnNumbers: Array.from({ length: NUMBER_OF_NUMBERS_TO_DRAW }, () => ''),
  drawSpeed: INITIAL_DRAW_SPEED,
  isDrawing: true,
  isUsingRandomValues: false,
  numbersInPlay: Array.from({ length: NUMBER_OF_NUMBERS_TO_DRAW }, () => ''),
  results: {
    two: 0,
    three: 0,
    four: 0,
    five: 0,
  },
};

export const INITIAL_STATE: State = {
  attempts: storage.get<number>('attempts') ?? 0,
  drawnNumbers: Array.from({ length: NUMBER_OF_NUMBERS_TO_DRAW }, () => ''),
  drawSpeed: storage.get<number>('draw-speed') ?? INITIAL_DRAW_SPEED,
  isDrawing: true,
  isUsingRandomValues: false,
  numbersInPlay: Array.from({ length: NUMBER_OF_NUMBERS_TO_DRAW }, () => ''),
  results: storage.get<Results>('results') ?? {
    two: 0,
    three: 0,
    four: 0,
    five: 0,
  },
};

export const NUMBER_MAP: Record<keyof Results, number> = {
  five: 5,
  four: 4,
  three: 3,
  two: 2,
};
