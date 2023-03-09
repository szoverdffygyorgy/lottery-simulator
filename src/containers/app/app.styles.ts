import heightBreakpoints from '../../theme/breakpoints/height';
import { styled } from '../../theme/theme';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.primaryText};

  @media ${heightBreakpoints.tablet} {
    height: 100%;
    padding-bottom: 32px;
  }
`;

export const ResetButton = styled.button`
  display: block;
  width: 160px;
  height: 50px;
  margin: 0 auto;
  outline: none;
  border: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.button.background};
  color: ${({ theme }) => theme.button.text};
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.button.hover};
  }
`;
