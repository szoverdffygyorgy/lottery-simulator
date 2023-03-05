import { useCallback, useEffect, useRef, useState } from 'react';
import {
  MAX_NUMBER,
  MIN_NUMBER,
  NUMBER_OF_NUMBERS_TO_DRAW,
} from '../../constants';
import useDispatchContext from '../../state/context/dispatch/use-dispatch-context';
import useStateContext from '../../state/context/state/use-state-context';
import randomInt from '../../utils/random/random-int';

const useLotteryNumbers = () => {
  const dispatch = useDispatchContext();
  const { drawSpeed, numbersInPlay } = useStateContext();

  const [numbers, setNumbers] = useState<(number | '')[]>(
    Array.from({ length: NUMBER_OF_NUMBERS_TO_DRAW }, () => '')
  );
  const interval = useRef<number>();

  const getLotteryNumbers = useCallback(async () => {
    setNumbers(
      Array.from({ length: NUMBER_OF_NUMBERS_TO_DRAW }, () =>
        randomInt(MIN_NUMBER, MAX_NUMBER)
      )
    );
  }, []);

  useEffect(() => {
    dispatch({ command: 'SET_NEW_LOTTERY_NUMBERS', drawnNumbers: numbers });

    if (numbersInPlay.every((value) => value !== '')) {
      dispatch({ command: 'INCREMENT_ATTEMPTS' });
    }
  }, [numbers]);

  useEffect(() => {
    if (interval.current) {
      window.clearInterval(interval.current);
    }

    interval.current = window.setInterval(getLotteryNumbers, drawSpeed);
  }, [drawSpeed]);
};

export default useLotteryNumbers;
