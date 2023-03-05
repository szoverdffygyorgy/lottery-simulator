import { styled } from '../../theme/theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 24px;
`;

export const Title = styled.h3`
  margin: 0 27px 0 0;
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.primaryText};
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;
