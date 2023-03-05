export type Results = {
  two: number;
  three: number;
  four: number;
  five: number;
};

export type Action =
  | { command: 'INITIALIZE'; fields: Partial<State> }
  | { command: 'SET_DRAW_SPEED'; drawSpeed: number }
  | { command: 'SET_USER_NUMBERS'; numbersInPlay: (number | '')[] }
  | { command: 'TOGGLE_RANDOM_VALUES'; isUsingRandomValues: boolean };

export type State = {
  attempts: number;
  drawnNumbers: number[];
  drawSpeed: number;
  isUsingRandomValues: boolean;
  numbersInPlay: (number | '')[];
  results: Results;
};
