import React from "react";
import Link from "next/link";
import PreLoginLayout from "../components/layout/preLoginLayout";

export default function _404() {
  return (
    <PreLoginLayout>
      <h1>404 - Page Not Found</h1>
      <Link href="/" prefetch>
        <a>Go back home</a>
      </Link>
    </PreLoginLayout>
  );
}
