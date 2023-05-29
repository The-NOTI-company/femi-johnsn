import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast'
import '../styles/globals.css'
import Lenis from "@studio-freight/lenis";
import { useRouter } from "next/router";

import * as gtag from "../utils/gtag";
import Script from "next/script";


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

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    })
  
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
  
    requestAnimationFrame(raf)
  }, []);

  useEffect(() => {
    const isBrowser = () => typeof window !== 'undefined';

    function scrollToTop() {
      if (!isBrowser()) return;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    router.events.on('routeChangeComplete', scrollToTop);

    return () => {
      router.events.off("routeChangeComplete", scrollToTop);
    };

  },[router.events])

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
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
