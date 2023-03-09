import widthBreakpoints from '../../theme/breakpoints/width';
import { styled } from '../../theme/theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 100%;
  margin-bottom: 18px;

  @media ${widthBreakpoints.mobile} {
    margin-bottom: 16px;
  }
`;

export const Title = styled.h3`
  margin: 0 57px 0 0;
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.primaryText};

  @media ${widthBreakpoints.mobile} {
    margin: 0 24px 0 0;
    font-size: 12px;
    font-weight: 600;
  }
`;
