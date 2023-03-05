import { PropsWithChildren, useReducer } from 'react';
import { INITIAL_STATE } from './constants';
import DispatchContext from './dispatch-context';
import reducer from './reducer';
import StateContext from './state-context';

type Props = PropsWithChildren<{}>;

const StateProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export default StateProvider;
