import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import "../views/home.css";
import empresa from "../images/empresa.png";
import emprendimiento from "../images/emprendimiento.png";
import individuo from "../images/individuo.png";

const Home = ({ isDarkMode }) => {
  const { t } = useTranslation(); // Hook para usar traducciones

  return (
    <div className={`home ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      <header className="home-header">
      </header>
      
      <section className={`gallery-section ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
        <div className="gallery-item">
          <Link to="/empresas">
            <img src={empresa} alt={t('companies')} />
            <h2>{t('companies')}</h2>
          </Link>
        </div>
        
        <div className="gallery-item">
          <Link to="/emprendimientos">
            <img src={emprendimiento} alt={t('entrepreneurship')} />
            <h2>{t('entrepreneurship')}</h2>
          </Link>
        </div>
        <div className="gallery-item">
          <Link to="/individuos">
            <img src={individuo} alt={t('individuals')} />
            <h2>{t('individuals')}</h2>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
