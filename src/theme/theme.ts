import baseStyled, {
  css as baseCss,
  ThemedCssFunction,
  ThemedStyledInterface,
} from 'styled-components';
import colors from './colors';
import { Theme } from './types';

const theme: Theme = {
  background: colors.grey1,
  button: {
    background: colors.white,
    hover: colors.grey2,
    text: colors.blue1,
  },
  checkbox: {
    background: colors.white,
    border: colors.blue1,
    color: colors.blue1,
  },
  input: {
    border: colors.green1,
    disabledBackground: colors.white,
    text: colors.blue1,
  },
  mainContainer: {
    background: colors.white,
  },
  primary: colors.green1,
  primaryText: colors.blue1,
  secondary: colors.yellow1,
  secondaryText: colors.white,
  slider: {
    thumb: colors.white,
    thumbBorder: colors.green1,
    track: colors.green2,
  },
};

const styled = baseStyled as ThemedStyledInterface<Theme>;
const css = baseCss as ThemedCssFunction<Theme>;

export { css, styled, theme };
