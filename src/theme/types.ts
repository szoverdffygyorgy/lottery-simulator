type HEX = `#${string}`;

type RGB = `rgb(${number}, ${number}, ${number})`;

type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;

export type Color = HEX | RGB | RGBA;

export type Colors = {
  blue1: Color;
  green1: Color;
  green2: Color;
  grey1: Color;
  grey2: Color;
  yellow1: Color;
  white: Color;
};

export type Theme = {
  background: Color;
  button: {
    background: Color;
    hover: Color;
    text: Color;
  };
  checkbox: {
    background: Color;
    border: Color;
    color: Color;
  };
  input: {
    border: Color;
    disabledBackground: Color;
    text: Color;
  };
  mainContainer: {
    background: Color;
  };
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

type MinMax = 'min' | 'max';

type Metric = 'width' | 'height';

type Breakpoint = `(${MinMax}-${Metric}: ${number}px)`;

type Device = 'mobile' | 'tablet';

export type WidthBreakpoints = Record<Device, Breakpoint>;

export type HeightBreakpoints = Partial<Record<Device, Breakpoint>>;
