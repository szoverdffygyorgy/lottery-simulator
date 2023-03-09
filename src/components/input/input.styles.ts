import widthBreakpoints from '../../theme/breakpoints/width';
import { styled } from '../../theme/theme';

export const StyledInput = styled.input`
  width: 34px;
  height: 38px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.input.border};
  border-radius: 10px;
  background: ${({ theme }) => theme.input.disabledBackground};
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  color: ${({ theme }) => theme.primaryText};
  filter: drop-shadow(1px 1px 6px rgba(0, 0, 0, 0.15));

  &:not(:last-of-type) {
    margin-right: 16px;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  @media ${widthBreakpoints.mobile} {
    width: 22px;
    height: 25px;
    border-radius: 5px;
    font-size: 12px;

    &:not(:last-of-type) {
      margin-right: 12px;
    }
  }
`;
