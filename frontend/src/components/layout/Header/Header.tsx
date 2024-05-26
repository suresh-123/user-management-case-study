import React from "react";
import { StyledAppBar, StyledTypography } from "./Header.styles";
import { Toolbar } from "@mui/material";
import { Button } from "../../forms";

import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <StyledTypography
          variant="body1"
          color="primary"
          component={Link}
          to="/"
        >
          User Management Portal
        </StyledTypography>
        <Button color="inherit" component={Link} to="/">
          User List
        </Button>
        <Button color="inherit" component={Link} to="/create-user">
          Create User
        </Button>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
