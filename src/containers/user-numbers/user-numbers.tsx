import Input from '../../components/input/input';
import useStateContext from '../../state/context/state/use-state-context';
import { Container, InputContainer, Title } from './user-numbers.styles';

const UserNumbers = () => {
  const { numbersInPlay } = useStateContext();

  return (
    <Container>
      <Title>Your numbers:</Title>
      <InputContainer>
        {numbersInPlay.map((value, index) => (
          <Input key={index} index={index} value={value} />
        ))}
      </InputContainer>
    </Container>
  );
};

export default UserNumbers;
