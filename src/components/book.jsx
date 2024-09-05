import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../views/App.css'; 
import calendlylogo from '../images/call.png'; 

const Book = () => {
  const { i18n } = useTranslation();
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const loadCalendlyScript = () => {
    if (scriptLoaded) return; 

    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      setScriptLoaded(true);
    };
  };

  const openCalendlyPopup = () => {
    loadCalendlyScript(); 
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/techsolutionsonix/consulta-1-1?hide_gdpr_banner=1&primary_color=ffa600',
        text: '', 
        color: '#ff990083',
        textColor: '#ffffff',
        branding: undefined
      });
    } else {
      console.error("Calendly script not loaded");
    }
  };

  return (
    <div className="calendly-container">
      <button
        onClick={openCalendlyPopup}
        style={{
          backgroundImage: `url(${calendlylogo})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '35px',
          height: '35px',
          border: 'none',
          cursor: 'pointer',
          padding:'50px',     
          backgroundColor: 'transparent' 
        }}
        aria-label="Open Calendly"
      >
        
      </button>
        
    </div>
  );
};

export default Book;
