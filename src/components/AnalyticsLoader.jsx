import React, { useEffect } from 'react';

const GA_MEASUREMENT_ID = 'G-7605VFKQQT';

export default function AnalyticsLoader() {
  useEffect(() => {
    // Check if GA script already exists to prevent duplicate loading
    if (document.getElementById('ga4-script')) {
      return;
    }

    // Create the script tag for Google Analytics
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.id = 'ga4-script';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      // Initialize gtag.js global function after the script loads
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', GA_MEASUREMENT_ID);

      console.log('Google Analytics 4 loaded and initialized');
    };

    return () => {
      // Clean up on unmount (though this is a global loader)
      const existingScript = document.getElementById('ga4-script');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  // This component doesn't render any visible UI
  return null;
}