import useStateContext from '../../state/context/state/use-state-context';
import {
  Attempts,
  Container,
  Grid,
  LargeText,
  Text,
} from './aggregated-results.styles';
import { PLAY_COST, WEEKS_IN_A_YEAR } from './constants';

const AggregatedResults = () => {
  const { attempts, isDrawing } = useStateContext();

  return (
    <Container>
      <Grid>
        <LargeText>Number of tickets: </LargeText>
        <Attempts>{attempts}</Attempts>
        <Text>Years spent:</Text>
        <Text isHighlighted={!isDrawing}>
          {Math.floor(attempts / WEEKS_IN_A_YEAR)}
        </Text>
        {/* Placeholder in case of a jackpot */ !isDrawing && <Text />}
        <Text>Cost of tickets: </Text>
        <Text>
          {new Intl.NumberFormat('hu-HU', {
            style: 'currency',
            currency: 'HUF',
          }).format(attempts * PLAY_COST)}
        </Text>
      </Grid>
    </Container>
  );
};

export default AggregatedResults;
