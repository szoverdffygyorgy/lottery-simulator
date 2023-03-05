import { useCallback } from 'react';
import useSaveProgress from '../../hooks/use-save-progress/use-save-progress';
import useDispatchContext from '../../state/context/dispatch/use-dispatch-context';
import useStateContext from '../../state/context/state/use-state-context';
import MainContainer from '../main-container/main-container';
import Title from '../title/title';
import { ResetButton, Container } from './app.styles';

function App() {
  const dispatch = useDispatchContext();
  const state = useStateContext();

  useSaveProgress();

  const onResetClick = useCallback(() => dispatch({ command: 'RESET' }), []);

  return (
    <Container>
      <Title />
      <MainContainer />
      <ResetButton onClick={onResetClick}>Reset progress</ResetButton>
    </Container>
  );
}

export default App;
