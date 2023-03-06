import breakpoints from '../../theme/breakpoints';
import { styled } from '../../theme/theme';

export const Container = styled.div`
  max-width: 100%;
`;

export const Title = styled.h2`
  margin: 0 0 3px 0;
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.primaryText};

  @media ${breakpoints.mobile} {
    margin: 0 0 10px 0;
    font-size: 8px;
    font-weight: 600;
  }
`;
