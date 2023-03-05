export type Results = {
  two: number;
  three: number;
  four: number;
  five: number;
};

export type Action =
  | { command: 'SET_DRAW_SPEED'; drawSpeed: number }
  | { command: 'SET_USER_NUMBERS'; numbersInPlay: (number | '')[] }
  | { command: 'TOGGLE_RANDOM_VALUES'; isUsingRandomValues: boolean }
  | { command: 'SET_NEW_LOTTERY_NUMBERS'; drawnNumbers: (number | '')[] }
  | { command: 'UPDATE_RESULTS'; results: Partial<Results> }
  | { command: 'INCREMENT_ATTEMPTS' };

export type State = {
  attempts: number;
  drawnNumbers: (number | '')[];
  drawSpeed: number;
  isUsingRandomValues: boolean;
  numbersInPlay: (number | '')[];
  results: Results;
};
