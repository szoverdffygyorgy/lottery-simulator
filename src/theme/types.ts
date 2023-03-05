type HEX = `#${string}`;

type RGB = `rgb(${number}, ${number}, ${number})`;

type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;

export type Color = HEX | RGB | RGBA;

export type Colors = {
  blue1: Color;
  green1: Color;
  green2: Color;
  grey1: Color;
  yellow1: Color;
  white: Color;
};

export type Theme = {
  background: Color;
  checkbox: {
    border: Color;
    color: Color;
  };
  input: {
    border: Color;
    disabledBackground: Color;
    text: Color;
  };
  mainContainerBackground: Color;
  primary: Color;
  primaryText: Color;
  secondary: Color;
  secondaryText: Color;
  slider: {
    thumb: Color;
    thumbBorder: Color;
    track: Color;
  };
};
