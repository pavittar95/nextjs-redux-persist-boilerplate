import React from "react";
import Header from "../header";

export default function preLoginLayout({ children }) {
  return (
    <>
      <Header />
      <div className="container-fluid">{children}</div>
    </>
  );
}
