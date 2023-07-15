import React, { useState, useEffect, useCallback, createContext } from 'react';
import Lenis from '@studio-freight/lenis';

const LenisContext = createContext(null);

const LenisProvider = ({ children }) => {
  const [lenis, setLenis] = useState(null);

  const raf = useCallback(
    (time) => {
      lenis?.raf(time);
      requestAnimationFrame(raf);
    },
    [lenis]
  );

  useEffect(() => {
    if (!lenis) {
      setLenis(
        new Lenis({
          duration: 1.8,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          infinite: false,
          smooth: true,
        })
      );
    }
    requestAnimationFrame(raf);

    return () => {
      lenis?.destroy();
    };
  }, [lenis, raf]);

  return (
    <LenisContext.Provider value={{ lenis }}>
      {children}
    </LenisContext.Provider>
  );
};

export { LenisProvider, LenisContext };
