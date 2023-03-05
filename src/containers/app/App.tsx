import useSaveProgress from '../../hooks/use-save-progress/use-save-progress';
import MainContainer from '../main-container/main-container';
import Title from '../title/title';
import { Container } from './App.styles';

function App() {
  useSaveProgress();

  return (
    <Container>
      <Title />
      <MainContainer />
    </Container>
  );
}

export default App;
