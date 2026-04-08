import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="sl">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />

        {/* Favicon & App Icons */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <meta name="theme-color" content="#030303" />
        <meta name="msapplication-TileColor" content="#030303" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
