import { clone, cloneDeep } from 'lodash';
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
      console.log(
        { old: state.numbersInPlay, new: action.numbersInPlay },
        state.numbersInPlay === action.numbersInPlay
      );
      state = {
        ...state,
        numbersInPlay: action.numbersInPlay,
      };
      break;
    }
    default: {
      break;
    }
  }

  return state;
};

export default reducer;
