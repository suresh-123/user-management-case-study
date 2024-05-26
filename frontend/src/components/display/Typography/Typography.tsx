import React from "react";
import { TypographyProps } from "@mui/material";
import { StyledTypography } from "./Typography.styles";

interface IProps extends TypographyProps {
  to?: string;
}

const Typography: React.FC<IProps> = (props) => {
  return <StyledTypography {...props} />;
};

export default Typography;
