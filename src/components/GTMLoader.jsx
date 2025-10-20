import React, { useEffect } from 'react';

const GTM_ID = 'GTM-T37WP637';

export default function GTMLoader() {
  useEffect(() => {
    // Check if GTM script already exists to prevent duplicate loading
    if (document.getElementById('gtm-script') || window.dataLayer?.find(item => item.event === 'gtm.js')) {
      return;
    }

    // Initialize dataLayer first
    window.dataLayer = window.dataLayer || [];
    
    // Add GTM script
    const gtmScript = document.createElement('script');
    gtmScript.id = 'gtm-script';
    gtmScript.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${GTM_ID}');
    `;
    document.head.insertBefore(gtmScript, document.head.firstChild);
    
    console.log('Google Tag Manager loaded and initialized');

    return () => {
      // Clean up on unmount
      const existingGTM = document.getElementById('gtm-script');
      if (existingGTM) {
        document.head.removeChild(existingGTM);
      }
    };
  }, []);

  // This component doesn't render any visible UI
  return null;
}