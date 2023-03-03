import { useCallback, useState } from 'react';
import { fetchRandomNumbers } from '../../utils/fetch-random-numbers/fetch-random-number';

const useLotteryNumbers = () => {
  const [numbers, setNumbers] = useState<number[]>([]);

  const getLotteryNumbers = useCallback(async () => {
    setNumbers(await fetchRandomNumbers());
  }, []);

  return { numbers, getLotteryNumbers };
};

export default useLotteryNumbers;
