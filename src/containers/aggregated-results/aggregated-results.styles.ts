import { styled } from '../../theme/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 325px;
  height: 103px;
  margin-bottom: 32px;
  padding: 18px 19px 11px 24px;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 10px;
`;

export const Text = styled.label`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.secondaryText};
`;

export const BoldText = styled.label`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.secondaryText};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 56.92% 43.08%;
  width: 100%;
  height: 100%;
`;
