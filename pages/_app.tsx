import "@/styles/globals.css";
import "@/styles/index.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@material-tailwind/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Rex Health</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/rex-logo.png" />
      </Head>
      <div>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </div>
    </>
  );
}
