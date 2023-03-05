import { styled } from '../../theme/theme';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.primaryText};
`;

export const ResetButton = styled.button`
  display: block;
  width: 160px;
  height: 50px;
  margin: 0 auto;
  outline: none;
  background-color: ${({ theme }) => theme.mainContainerBackground};
  border: none;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    cursor: pointer;
  }
`;
