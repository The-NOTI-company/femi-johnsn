import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const AnimationLayer = ({ children }) => {
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

export default AnimationLayer