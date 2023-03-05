import { styled } from '../../theme/theme';

export const StyledCheckbox = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  margin: 0;

  color: ${({ theme }) => theme.checkbox.color};
  width: 32px;
  height: 32px;
  border: 1px solid ${({ theme }) => theme.checkbox.border};
  border-radius: 5px;
  drop-shadow(1px 1px 6px rgba(0, 0, 0, 0.15));

  &:checked::before {
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    background: url('/check.svg') center center no-repeat;
  }
  `;
