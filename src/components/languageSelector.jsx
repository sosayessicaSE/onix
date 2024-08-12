import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa';
import '../views/LanguageSelector.css';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Establece inglés como idioma predeterminado al cargar el componente
    if (!i18n.language) {
      i18n.changeLanguage('en');
    }
  }, [i18n]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false); 
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="language-selector">
      <button onClick={toggleMenu} className="globe-btn">
        <FaGlobe size={50} />
      </button>
      {isOpen && (
        <div className="language-menu">
          <button onClick={() => changeLanguage('es')} className="lang-option">Español</button>
          <button onClick={() => changeLanguage('en')} className="lang-option">English</button>
          <button onClick={() => changeLanguage('pt')} className="lang-option">Português</button>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
