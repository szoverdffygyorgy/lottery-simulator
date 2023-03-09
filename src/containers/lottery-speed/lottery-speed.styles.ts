import widthBreakpoints from '../../theme/breakpoints/width';
import { styled } from '../../theme/theme';

export const Container = styled.div`
  max-width: 100%;
`;

export const Title = styled.h2`
  margin: 0 0 3px 0;
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.primaryText};

  @media ${widthBreakpoints.mobile} {
    margin: 0 0 10px 0;
    font-size: 12px;
    font-weight: 600;
  }
`;
