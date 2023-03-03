import { URL } from './constants';

export const fetchRandomNumbers = async (
  min = 1,
  max = 90,
  count = 5
): Promise<number[]> => {
  try {
    const res = await window.fetch(
      `${URL}?min=${min}&max=${max}&count=${count}`
    );
    const numbers = (await res.json()) as number[];

    return numbers;
  } catch (e) {
    console.warn('Failed to get numbers');
    return [];
  }
};
