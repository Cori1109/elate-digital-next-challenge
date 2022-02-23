import * as React from "react";
import baseStyled, {
  createGlobalStyle as baseCreateGlobalStyle,
  css as baseCss,
  ThemedCssFunction,
  ThemedStyledInterface,
  useTheme as baseUseTheme,
  StyledComponent as BaseStyledComponent,
} from "styled-components";
import { theme } from "./theme";

export type Theme = typeof theme;
/**
 * Overrides the default StyledComponent type to assign the theme.
 */
export type StyledComponent<
  C extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
  O extends object = {},
  A extends keyof any = never
> = BaseStyledComponent<C, Theme, O, A>;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export const css = baseCss as ThemedCssFunction<Theme>;
export const createGlobalStyle = baseCreateGlobalStyle;
export const useTheme = baseUseTheme as () => Theme;
