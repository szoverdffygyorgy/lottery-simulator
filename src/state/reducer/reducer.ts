import { NUMBER_OF_NUMBERS_TO_DRAW } from '../../constants';
import { Action, State } from '../types';

const reducer = (state: State, action: Action) => {
  switch (action.command) {
    case 'INITIALIZE': {
      state = { ...state, ...action.fields };
      break;
    }

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
    }

    default: {
      break;
    }
  }

  return state;
};

export default reducer;
