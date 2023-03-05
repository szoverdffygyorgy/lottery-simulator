type Results = {
  two: number;
  three: number;
  four: number;
  five: number;
};

export type Action = { command: 'INITIALIZE'; fields: Partial<State> };

export type State = {
  drawnNumbers: number[];
  drawSpeed: number;
  numberOfPlays: number;
  numbersInPlay: number[];
  results: Results;
};
