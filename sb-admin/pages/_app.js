import Head from "next/head";
import $ from 'jquery'
import { SessionProvider } from "next-auth/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  
  return (
    <>
    
      <SessionProvider session={session}>
        <ToastContainer/>
      <Component {...pageProps} />
    </SessionProvider>
      
    </>
  );
}

export default MyApp;
