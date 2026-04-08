import type { AppProps } from "next/app";
import Head from "next/head";
import { BackToTop } from "../src/components/BackToTop";
import "../styles/styles.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#030303" />
      </Head>
      <Component {...pageProps} />
      <BackToTop />
    </>
  );
}
