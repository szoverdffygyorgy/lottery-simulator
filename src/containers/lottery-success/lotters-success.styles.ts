import { styled } from '../../theme/theme';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: fit-content;
  height: 72px;
  margin-bottom: 32px;
  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Cell = styled.div`
  display: flex;
  flex-direction: column;
  width: 127px;
  height: 72px;
  padding: 12px 34px 34px;
  color: ${({ theme }) => theme.primaryText};

  &:not(:last-of-type) {
    border-right: 1px solid ${({ theme }) => theme.secondary};
  }
`;

export const CellTitle = styled.label`
  margin-bottom: 9px;
  font-size: 12px;
  font-weight: 700;
`;

export const CellValue = styled.label`
  font-size: 16px;
  font-weight: 700;
  text-align: center;
`;
