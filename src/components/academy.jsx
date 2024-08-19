import React from 'react';
import { useTranslation } from 'react-i18next';
import "../views/classes.css"; // Crea y aplica tus estilos para la página de clases
import webDev from '../images/webDev.gif';
import advWebDev from '../images/advWebDev.gif';
import beginner from '../images/beginnerCoding.gif';
import mobile from '../images/mobileCoding.gif';

const classes = [
  {
    id: 1,
    titleKey: 'fundamentalsWebDevelopmentTitle',
    descriptionKey: 'fundamentalsWebDevelopmentDescription',
    durationKey: 'webweeks',
    format: 'Online',
    imageUrl: webDev, 
    priceKey: 'priceWeb'
  },
  {
    id: 4,
    titleKey: 'introductionToProgrammingTitle',
    descriptionKey: 'introductionToProgrammingDescription',
    durationKey: 'begweeks',
    format: 'Online',
    imageUrl: beginner,
    priceKey: 'priceInt'
  },
  {
    id: 2,
    titleKey: 'advancedWebDevelopmentTitle',
    descriptionKey: 'advancedWebDevelopmentDescription',
    durationKey: 'advweeks',
    format: 'Online',
    imageUrl: advWebDev, 
    priceKey: 'priceAdvWeb'
  },
  {
    id: 3,
    titleKey: 'mobileAppDevelopmentTitle',
    descriptionKey: 'mobileAppDevelopmentDescription',
    durationKey: 'mobweeks',
    format: 'Online',
    imageUrl: mobile, 
    priceKey: 'priceMobile'
  },
];

const OnixAcademy = ({ isDarkMode }) => {
  const { t } = useTranslation();

  return (
    <div className={`classes ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      <h1>{t('onixAcademyTitle')}</h1>
      <p style={{fontSize: "22px"}}>{t('onixAcademyDescription')}</p>

      <div className="classes-list">
        {classes.map(cls => (
          <div key={cls.id} className="class-card">
            <img
              src={cls.imageUrl}
              alt={t(cls.titleKey)}
              className={`class-image ${isDarkMode ? 'dark-theme' : 'light-theme'}`}
            />
            <h3>{t(cls.titleKey)}</h3>
            <p>{t(cls.descriptionKey)}</p>
            <div className='infoClasses'>
              <p><strong>{t('duration')}: </strong>{t(cls.durationKey)}</p>
              <p><strong>{t('format')}: </strong>{cls.format}</p>
              <p><strong>{t('price')}: </strong>{t(cls.priceKey)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnixAcademy;
