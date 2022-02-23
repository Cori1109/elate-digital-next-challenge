import { useMediaQuery } from "@react-hook/media-query";
import { useTheme } from "./index";

export enum ScreenSize {
  SMALL = 1,
  MEDIUM_SMALL,
  MEDIUM_LARGE,
  LARGE,
}

export const useCurrentBreakpoint = (): ScreenSize => {
  const { responsiveBreakpoints } = useTheme();
  const belowSmall = useMediaQuery(
    `only screen and (max-width: ${responsiveBreakpoints.small})`
  );
  const belowMediumSmall = useMediaQuery(
    `only screen and (max-width: ${responsiveBreakpoints.medium})`
  );
  const belowMediumLarge = useMediaQuery(
    `only screen and (max-width: ${responsiveBreakpoints.large})`
  );

  if (belowSmall) return ScreenSize.SMALL;
  if (!belowSmall && belowMediumSmall) return ScreenSize.MEDIUM_SMALL;
  if (!belowMediumSmall && belowMediumLarge) return ScreenSize.MEDIUM_LARGE;

  return ScreenSize.LARGE;
};
