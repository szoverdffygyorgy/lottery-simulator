import { styled } from '../../theme/theme';

export const Container = styled.div`
  width: 100%;
`;

export const Title = styled.h2`
  margin: 0 0 12px 0;
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.primaryText};
`;
