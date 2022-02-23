import { css } from "styled-components";

// TODO: Update this with the actual colors in the dsign
const COLORS = {
  // Primary:
  primary900: "#031D78",
  primary700: "#163294",
  primary500: "#3532C9",
  primary300: "#404DC5",
  primary100: "#CAD9F6",

  // Neutral:
  neutral900: "#1A1A1A",
  neutral800: "#333333",
  neutral700: "#4D4D4D",
  neutral600: "#666666",
  neutral500: "#949494",
  neutral400: "#BABABA",
  neutral300: "#EBEBEB",
  neutral200: "#F7F7F7",
  neutral100: "#FCFCFC",

  // Error:
  error900: "#780303",
  error500: "#C93232",
  error100: "#F6CACA",

  // Highlight:
  highlight500: "#ece771",
};

const FONT_FAMILY = {
  default: "'Poppins', sans-serif",
  quote: "'Source Serif Pro', serif",
  articleBody: "'Source Serif Pro', serif",
};

const FONT_SIZE = {
  fontSize1: "12px",
  fontSize2: "14px",
  fontSize3: "16px",
  fontSize4: "18px",
  fontSize5: "20px",
  fontSize6: "24px",
  fontSize7: "30px",
  fontSize8: "36px",
  fontSize9: "48px",
  fontSize10: "60px",
  fontSize11: "72px",
};

const TEXT = {
  // TODO: Update this:
  body: css`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
  `,
};

// TODO: Adapt this to the actual designs.
const ELEVATION = {
  none: css`
    box-shadow: none;
  `,
  low: css`
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
      0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2);
  `,
  medium: css`
    box-shadow: 0 12px 17px 2px rgba(0, 0, 0, 0.14),
      0 5px 22px 4px rgba(0, 0, 0, 0.12), 0 7px 8px -4px rgba(0, 0, 0, 0.2);
  `,
  high: css`
    box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
      0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);h
  `,
};

// TODO: Update this
const RESPONSIVE_BREAKPOINTS = {
  small: "100px",
  mediumSmall: "100px",
  medium: "100px",
  large: "100px",
};

export const TRANSITION = css`
  transition: 0.2s all ease;
`;

export const STANDARD_BORDER_RADIUS = "10px";

export const TRANSPARENT = "rgba(255, 255, 255, 0)";

export const theme = {
  colors: COLORS,
  responsiveBreakpoints: RESPONSIVE_BREAKPOINTS,
  fontFamily: FONT_FAMILY,
  text: TEXT,
  elevation: ELEVATION,
  transition: TRANSITION,
  borderRadius: STANDARD_BORDER_RADIUS,
  transparent: TRANSPARENT,
};
