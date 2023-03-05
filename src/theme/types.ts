type HEX = `#${string}`;

type RGB = `rgb(${number}, ${number}, ${number})`;

type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;

export type Color = HEX | RGB | RGBA;

export type Colors = {
  blue1: Color;
  green1: Color;
  green2: Color;
  green3: Color;
  yellow1: Color;
  white: Color;
};

export type Theme = {
  primary: Color;
  secondary: Color;
  text: Color;
  input: {
    active: Color;
    border: Color;
    hover: Color;
    text: Color;
  };
  slider: {
    active: Color;
    hover: Color;
    thumb: Color;
    thumbBorder: Color;
    track: Color;
  };
};
