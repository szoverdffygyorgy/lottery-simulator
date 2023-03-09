import widthBreakpoints from '../../theme/breakpoints/width';
import { styled } from '../../theme/theme';

export const Container = styled.div`
  max-width: 100%;
`;

export const SliderInput = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  width: 100%;
  height: 8px;
  margin: 0;
  cursor: pointer;

  &::-webkit-slider-runnable-track {
    height: 4px;
    background: ${({ theme }) => theme.slider.track};
    border-radius: 3px;
  }

  &::-moz-range-track {
    height: 4px;
    background: ${({ theme }) => theme.slider.track};
    border-radius: 3px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    height: 8px;
    width: 8px;
    margin-top: -2px; /* Centers thumb on the track */
    border: 1px solid ${({ theme }) => theme.slider.thumbBorder};
    border-radius: 50%;
    background: ${({ theme }) => theme.slider.thumb};
  }

  &::-moz-range-thumb {
    height: 8px;
    width: 8px;
    border: 1px solid ${({ theme }) => theme.slider.thumbBorder};
    border-radius: 50%;
    background: ${({ theme }) => theme.slider.thumb};
  }

  @media ${widthBreakpoints.mobile} {
  }
`;
