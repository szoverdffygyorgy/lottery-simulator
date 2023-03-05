import { styled } from '../../theme/theme';

export const Container = styled.div`
  width: 100%;
  height: 50px;
`;

export const SliderInput = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
  width: 100%;
  height: 16px;

  &::-webkit-slider-runnable-track {
    height: 5px;
    background: ${({ theme }) => theme.slider.track};
    border-radius: 3px;
  }

  &::-moz-range-track {
    height: 5px;
    background: ${({ theme }) => theme.slider.track};
    border-radius: 3px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    height: 16px;
    width: 16px;
    margin-top: -6px; /* Centers thumb on the track */
    border: 1px solid ${({ theme }) => theme.slider.thumbBorder};
    border-radius: 50%;
    background: ${({ theme }) => theme.slider.thumb};
  }

  &::-moz-range-thumb {
    height: 16px;
    width: 16px;
    border: 1px solid ${({ theme }) => theme.slider.thumbBorder};
    border-radius: 50%;
    background: ${({ theme }) => theme.slider.thumb};
  }
`;
