import { InputFriendlyNumber } from '../../types';
import randomFloat from './random-float';

const randomInt = (
  min: number,
  max: number,
  excludedNumbers: InputFriendlyNumber[]
): number => {
  const range = max - min;
  const newValue = Math.floor(randomFloat() * range + min);

  if (excludedNumbers.includes(newValue)) {
    return randomInt(min, max, excludedNumbers);
  }

  return newValue;
};

export default randomInt;
