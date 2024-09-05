import React from 'react';
import { useTranslation } from 'react-i18next';
import '../views/App.css'; 
import whatsapp from '../images/whatsapp.png'; 

const Whatsapp = () => {
  const { t } = useTranslation(); // Assuming you want to use translation

  return (
    <div className="whatsapp-container">
      <a 
        href='https://wa.me/5554997040128'
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={whatsapp} alt={t('whatsapp')} />
       
      </a>
    </div>
  );
};

export default Whatsapp;
