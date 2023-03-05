import AggregatedResults from '../aggregated-results/aggregated-results';
import LotterySpeed from '../lottery-speed/lottery-speed';
import LotterySuccess from '../lottery-success/lottery-success';
import UserNumbers from '../user-numbers/user-numbers';
import WinningNumbers from '../winning-numbers/winning-numbers';
import { Container, Title } from './main-container.styles';

const MainContainer = () => {
  return (
    <Container>
      <Title>Result</Title>
      <AggregatedResults />
      <LotterySuccess />
      <WinningNumbers />
      <UserNumbers />
      <LotterySpeed />
    </Container>
  );
};

export default MainContainer;
