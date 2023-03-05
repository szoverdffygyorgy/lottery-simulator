import { styled } from '../../theme/theme';

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 24px;
`;

export const Title = styled.h3`
  margin-right: 57px;
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.primaryText};
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;
