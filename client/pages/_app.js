import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast'
import '../styles/globals.css'
import { useRouter } from "next/router";

import * as gtag from "../utils/gtag";
import Script from "next/script";

import {LenisProvider} from '../context/lenisContext';



function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);  
    
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);


  return (
    <>
      <>
        <Script
          strategy="afterInteractive"
          src={ `https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={ {
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtag.GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </>
      <Toaster />
      <LenisProvider>
        <Component {...pageProps} />
      </LenisProvider>
    </>
  )
}

export default MyApp
