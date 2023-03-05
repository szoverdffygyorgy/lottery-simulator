import { useEffect } from 'react';
import { NUMBER_MAP } from '../../state/constants';
import useDispatchContext from '../../state/context/dispatch/use-dispatch-context';
import useStateContext from '../../state/context/state/use-state-context';
import { Results } from '../../state/types';

const useResultEvaluator = () => {
  const dispatch = useDispatchContext();
  const { drawnNumbers, numbersInPlay, results } = useStateContext();

  useEffect(() => {
    if (
      numbersInPlay.some((value) => value === '') ||
      drawnNumbers.some((value) => value === '')
    ) {
      return;
    }

    const result = drawnNumbers.reduce<number>(
      (acc, curr) => (numbersInPlay.includes(curr) ? acc + 1 : acc),
      0
    );

    const [key, _] =
      Object.entries(NUMBER_MAP).find(([_, number]) => number === result) ?? [];

    if (!key) {
      return;
    }

    dispatch({
      command: 'UPDATE_RESULTS',
      results: {
        ...results,
        [key]: results[key as keyof Results] + 1,
      },
    });
  }, [drawnNumbers]);
};

export default useResultEvaluator;
