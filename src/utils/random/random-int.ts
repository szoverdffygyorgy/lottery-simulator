import randomFloat from './random-float';

const randomInt = (min: number, max: number): number => {
  const range = max - min;
  return Math.floor(randomFloat() * range + min);
};

export default randomInt;
