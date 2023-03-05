import { useEffect } from 'react';
import { INITIAL_STATE } from '../../state/constants';
import useDispatchContext from '../../state/context/dispatch/use-dispatch-context';
import { Results } from '../../state/types';
import storage from '../../utils/storage/storage';
import MainContainer from '../main-container/main-container';
import Title from '../title/title';
import { Container } from './App.styles';

function App() {
  const dispatch = useDispatchContext();

  useEffect(() => {
    const drawSpeed = storage.get<number>('draw-speed') ?? 0;
    const attempts = storage.get<number>('attempts') ?? 0;
    const results = storage.get<Results>('results') ?? INITIAL_STATE.results;

    dispatch({
      command: 'INITIALIZE',
      fields: { attempts, drawSpeed, results },
    });
  }, []);

  return (
    <Container>
      <Title />
      <MainContainer />
    </Container>
  );
}

export default App;
