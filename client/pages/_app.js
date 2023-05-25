import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast'
import '../styles/globals.css'
import Lenis from "@studio-freight/lenis";
import { useRouter } from "next/router";


function MyApp({ Component, pageProps }) {
  const router = useRouter()

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
      <Toaster />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
