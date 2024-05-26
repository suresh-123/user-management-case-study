import React from "react";
import { ButtonProps } from "@mui/material";
import { StyledButton } from "./Button.styles";

interface IProps extends ButtonProps {
  to?: string;
}

const Button: React.FC<IProps> = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
