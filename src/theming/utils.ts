import { SylnishiTheme } from ".";

export type ThemeShade = "base" | "light" | "dark";

export function getShade(color: "primary" | "secondary" | "error", shade: ThemeShade): string {
  const theme = SylnishiTheme;
  const extension = shade === "base" ? "" : shade.replace(shade[0], shade[0].toUpperCase());
  const colorKey = `${color}${extension}`;
  // TODO this is a bit ugly
  return (theme.colors as any)[colorKey];
}
