import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import LayoutStyle from "./index.style";

const Layout = ({ route }) => {
  return (
    <LayoutStyle>
      {route.header && <Header />}
      {route.component}
      {route.footer && <Footer />}
    </LayoutStyle>
  );
};
export default Layout;
