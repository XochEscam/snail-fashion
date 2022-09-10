import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function Layout(props) {
  const { children } = props;

  return (
    <div>
      <Header></Header>

      <div>{children}</div>

      <Footer></Footer>
    </div>
  );
}
