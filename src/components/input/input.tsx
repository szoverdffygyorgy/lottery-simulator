import { noop } from 'lodash';
import { ChangeEvent, useCallback } from 'react';
import { MAX_NUMBER, MIN_NUMBER } from '../../constants';
import useDispatchContext from '../../state/context/dispatch/use-dispatch-context';
import useStateContext from '../../state/context/state/use-state-context';
import { StyledInput } from './input.styles';

type Props = {
  disabled?: boolean;
  index: number;
  value: number | '';
};

const Input = ({ disabled = false, index, value }: Props) => {
  const dispatch = useDispatchContext();
  const { numbersInPlay } = useStateContext();

  const onValueChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = parseInt(event.target.value);

      if (newValue < MIN_NUMBER || newValue > MAX_NUMBER) {
        return;
      }

      const newNumbers = [...numbersInPlay];
      newNumbers[index] = newValue ?? '';

      dispatch({ command: 'SET_USER_NUMBERS', numbersInPlay: newNumbers });
    },
    [numbersInPlay]
  );

  return (
    <StyledInput
      type="number"
      disabled={disabled}
      value={value}
      onChange={disabled ? noop : onValueChange}
    />
  );
};

export default Input;
