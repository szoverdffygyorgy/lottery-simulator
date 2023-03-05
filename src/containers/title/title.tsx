import Logo from '../../components/logo/logo';
import { Container, TitleText } from './title.styles';

const Title = () => {
  return (
    <Container>
      <Logo />
      <TitleText>Lottery Simulator</TitleText>
    </Container>
  );
};

export default Title;
