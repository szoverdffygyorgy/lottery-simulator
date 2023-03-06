import { ChangeEvent, useCallback } from 'react';
import { MAX_DRAW_SPEED, MIN_DRAW_SPEED } from '../../constants';
import useDispatchContext from '../../state/context/dispatch/use-dispatch-context';
import useStateContext from '../../state/context/state/use-state-context';
import { Container, SliderInput } from './bruh.styles';

const Slider = () => {
  const dispatch = useDispatchContext();
  const { drawSpeed } = useStateContext();

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) =>
      dispatch({
        command: 'SET_DRAW_SPEED',
        drawSpeed: parseInt(event.target.value),
      }),
    []
  );

  return (
    <Container>
      <SliderInput
        type="range"
        min={MIN_DRAW_SPEED}
        max={MAX_DRAW_SPEED}
        value={drawSpeed || MIN_DRAW_SPEED}
        onChange={onChange}
      />
    </Container>
  );
};

export default Slider;
