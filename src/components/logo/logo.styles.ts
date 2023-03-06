import breakpoints from '../../theme/breakpoints';
import { styled } from '../../theme/theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 32px 0 20px;

  @media ${breakpoints.mobile} {
    padding: 0 16px 0 20px;
  }
`;

export const Image = styled.img`
  width: 28px;
  height: 28px;
`;
