import { MAX_NUMBER, MIN_NUMBER } from '../../constants';
import { InputFriendlyNumber } from '../../types';
import randomInt from '../random/random-int';

const drawNumbers = (
  alreadyDrawn: InputFriendlyNumber[],
  min = MIN_NUMBER,
  max = MAX_NUMBER
) => {
  const drawnNumbers = [...alreadyDrawn];

  for (let i = 0; i < drawnNumbers.length; i++) {
    if (drawnNumbers[i] === '') {
      drawnNumbers[i] = randomInt(min, max, drawnNumbers);
    }
  }

  return drawnNumbers;
};

export default drawNumbers;
