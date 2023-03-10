import widthBreakpoints from '../../theme/breakpoints/width';
import { css, styled } from '../../theme/theme';
import { TextProps } from './types';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 325px;
  margin-bottom: 32px;
  padding: 18px 19px 11px 24px;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 10px;

  @media ${widthBreakpoints.mobile} {
    margin-bottom: 25px;
    padding: 12px 16px 15px 12px;
  }
`;

export const Text = styled.label<TextProps>`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.secondaryText};

  ${({ isHighlighted = false, theme }) =>
    isHighlighted
      ? css`
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: ${theme.primaryText};
          font-size: 222px;
          transition: all 1s;
          z-index: 1;

          @media ${widthBreakpoints.mobile} {
            font-size: 184px;
          }
        `
      : null};
`;

export const LargeText = styled.label`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.secondaryText};

  @media ${widthBreakpoints.mobile} {
    font-size: 14px;
  }
`;

export const Attempts = styled.label`
  font-size: 16px;
  font-weight: 800;
  color: ${({ theme }) => theme.secondaryText};

  @media ${widthBreakpoints.mobile} {
    font-size: 14px;
  }
`;

export const Grid = styled.div`
  display: grid;
  row-gap: 6px;
  grid-template-columns: 56.92% 43.08%;
  width: 100%;
  height: 100%;

  @media ${widthBreakpoints.mobile} {
    row-gap: 8px;
    grid-template-columns: 52.43% 47.57%;
  }
`;
