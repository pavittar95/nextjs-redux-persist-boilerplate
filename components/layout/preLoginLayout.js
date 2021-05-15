import React from "react";
import Header from "../header";
import Footer from "../footer";

export default function preLoginLayout({ children }) {
  return (
    <>
      <Header />
      <div className="container-fluid main-container">{children}</div>
      <Footer />
    </>
  );
}
