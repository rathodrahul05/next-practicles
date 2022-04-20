import Head from "next/head";
import $ from "jquery";
import { SessionProvider } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import FullLayout from "../src/layouts/FullLayout";
import "react-toastify/dist/ReactToastify.css";
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  if (Component.getLayout) {
    return Component.getLayout(
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    );
  }
  return (
    <>
      <SessionProvider session={session}>
        <ToastContainer />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
