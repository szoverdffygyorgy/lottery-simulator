import useStateContext from '../../state/context/state/use-state-context';
import { SUCCESS_MAP, SUCCESS_ORDER } from './constants';
import {
  Cell,
  CellTitle,
  CellValue,
  Container,
} from './lotters-success.styles';

const LotterySuccess = () => {
  const { results } = useStateContext();

  return (
    <Container>
      {SUCCESS_ORDER.map((key, index) => (
        <Cell key={index}>
          <CellTitle>{`${SUCCESS_MAP[key]} matches`}</CellTitle>
          <CellValue>{results[key]}</CellValue>
        </Cell>
      ))}
    </Container>
  );
};

export default LotterySuccess;
