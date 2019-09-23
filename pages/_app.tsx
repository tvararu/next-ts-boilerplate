import App from "next/app";
import Head from "next/head";
import "../lib/main.css";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>next-ts-boilerplate</title>
          <meta name="description" content="An online app" />
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
