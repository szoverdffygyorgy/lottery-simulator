import { useCallback } from 'react';
import Slider from '../../components/slider/slider';
import useDispatchContext from '../../state/context/dispatch/use-dispatch-context';
import useStateContext from '../../state/context/state/use-state-context';
import { Container, Title } from './lottery-speed.styles';

const LotterySpeed = () => {
  const dispatch = useDispatchContext();
  const { drawSpeed } = useStateContext();

  const onSpeedChange = useCallback(
    (drawSpeed: number) => dispatch({ command: 'SET_DRAW_SPEED', drawSpeed }),
    []
  );

  return (
    <Container>
      <Title>Speed</Title>
      <Slider value={drawSpeed} onChange={onSpeedChange} />
    </Container>
  );
};

export default LotterySpeed;
