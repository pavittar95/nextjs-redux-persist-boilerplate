import React from "react";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";
import { getPageMeta } from "../utils/metaConstants";

export default function Meta() {
  const router = useRouter();
  const meta = getPageMeta(router?.pathname);
  return (
    <Head>
      <title>{meta?.title}</title>
      <meta name="description" content={meta?.description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
