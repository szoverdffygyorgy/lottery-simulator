import Slider from '../../components/slider/Slider';
import { Container, Title } from './lottery-speed.styles';

type Props = {
  speed: number;
  onSpeedChange: (newValue: number) => void;
};

const LotterySpeed = ({ speed, onSpeedChange }: Props) => {
  return (
    <Container>
      <Title>Speed</Title>
      <Slider value={speed} onChange={onSpeedChange} />
    </Container>
  );
};

export default LotterySpeed;
