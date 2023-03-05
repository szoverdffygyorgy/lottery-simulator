import { State } from '../../state/types';

export const SUCCESS_ORDER: (keyof State['results'])[] = [
  'two',
  'three',
  'four',
  'five',
];

export const SUCCESS_MAP: Record<keyof State['results'], number> = {
  five: 5,
  four: 4,
  three: 3,
  two: 2,
};
