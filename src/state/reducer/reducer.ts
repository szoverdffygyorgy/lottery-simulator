import { INITIAL_DRAW_SPEED, NUMBER_OF_NUMBERS_TO_DRAW } from '../../constants';
import { Action, State } from '../types';

const reducer = (state: State, action: Action) => {
  switch (action.command) {
    case 'SET_DRAW_SPEED': {
      console.log({ state: state.drawSpeed, action: action.drawSpeed });
      state = { ...state, drawSpeed: action.drawSpeed || INITIAL_DRAW_SPEED };

      break;
    }

    case 'SET_USER_NUMBERS': {
      state = {
        ...state,
        numbersInPlay: action.numbersInPlay,
      };

      break;
    }

    case 'TOGGLE_RANDOM_VALUES': {
      state = {
        ...state,
        isUsingRandomValues: action.isUsingRandomValues,
        numbersInPlay: Array.from(
          { length: NUMBER_OF_NUMBERS_TO_DRAW },
          () => ''
        ),
      };

      break;
    }

    case 'SET_NEW_LOTTERY_NUMBERS': {
      state = { ...state, drawnNumbers: action.drawnNumbers };

      break;
    }

    case 'UPDATE_RESULTS': {
      state = { ...state, results: { ...state.results, ...action.results } };

      break;
    }

    case 'INCREMENT_ATTEMPTS': {
      state = { ...state, attempts: state.attempts + 1 };
      break;
    }

    default: {
      break;
    }
  }

  return state;
};

export default reducer;
