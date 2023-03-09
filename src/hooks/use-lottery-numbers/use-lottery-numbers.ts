import { useCallback, useEffect, useRef, useState } from 'react';
import {
  MAX_NUMBER,
  MIN_NUMBER,
  NUMBER_OF_NUMBERS_TO_DRAW,
} from '../../constants';
import useDispatchContext from '../../state/context/dispatch/use-dispatch-context';
import useStateContext from '../../state/context/state/use-state-context';
import { InputFriendlyNumber } from '../../types';
import drawNumbers from '../../utils/draw-numbers/draw-numbers';
import randomInt from '../../utils/random/random-int';

const useLotteryNumbers = () => {
  const dispatch = useDispatchContext();
  const { drawSpeed, isDrawing, numbersInPlay } = useStateContext();

  const [numbers, setNumbers] = useState<InputFriendlyNumber[]>(
    Array.from({ length: NUMBER_OF_NUMBERS_TO_DRAW }, () => '')
  );
  const interval = useRef<number>();

  const getLotteryNumbers = useCallback(() => {
    const numbers: InputFriendlyNumber[] = Array.from(
      { length: NUMBER_OF_NUMBERS_TO_DRAW },
      () => ''
    );

    setNumbers(drawNumbers(numbers));
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

    if (!isDrawing) {
      return;
    }

    interval.current = window.setInterval(getLotteryNumbers, drawSpeed);
  }, [drawSpeed, isDrawing]);
};

export default useLotteryNumbers;
