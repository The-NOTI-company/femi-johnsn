import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast'
import '../styles/globals.css'
import Lenis from "@studio-freight/lenis";
import { useRouter } from "next/router";


function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    })
  
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
  
    requestAnimationFrame(raf)
  }, []);

  useEffect(() => {
    router.events.on('routeChangeComplete', () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    });
  },[router])

  return (
    <>
      <Toaster />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
