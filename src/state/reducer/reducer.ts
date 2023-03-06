import { NUMBER_OF_NUMBERS_TO_DRAW } from '../../constants';
import { DEFAULT_STATE } from '../constants';
import { Action, State } from '../types';

const reducer = (state: State, action: Action) => {
  switch (action.command) {
    case 'SET_DRAW_SPEED': {
      state = { ...state, drawSpeed: action.drawSpeed };

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

    case 'STOP_DRAW': {
      state = { ...state, isDrawing: false };
      break;
    }

    case 'RESET': {
      state = { ...DEFAULT_STATE };
      break;
    }

    default: {
      break;
    }
  }

  return state;
};

export default reducer;
