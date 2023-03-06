import breakpoints from '../../theme/breakpoints';
import { styled } from '../../theme/theme';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 792px;
  max-height: 642px;
  margin: 40px auto 32px auto;
  padding: 48px 78px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.mainContainer.background};
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);

  @media ${breakpoints.mobile} {
    max-width: 320px;
    max-height: 572px;
    padding: 16px 16px 32px 16px;
    border-radius: 0;
  }
`;

export const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 32px;
  font-size: 40px;
  font-weight: 700;
  color: ${({ theme }) => theme.primaryText};

  @media ${breakpoints.mobile} {
    margin-bottom: 24px;
    font-size: 32px;
  }
`;
