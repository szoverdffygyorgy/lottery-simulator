import useStateContext from '../../state/context/state/use-state-context';
import { BoldText, Container, Grid, Text } from './aggregated-results.styles';

const AggregatedResults = () => {
  const { attempts, isDrawing } = useStateContext();

  return (
    <Container>
      <Grid>
        <BoldText>Number of tickets: </BoldText>
        <BoldText>{attempts}</BoldText>
        <Text>Years spent:</Text>
        <Text isHighlighted={!isDrawing}>{Math.floor(attempts / 12)}</Text>
        {/* Placeholder in case of a jackpot */ !isDrawing && <Text />}
        <Text>Cost of tickets: </Text>
        <Text>
          {new Intl.NumberFormat('hu-HU', {
            style: 'currency',
            currency: 'HUF',
          }).format(attempts * 300)}
        </Text>
      </Grid>
    </Container>
  );
};

export default AggregatedResults;
