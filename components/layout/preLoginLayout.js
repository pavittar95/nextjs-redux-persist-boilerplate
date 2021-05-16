import React from "react";
import Header from "../common/header";
import Footer from "../common/footer";

export default function preLoginLayout({ children }) {
  return (
    <>
      <Header />
      <div className="container-fluid main-container">{children}</div>
      <Footer />
    </>
  );
}
