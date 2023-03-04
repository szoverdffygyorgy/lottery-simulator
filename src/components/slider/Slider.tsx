import { useCallback } from 'react';
import { RANGE_MAX_VALUE, RANGE_MIN_VALUE } from './constants';
import { Container, SliderInput } from './Slider.styles';

type Props = {
  value: number;
  onChange: (newValue: number) => void;
};

const Slider = ({ value, onChange }: Props) => {
  const onSliderValueChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      onChange(parseInt(event.target.value)),
    []
  );

  return (
    <Container>
      <SliderInput
        type="range"
        min={RANGE_MIN_VALUE}
        max={RANGE_MAX_VALUE}
        value={value}
        onChange={onSliderValueChange}
      />
    </Container>
  );
};

export default Slider;
