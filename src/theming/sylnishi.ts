/**
 * Sylnishi colors
 */
const SYLNISHI_COLORS = {
  ink: {
    light: "#111E6A",
    base: "#0D1234",
    dark: "#000420",
  },
  grey: {
    light: "#F9F9F9",
    base: "#F1F1F1",
    darker: "#E9E9E9",
    dark: "#626575",
  },
  blue: {
    light: "#274FDB",
    base: "#1337B8",
    dark: "#0729A0",
  },
  yellow: {
    light: "#FFE877",
    base: "#FFD400",
    dark: "#DC9E00",
  },
  red: {
    light: "#FF766D",
    base: "#CF2A20",
    dark: "#C01A0F",
  },
  green: {
    light: "#13C992",
    base: "#00B17C",
    dark: "#00996B",
  },
  white: {
    base: "#FFFFFF",
  },
};

/**
 * Sylnishi shadows
 */
const SYLNISHI_SHADOWS = {
  small: "0px 0px 1px rgba(20, 20, 20, 0.04), 0px 0px 8px rgba(20, 20, 20, 0.08)",
  medium: "0px 0px 1px rgba(20, 20, 20, 0.08), 0px 1px 8px 2px rgba(20, 20, 20, 0.08)",
  large: "0px 0px 1px rgba(20, 20, 20, 0.08), 0px 10px 24px 8px rgba(20, 20, 20, 0.18)",
};

/**
 * Sylnishi typography
 */
const SYLNISHI_TYPOGRAPHY = {
  fontWeight: {
    bold: 700,
    medium: 500,
    regular: 400,
  },
  fontSize: {
    h1: "48px",
    h2: "32px",
    h3: "24px",
    large: "18px",
    regular: "16px",
    small: "14px",
    tiny: "12px",
  },
  lineHeight: {
    h1: "56px",
    h2: "36px",
    h3: "32px",
    large: "24px",
    largeNone: "18px",
    largeTight: "20px",
    regular: "24px",
    regularNone: "16px",
    regularTight: "20px",
    small: "20px",
    smallNone: "14px",
    smallTight: "16px",
    tiny: "16px",
    tinyNone: "12px",
    tinyTight: "14px",
  },
};

const SYLNISHI_THEME = {
  colors: {
    primary: SYLNISHI_COLORS.blue.base,
    primaryLight: SYLNISHI_COLORS.blue.light,
    primaryDark: SYLNISHI_COLORS.blue.dark,
    secondary: SYLNISHI_COLORS.grey.base,
    secondaryLight: SYLNISHI_COLORS.grey.light,
    secondaryDark: SYLNISHI_COLORS.grey.darker,
    background: SYLNISHI_COLORS.white.base,
    surface: SYLNISHI_COLORS.grey.light,
    error: SYLNISHI_COLORS.red.base,
    errorLight: SYLNISHI_COLORS.red.light,
    errorDark: SYLNISHI_COLORS.red.dark,
    onPrimary: SYLNISHI_COLORS.white.base,
    onSecondary: SYLNISHI_COLORS.ink.base,
    onBackground: SYLNISHI_COLORS.ink.base,
    onSurface: SYLNISHI_COLORS.ink.base,
    onError: SYLNISHI_COLORS.white.base,
    ...SYLNISHI_COLORS,
  },
  shadows: SYLNISHI_SHADOWS,
  typography: SYLNISHI_TYPOGRAPHY,
};

export default SYLNISHI_THEME;
