import React from "react";
import PageHeader from "../PageHeader/PageHeader";
import { Props } from "../../types";

export default function Layout(props: Props) {
  return (
    <React.Fragment>
      <PageHeader />
      halo
      <main>{props.children}</main>
    </React.Fragment>
  );
}

// const Layout = (props: Props) => (
//   <>
//     <PageHeader />
//     <main>{props.children}</main>
//   </>
// );

// export default Layout;
