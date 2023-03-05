import { styled } from '../../theme/theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 18px;
`;

export const Title = styled.h3`
  margin-right: 57px;
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.primaryText};
`;

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

  display: grid;
  place-content: center;

  &::before {
    content: '';
    width: 28px;
    height: 28px;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 2px 2px ${({ theme }) => theme.checkbox.color};
  }

  &:checked::before {
    transform: scale(1);
    background-color: CanvasText;
    transform-origin: bottom left;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  }
`;
