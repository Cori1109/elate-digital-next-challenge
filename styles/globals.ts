import {
  boxModelFix,
  resetAnchor,
  resetButton,
  resetCSS,
  resetInput,
} from "@styles/resets";
import { createGlobalStyle, css } from "./index";

const globalStyles = css`
  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => theme.fontFamily.default};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.neutral900};
    background-color: ${({ theme }) => theme.colors.neutral200};
  }

  button,
  a {
    cursor: pointer;
  }
`;

export const GlobalStyles = createGlobalStyle`
  ${resetCSS};
  ${resetButton};
  ${resetInput};
  ${resetAnchor};
  ${boxModelFix};
  ${globalStyles};
`;
