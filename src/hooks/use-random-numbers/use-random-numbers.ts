import { useEffect, useState } from 'react';
import { NUMBER_OF_NUMBERS_TO_DRAW } from '../../constants';
import useDispatchContext from '../../state/context/dispatch/use-dispatch-context';
import useStateContext from '../../state/context/state/use-state-context';
import { InputFriendlyNumber } from '../../types';
import drawNumbers from '../../utils/draw-numbers/draw-numbers';

const useRandomNumbers = () => {
  const dispatch = useDispatchContext();
  const { isUsingRandomValues } = useStateContext();

  const [numbers, setNumbers] = useState<InputFriendlyNumber[]>([]);

  useEffect(() => {
    if (!isUsingRandomValues) {
      return;
    }

    const userNumbers: InputFriendlyNumber[] = Array.from(
      { length: NUMBER_OF_NUMBERS_TO_DRAW },
      () => ''
    );

    setNumbers(drawNumbers(userNumbers));
  }, [isUsingRandomValues]);

  useEffect(() => {
    if (!numbers.length) {
      return;
    }

    dispatch({ command: 'SET_USER_NUMBERS', numbersInPlay: numbers });
  }, [numbers]);

  return numbers;
};

export default useRandomNumbers;
