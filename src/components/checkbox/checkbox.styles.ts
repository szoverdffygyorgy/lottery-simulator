import breakpoints from '../../theme/breakpoints';
import { styled } from '../../theme/theme';

export const StyledCheckbox = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background-color: ${({ theme }) => theme.checkbox.background};
  margin: 0;

  color: ${({ theme }) => theme.checkbox.color};
  width: 32px;
  height: 32px;
  border: 1px solid ${({ theme }) => theme.checkbox.border};
  border-radius: 5px;
  filter: drop-shadow(1px 1px 6px rgba(0, 0, 0, 0.15));

  &:hover {
    cursor: pointer;
  }

  &:checked::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background: url('./check.svg') center center no-repeat;
  }

  @media ${breakpoints.mobile} {
    width: 20px;
    height: 20px;

    &:checked::before {
      width: 100%;
      height: 100%;
      transform: scale(60%);
    }
  }
`;
