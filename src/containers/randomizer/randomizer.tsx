import { ChangeEvent, useCallback } from 'react';
import useDispatchContext from '../../state/context/dispatch/use-dispatch-context';
import useStateContext from '../../state/context/state/use-state-context';
import { Container, StyledCheckbox, Title } from './randomizer.styles';

const Randomizer = () => {
  const dispatch = useDispatchContext();
  const { isUsingRandomValues } = useStateContext();

  const onChange = useCallback(
    (_: ChangeEvent<HTMLInputElement>) =>
      dispatch({
        command: 'TOGGLE_RANDOM_VALUES',
        isUsingRandomValues: !isUsingRandomValues,
      }),
    [isUsingRandomValues]
  );

  return (
    <Container>
      <Title>Play with random numbers:</Title>
      <StyledCheckbox
        type="checkbox"
        checked={isUsingRandomValues}
        onChange={onChange}
      />
    </Container>
  );
};

export default Randomizer;
