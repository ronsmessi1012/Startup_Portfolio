import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    const sendPageView = () => {
      if (typeof window.gtag === 'function') {
        window.gtag('config', 'G-Q6QKBES5DD', {
          page_path: location.pathname,
        });
      } else {
        console.warn('Google Analytics not initialized: gtag is not defined');
      }
    };

    sendPageView();
  }, [location]);
};

export default usePageTracking;
