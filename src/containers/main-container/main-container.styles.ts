import { styled } from '../../theme/theme';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 792px;
  height: 642px;
  margin: 40px auto 32px auto;
  padding: 48px 78px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.mainContainerBackground};
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 32px;
  font-size: 40px;
  font-weight: 700;
  color: ${({ theme }) => theme.primaryText};
`;
