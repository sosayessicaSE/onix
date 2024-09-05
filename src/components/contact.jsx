import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import officeImage from '../images/office.gif';
import phoneIcon from '../images/phone.png';
import emailIcon from '../images/email.png';
import '../views/contact.css';
import Book from './book';

const contactDetails = {
  office: {
    imageUrl: officeImage,
    phone: {
      number: "+55 54 99704-0128",
      imageUrl: phoneIcon
    },
    email: {
      address: "techsolutionsonix@gmail.com",
      imageUrl: emailIcon
    },
    hours: {
      weekdays: "9:00 AM - 6:00 PM",
      
    },
    
  }
};

const Contact = ({ themeClass }) => {
  const { t } = useTranslation();

  return (
    <div className={`contact-container ${themeClass}`}>
    
      <div className={`contact-details ${themeClass}`}>
        <div className="contact-image">
          <img src={contactDetails.office.imageUrl} alt={t('office')} />
        </div>
        <div className={`contact-info ${themeClass}`}>
  <a href='https://wa.me/5554997040128' className="contact-item">
    <img src={contactDetails.office.phone.imageUrl} alt={t('phone')} style={{ height: '100px', width: '200px' }}  />
  </a>
          <a href={`mailto:${contactDetails.office.email.address}`} className="contact-item">
            <img src={contactDetails.office.email.imageUrl} alt={t('email')}  style={{ height: '100px', width: '200px' }}  />
            </a>

          {/* Pass themeClass to Book component */}
          <Book themeClass={themeClass} />
        
        </div>
      </div>
    </div>
  );
};

export default Contact;
