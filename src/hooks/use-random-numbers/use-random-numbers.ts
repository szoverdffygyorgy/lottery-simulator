import { useEffect, useState } from 'react';
import useDispatchContext from '../../state/context/dispatch/use-dispatch-context';
import useStateContext from '../../state/context/state/use-state-context';
import { fetchRandomNumbers } from '../../utils/fetch-random-numbers/fetch-random-number';

const useRandomNumbers = () => {
  const dispatch = useDispatchContext();
  const { isUsingRandomValues } = useStateContext();

  const [numbers, setNumbers] = useState<(number | '')[]>([]);

  useEffect(() => {
    if (!isUsingRandomValues) {
      return;
    }

    fetchRandomNumbers().then(setNumbers);
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
