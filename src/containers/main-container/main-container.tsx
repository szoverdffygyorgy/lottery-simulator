import useLotteryNumbers from '../../hooks/use-lottery-numbers/use-lottery-numbers';
import useRandomNumbers from '../../hooks/use-random-numbers/use-random-numbers';
import useResultEvaluator from '../../hooks/use-result-evaluator/use-result-evaluator';
import AggregatedResults from '../aggregated-results/aggregated-results';
import LotterySpeed from '../lottery-speed/lottery-speed';
import LotterySuccess from '../lottery-success/lottery-success';
import Randomizer from '../randomizer/randomizer';
import UserNumbers from '../user-numbers/user-numbers';
import WinningNumbers from '../winning-numbers/winning-numbers';
import { Container, Title } from './main-container.styles';

const MainContainer = () => {
  useRandomNumbers();
  useLotteryNumbers();
  useResultEvaluator();

  return (
    <Container>
      <Title>Result</Title>
      <AggregatedResults />
      <LotterySuccess />
      <WinningNumbers />
      <UserNumbers />
      <Randomizer />
      <LotterySpeed />
    </Container>
  );
};

export default MainContainer;
