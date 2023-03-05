import { styled } from '../../theme/theme';

export const Container = styled.div`
  width: 100%;
  height: 50px;
`;

export const Title = styled.h2`
  font-size: 16px;
  color: ${({ theme }) => theme.text};
`;
