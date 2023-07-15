import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast'
import '../styles/globals.css'
import { useRouter } from "next/router";

import * as gtag from "../utils/gtag";
import Script from "next/script";

import { motion } from 'framer-motion';
import {LenisProvider} from '../context/lenisContext';


const AnimationLayout = ({ children }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();
  
  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsAnimating(true);
    };

    const handleRouteChangeComplete = () => {
      setIsAnimating(false);
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router.events]);

  return (
    <motion.div
      key={router.asPath}
      initial={{ opacity: 0 }}
      animate={{ opacity: isAnimating ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.03 }}
    >
      {children}
    </motion.div>
  )
}


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
        <AnimationLayout>
          <Component {...pageProps} />
        </AnimationLayout>
      </LenisProvider>
    </>
  )
}

export default MyApp
