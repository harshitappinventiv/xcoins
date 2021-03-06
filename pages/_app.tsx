import React from "react";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { Provider as NextProvider } from "next-auth/client";
import "../styles/globals.css";

import store from "../app/store";
// ******************************* next-18nNext ****************************
import { appWithTranslation } from "next-i18next";

const MyApp: any = (props: AppProps) => {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles: any = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Xcoins</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <NextProvider session={pageProps.session}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Layout>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </Provider>
      </NextProvider>
    </React.Fragment>
  );
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default appWithTranslation(MyApp);
