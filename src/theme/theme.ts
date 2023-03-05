import baseStyled, {
  css as baseCss,
  ThemedCssFunction,
  ThemedStyledInterface,
} from 'styled-components';
import colors from './colors';
import { Theme } from './types';

const theme: Theme = {
  background: colors.grey1,
  checkbox: {
    border: colors.blue1,
    color: colors.blue1,
  },
  input: {
    active: colors.green1,
    border: colors.green1,
    disabledBackground: colors.white,
    hover: colors.green3,
    text: colors.blue1,
  },
  mainContainerBackground: colors.white,
  primary: colors.green1,
  primaryText: colors.blue1,
  secondary: colors.yellow1,
  secondaryText: colors.white,
  slider: {
    active: colors.green1,
    hover: colors.green2,
    thumb: colors.white,
    thumbBorder: colors.green1,
    track: colors.green3,
  },
};

const styled = baseStyled as ThemedStyledInterface<Theme>;
const css = baseCss as ThemedCssFunction<Theme>;

export { css, styled, theme };
