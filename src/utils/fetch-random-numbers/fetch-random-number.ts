import {
  MAX_NUMBER,
  MIN_NUMBER,
  NUMBER_OF_NUMBERS_TO_DRAW,
} from '../../constants';
import { InputFriendlyNumber } from '../../types';
import { URL } from './constants';

export const fetchRandomNumbers = async (
  min = MIN_NUMBER,
  max = MAX_NUMBER,
  count = NUMBER_OF_NUMBERS_TO_DRAW
): Promise<InputFriendlyNumber[]> => {
  try {
    const res = await window.fetch(
      `${URL}?min=${min}&max=${max}&count=${count}`
    );
    const numbers = (await res.json()) as number[];

    return numbers;
  } catch (e) {
    console.warn('Failed to get numbers');
    return Array.from({ length: count }, () => '');
  }
};
