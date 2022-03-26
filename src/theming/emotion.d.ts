import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      primary: string;
      primaryLight: string;
      primaryDark: string;
      secondary: string;
      secondaryLight: string;
      secondaryDark: string;
      background: string;
      surface: string;
      error: string;
      errorLight: string;
      errorDark: string;
      onPrimary: string;
      onSecondary: string;
      onBackground: string;
      onSurface: string;
      onError: string;
    };
    shadows: {
      small: string;
      medium: string;
      large: string;
    };
    typography: {
      fontWeight: {
        bold: number | string;
        medium: number | string;
        regular: number | string;
      };
      fontSize: {
        h1: string;
        h2: string;
        h3: string;
        large: string;
        regular: string;
        small: string;
        tiny: string;
      };
      lineHeight: {
        h1: string;
        h2: string;
        h3: string;
        large: string;
        largeNone: string;
        largeTight: string;
        regular: string;
        regularNone: string;
        regularTight: string;
        small: string;
        smallNone: string;
        smallTight: string;
        tiny: string;
        tinyNone: string;
        tinyTight: string;
      };
    };
  }
}
