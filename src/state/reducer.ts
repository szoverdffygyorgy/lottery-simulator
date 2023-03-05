import { Action, State } from './types';

const reducer = (state: State, action: Action) => {
  switch (action.command) {
    case 'INITIALIZE': {
      state = { ...state, ...action.fields };
    }
  }

  return state;
};

export default reducer;
