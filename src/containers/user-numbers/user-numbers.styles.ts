import breakpoints from '../../theme/breakpoints';
import { styled } from '../../theme/theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 24px;

  @media ${breakpoints.mobile} {
    margin-bottom: 16px;
  }
`;

export const Title = styled.h3`
  margin: 0 57px 0 0;
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.primaryText};

  @media ${breakpoints.mobile} {
    margin: 0 42px 0 0;
    font-size: 8px;
    font-weight: 600;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;
