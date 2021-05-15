import React from "react";
import Header from "../header";
import Footer from "../footer";

export default function preLoginLayout({ children }) {
  return (
    <>
      <Header />
      <div className="container-fluid">{children}</div>
      <Footer />
    </>
  );
}
