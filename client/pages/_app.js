import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast'
import '../styles/globals.css'
import Lenis from "@studio-freight/lenis";


function MyApp({ Component, pageProps }) {

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

  return (
    <>
      <Toaster />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
