import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ILayoutProps } from "../../types";
import { StyledMainContainer, StyledContent } from "./MainContainer.styles";

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <StyledMainContainer>
      <Header />
      <StyledContent>{children}</StyledContent>
      <Footer />
    </StyledMainContainer>
  );
};

export default Layout;
