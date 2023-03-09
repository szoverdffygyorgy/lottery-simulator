import widthBreakpoints from '../../theme/breakpoints/width';
import { styled } from '../../theme/theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 24px;

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
    margin: 0 42px 0 0;
    font-size: 12px;
    font-weight: 600;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;
