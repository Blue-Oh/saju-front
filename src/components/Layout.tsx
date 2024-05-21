import React, { useEffect } from "react";
import Head from "./Head";
import { Body } from "../style/StyledLayout";

const Layout = (props: { children: React.ReactNode; title: string }) => {
  return (
    <>
      <Head title={props.title} />
      <Body>{props.children}</Body>
    </>
  );
};

export default Layout;
