import React from "react";
import { Box } from "@mui/material";
import { StyledContainer } from "./Container.styles";
import { Typography } from "../../display";
import { IContainerProps } from "../../../types";

const Container: React.FC<IContainerProps> = ({
  children,
  title,
  maxWidth = "sm",
}) => {
  return (
    <StyledContainer maxWidth={maxWidth}>
      <Typography variant="h4" component="span">
        {title}
      </Typography>
      <Box>{children}</Box>
    </StyledContainer>
  );
};

export default Container;
