import { ChangeEvent, useCallback } from 'react';
import useDispatchContext from '../../state/context/dispatch/use-dispatch-context';
import useStateContext from '../../state/context/state/use-state-context';
import { StyledCheckbox } from './checkbox.styles';

const Checkbox = () => {
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
    <StyledCheckbox
      type="checkbox"
      checked={isUsingRandomValues}
      onChange={onChange}
    />
  );
};

export default Checkbox;
