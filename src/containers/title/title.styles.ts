import breakpoints from '../../theme/breakpoints';
import { styled } from '../../theme/theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 100%;
  height: 60px;
  background: linear-gradient(to right, #a5d9c8, 80.73%, #f6f0c6);

  @media ${breakpoints.mobile} {
    background: linear-gradient(to right, #a5d9c8, 76.56%, #f6f0c6);
  }
`;

export const TitleText = styled.div`
  font-size: 40px;
  font-weight: 700;
  color: ${({ theme }) => theme.secondaryText};

  @media ${breakpoints.mobile} {
    font-size: 20px;
  }
`;
