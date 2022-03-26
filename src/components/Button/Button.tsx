import React, { FC } from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import { getShade, ThemeShade } from "../../theming/utils";
import { SylnishiTheme } from "../../theming";

interface StyledButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor: string;
  color: string;
  width: string;
  border: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  box-sizing: border-box;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  font-family: "Inter", sans-serif;
  border: ${(props) => props.border};
  margin: 0;
  padding: 15px 15px;
  border-radius: 8px;
  min-height: 10px;
  width: ${(props) => props.width};
  overflow: visible;
  text-align: center;
  transition: background-color ease-in-out 0.3s, border ease-in-out 0.3s;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.typography.fontSize.regular};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;
StyledButton.defaultProps = { theme: SylnishiTheme };

type ButtonType = "primary" | "secondary" | "outlined" | "transparent" | "alarm";
type ButtonDisplayType = "block" | "large";
type ButtonAlignmentType = "centered" | "squeezed" | "start";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  btnType?: ButtonType;
  display?: ButtonDisplayType;
  shade?: ThemeShade;
  alignment?: ButtonAlignmentType;
  leading?: React.ReactChild;
  trailing?: React.ReactChild;
}

const Button: FC<ButtonProps> = ({
  btnType = "primary",
  display = "block",
  shade = "base",
  leading,
  trailing,
  children,
}) => {
  const theme = SylnishiTheme;

  let color, backgroundColor, border;
  switch (btnType) {
    case "secondary":
      backgroundColor = getShade("secondary", shade);
      color = theme.colors.onSecondary;
      border = `2px solid ${backgroundColor}`;
      break;
    case "transparent":
      backgroundColor = "transparent";
      color = theme.colors.onBackground;
      border = `2px solid ${backgroundColor}`;
      break;
    case "outlined":
      backgroundColor = "transparent";
      color = getShade("primary", shade);
      border = `2px solid ${color}`;
      break;
    case "alarm":
      backgroundColor = getShade("error", shade);
      color = theme.colors.onError;
      border = `2px solid ${backgroundColor}`;
      break;
    case "primary":
    default:
      backgroundColor = getShade("primary", shade);
      color = theme.colors.onPrimary;
      border = `2px solid ${backgroundColor}`;
      break;
  }

  const width = display === "block" ? "100%" : "auto";

  return (
    <StyledButton color={color} backgroundColor={backgroundColor} width={width} border={border}>
      {children}
    </StyledButton>
  );
};

export default Button;
