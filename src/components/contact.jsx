import React, { useState, useRef } from 'react';
import Modal from 'react-modal';
import { useTranslation } from 'react-i18next';
import officeImage from '../images/office.gif';
import phoneIcon from '../images/phone.png';
import emailIcon from '../images/email.png';
import "../views/contact.css";

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
  }
};

const Contact = () => {
  const { i18n } = useTranslation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const language = i18n.language || 'en';

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="contact-container">
      <h2>{i18n.t('contactUs')}</h2>
      <div className="contact-details">
        <div className="contact-image">
          <img src={contactDetails.office.imageUrl} alt="Office" />
        </div>
        <div className="contact-info">
          <p>
            <img src={contactDetails.office.phone.imageUrl} alt="Phone" />
            {contactDetails.office.phone.number}
          </p>
          <p>
            <img src={contactDetails.office.email.imageUrl} alt="Email" />
            <a href={`mailto:${contactDetails.office.email.address}`}>{contactDetails.office.email.address}</a>
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;
