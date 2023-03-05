import baseStyled, {
  css as baseCss,
  ThemedCssFunction,
  ThemedStyledInterface,
} from 'styled-components';
import colors from './colors';
import { Theme } from './types';

const theme: Theme = {
  input: {
    active: colors.green1,
    border: colors.green2,
    hover: colors.green3,
    text: colors.blue1,
  },
  primary: colors.green1,
  secondary: colors.green2,
  slider: {
    active: colors.green1,
    hover: colors.green2,
    thumb: colors.white,
    thumbBorder: colors.green1,
    track: colors.green2,
  },
  text: colors.blue1,
};

const styled = baseStyled as ThemedStyledInterface<Theme>;
const css = baseCss as ThemedCssFunction<Theme>;

export { css, styled, theme };
