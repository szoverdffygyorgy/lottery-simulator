import { createContext } from 'react';
import { INITIAL_STATE } from './constants';
import { State } from './types';

const StateContext = createContext<State>(INITIAL_STATE);

export default StateContext;
