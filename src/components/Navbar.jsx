import React from 'react';
import { Link } from 'react-router-dom'; 
import { useTranslation } from 'react-i18next'; // Importa useTranslation
import '../views/Navbar.css'; 
import LanguageSelector from './languageSelector'; 
import Book from './book';

const Navbar = ({ themeClass }) => {
  const { t } = useTranslation(); // Inicializa useTranslation

  return (
    <div className={`navbar ${themeClass}`}>
      <nav>

        <ul className="menuList">
        <li>
        <Link to="/">{t('home')}</Link>
        </li>
          <li>
            <Link to="/services">{t('services')}</Link>
          </li>
          <li>
            <Link to="/academy">{t('academy')}</Link>
          </li> 
          <li>
            <Link to="/contact">{t('contact')}</Link>
          </li> 
        </ul>
        <div id='language'>
          <LanguageSelector /> 
        </div>
        <div id='book'>
          <Book/>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
