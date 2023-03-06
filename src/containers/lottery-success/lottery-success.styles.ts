import breakpoints from '../../theme/breakpoints';
import { styled } from '../../theme/theme';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 510px;
  margin-bottom: 32px;
  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);

  @media ${breakpoints.tablet} {
    width: 288px;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1px;
    margin-bottom: 22px;
    background-color: ${({ theme }) => theme.secondary};
  }
`;

export const Cell = styled.div`
  display: flex;
  flex-direction: column;
  width: 127px;
  height: 72px;
  padding: 12px 34px;
  color: ${({ theme }) => theme.primaryText};

  &:not(:last-of-type) {
    border-right: 1px solid ${({ theme }) => theme.secondary};
  }

  @media ${breakpoints.tablet} {
    width: 142px;
    padding: 12px 43px;
    background-color: ${({ theme }) => theme.mainContainer.background};

    &:not(:last-of-type) {
      border-right: none;
    }

    &:first-of-type {
      border-top-left-radius: 10px;
    }

    &:nth-of-type(2) {
      border-top-right-radius: 10px;
    }

    &:nth-of-type(3) {
      border-bottom-left-radius: 10px;
    }

    &:last-of-type {
      border-bottom-right-radius: 10px;
    }
  }
`;

export const CellTitle = styled.label`
  margin-bottom: 9px;
  font-size: 12px;
  font-weight: 700;

  @media ${breakpoints.tablet} {
    font-size: 6px;
  }
`;

export const CellValue = styled.label`
  font-size: 16px;
  font-weight: 700;
  text-align: center;

  ${breakpoints.tablet} {
    font-size: 8px;
  }
`;
