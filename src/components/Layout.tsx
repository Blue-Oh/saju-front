import React, { useEffect } from "react";
import Header from "./Header";
import { Body } from "../pages/style/StyledLayout";

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Body>{props.children}</Body>
    </>
  );
};

export default Layout;
