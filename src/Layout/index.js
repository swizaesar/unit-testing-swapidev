import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import HeaderDetail from "../Components/Header/headerDetail";
import LayoutStyle from "./index.style";

const Layout = ({ route }) => {
  const headerRenderType = () => {
    if (route.header) {
      switch (route.headerType) {
        case "1":
          return <Header />;
        case "2":
          return <HeaderDetail />;
        default:
          return false;
      }
    } else {
      return false;
    }
  };
  return (
    <LayoutStyle>
      {headerRenderType()}
      {route.component}
      {route.footer && <Footer />}
    </LayoutStyle>
  );
};
export default Layout;
