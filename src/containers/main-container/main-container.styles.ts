import { styled } from '../../theme/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 792px;
  height: 642px;
  margin: 40px auto auto auto;
  padding: 48px 78px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.mainContainerBackground};
`;

export const Title = styled.h2`
  margin-bottom: 32px;
  font-size: 40px;
  font-weight: 700;
  color: ${({ theme }) => theme.primaryText};
`;
