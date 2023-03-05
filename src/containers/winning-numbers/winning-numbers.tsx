import Input from '../../components/input/input';
import useStateContext from '../../state/context/state/use-state-context';
import { Container, InputContainer, Title } from './winning-numbers.styles';

const WinningNumbers = () => {
  const { drawnNumbers } = useStateContext();

  return (
    <Container>
      <Title>Winning numbers:</Title>
      <InputContainer>
        {drawnNumbers.map((value, index) => (
          <Input key={index} disabled index={index} value={value} />
        ))}
      </InputContainer>
    </Container>
  );
};

export default WinningNumbers;
