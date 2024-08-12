import React, { useState, useRef } from 'react';
import Modal from 'react-modal'; // Necesitarás instalar react-modal si aún no lo tienes
import { useTranslation } from 'react-i18next';
import service1Image from '../images/webservice.png';
import service2Image from '../images/mobileservice.png';
import service3Image from '../images/designservice.png';
import service4Image from '../images/cmservice.png';
import webEsVideo from '../images/web-es.mp4';
import webEnVideo from '../images/web-en.mp4';
import webPtVideo from '../images/web-pt.mp4';
import mobileEnVideo from '../images/mobile-en.mp4';
import mobileEsVideo from '../images/mobile-es.mp4'
import mobilePtVideo from '../images/mobile-pt.mp4'
import consultoriaEnVideo from '../images/consultoria-en.mp4';
import consultoriaEsVideo from '../images/consultoria-es.mp4';
import consultoriaPtVideo from '../images/consultoria-pt.mp4';
import digitalPt from '../images/digital-marketingpt.mp4';
import digitalEs from '../images/digital-marketinges.mp4';
import digitalEn from '../images/digital-marketingen.mp4';
import basicweb from '../images/basicweb.png';
import standardweb from '../images/standardweb.png';
import premiumweb from '../images/premiumweb.png';
import basicmobile from '../images/mobileBasic.png';
import standardmobile from '../images/mobileStandard.png';
import premiummobile from '../images/mobilePremium.png';
import techconsulting from '../images/techconsulting.png';
import disenoes from '../images/disenoses.png';
import disenoen from '../images/disenosen.png';
import disenopt from '../images/disenospt.png';
import logos from '../images/logos.png'
import redeses from '../images/sus-es.png'
import redesen from '../images/sus-en.png'
import redespt from '../images/sus-pt.png'
import "../views/services.css";

const services = [
  {
    id: 1,
    key: 'webDevelopment',
    descriptionKey: 'webDevelopmentDescription',
    detailsKey: 'webDevelopmentDetailsText',
    imageUrl: service1Image,
    details: {
      videoUrls: {
        en: webEnVideo,
        es: webEsVideo,
        pt: webPtVideo,
      },
      imageUrls: [
        basicweb,
        standardweb,
        premiumweb
      ],
      prices: {
        en: [
          { package: "Basic", price: "", details: "Single-page design with responsive layout.", extraInfo: "Includes 1 round of revision, a custom domain and hosting for 1 year.", imageUrl: basicweb },
          { package: "Standard", price: "", details: "Multi-page website with advanced SEO and database integration.", extraInfo: "Includes 1 round of revision, database, a custom domain and hosting for 1 year.", imageUrl: standardweb },
          { package: "Premium", price: "", details: "Complete website with e-commerce features and advanced SEO.", extraInfo: "Includes 3 rounds of revision, database, a custom domain and hosting for 1 year.", imageUrl: premiumweb }
        ],
        es: [ { 
          package: "Básico", 
          price: "", 
          details: "Diseño de una sola página con layout adaptable.", 
          extraInfo: "Incluye 1 ronda de revisión, un dominio personalizado y alojamiento por 1 año." , imageUrl: basicweb
        },
        { 
          package: "Estándar", 
          price: "", 
          details: "Sitio web de varias páginas con SEO avanzado e integración de base de datos.", 
          extraInfo: "Incluye 1 ronda de revisión, base de datos, dominio personalizado y alojamiento por 1 año.", imageUrl: standardweb
        },
        { 
          package: "Premium", 
          price: "", 
          details: "Sitio web completo con funciones de comercio electrónico y SEO avanzado.", 
          extraInfo: "Incluye 3 rondas de revisión, base de datos, dominio personalizado y alojamiento por 1 año.", imageUrl: premiumweb
        }], 
        pt: [
          { 
            package: "Básico", 
            price: "", 
            details: "Design de uma página com layout responsivo.", 
            extraInfo: "Inclui 1 rodada de revisão, um domínio personalizado e hospedagem por 1 ano.", imageUrl: basicweb
          },
          { 
            package: "Padrão", 
            price: "", 
            details: "Site de várias páginas com SEO avançado e integração de banco de dados.", 
            extraInfo: "Inclui 1 rodada de revisão, banco de dados, um domínio personalizado e hospedagem por 1 ano.", imageUrl: standardweb
          },
          { 
            package: "Premium", 
            price: "", 
            details: "Site completo com recursos de e-commerce e SEO avançado.", 
            extraInfo: "Inclui 3 rodadas de revisão, banco de dados, um domínio personalizado e hospedagem por 1 ano.", imageUrl: premiumweb
          }]
      }
    }
  },
  {
    id: 2,
    key: 'mobileApp',
    descriptionKey: 'mobileAppDescription',
    detailsKey: 'mobileAppDetailsText',
    imageUrl: service2Image,
    details: {
      videoUrls: {
        en: mobileEnVideo,
        es: mobileEsVideo,
        pt: mobilePtVideo,
      },

        imageUrls: [
          basicmobile,
          standardmobile,
          premiummobile
        ],
      
      prices: {
        en: [
          { package: "Basic", price: "", details: "Basic APK development with essential features.", extraInfo: "Includes basic testing and 1 month of support.", imageUrl: basicmobile },
          { package: "Standard", price: "", details: "APK development with additional features and optimization.", extraInfo: "Includes advanced testing, 3 months of support, and 1 round of revisions.", imageUrl: standardmobile },
          { package: "Premium", price: "", details: "Full-featured APK development with advanced features, extensive testing, and optimization.", extraInfo: "Includes extensive testing, 6 months of support and unlimited revisions.", imageUrl: premiummobile }
        ],
        es: [
          { package: "Básico", price: "", details: "Desarrollo básico de APK con funciones esenciales.", extraInfo: "Incluye pruebas básicas y 1 mes de soporte.",  imageUrl: basicmobile },
          { package: "Estándar", price: "", details: "Desarrollo de APK con características adicionales y optimización.", extraInfo: "Incluye pruebas avanzadas, 3 meses de soporte y 1 ronda de revisiones.", imageUrl: standardmobile },
          { package: "Premium", price: "", details: "Desarrollo completo de APK con funciones avanzadas, pruebas exhaustivas y optimización.", extraInfo: "Incluye pruebas extensivas, 6 meses de soporte y revisiones ilimitadas.", imageUrl: premiummobile }
        ],
        pt: [
          { package: "Básico", price: "", details: "Desenvolvimento básico de APK com funções essenciais.", extraInfo: "Inclui testes básicos e 1 mês de suporte.",  imageUrl: basicmobile },
          { package: "Padrão", price: "", details: "Desenvolvimento de APK com características adicionais e otimizações.", extraInfo: "Inclui testes avançados, 3 meses de suporte e 1 rodada de revisões.", imageUrl: standardmobile },
          { package: "Premium", price: "", details: "Desenvolvimento completo de APK com funções avançadas, testes extensivos e otimização.", extraInfo: "Inclui testes extensivos, 6 meses de suporte e revisões ilimitadas.", imageUrl: premiummobile }
        ]
      }
    }
  },
  {
    id: 3,
    key: 'technicalConsulting',
    descriptionKey: 'technicalConsultingDescription',
    detailsKey: 'technicalConsultingDetailsText',
    imageUrl: service3Image,
    details: {
      videoUrls: {
        en: consultoriaEnVideo,
        es: consultoriaEsVideo,
        pt: consultoriaPtVideo,
      },
      imageUrls: [
        techconsulting
      ],
      prices: {
        
          en: [
            { package: "Basic", price: "", details: "Developer support with basic assistance, project review, and market analysis.", extraInfo: "Includes specialized support, from project review to mentoring and technical advice.", imageUrl: techconsulting },
            { package: "Standard", price: "", details: "Comprehensive support focused on small businesses.", extraInfo: "Includes specialized support, project review at a larger scale and thorough market analysis.", imageUrl: techconsulting },
            { package: "Premium", price: "", details: "Large-scale consulting with advanced support.", extraInfo: "Large-scale consulting with advanced support, project management and brand development.", imageUrl: techconsulting }
          ],
          es: [
            { package: "Básico", price: "", details: "Soporte para desarrolladores con asistencia básica y revisión de proyectos.", extraInfo: "Brindamos soporte especializado, desde revisión de proyectos hasta mentoría y asesoría técnica.", imageUrl: techconsulting },
            { package: "Estándar", price: "", details: "Soporte completo enfocado a pequeñas empresas.", extraInfo: "Brindamos soporte especializado, revisión de proyectos a mayor escala y análisis exhaustivo de mercado.", imageUrl: techconsulting },
            { package: "Premium", price: "", details: "Consultoría a gran escala con soporte avanzado.", extraInfo: "Consultoría a gran escala con soporte avanzado, gestión de proyectos y desarrollo de marca.", imageUrl: techconsulting }
          ],
          pt: [
            { package: "Básico", price: "", details: "Suporte para desenvolvedores com assistência básica, revisão de projetos e análise de mercado.", extraInfo: "Inclui suporte especializado, desde revisão de projetos até mentoria e aconselhamento técnico.", imageUrl: techconsulting },
            { package: "Padrão", price: "", details: "Suporte completo focado em pequenas empresas.", extraInfo: "Inclui suporte especializado, revisão de projetos em maior escala, análise detalhada de mercado.", imageUrl: techconsulting },
            { package: "Premium", price: "", details: "Consultoria em grande escala com suporte avançado.", extraInfo: "Consultoria em grande escala com suporte avançado, gestão de projetos e desenvolvimento de marca.", imageUrl: techconsulting }
          ]
        
      }
    }
  },
  {
    id: 4,
    key: 'digitalMarketing',
    descriptionKey: 'digitalMarketingDescription',
    detailsKey: 'digitalMarketingDetailsText',
    imageUrl: service4Image,
    details: {
      videoUrls: {
        en: digitalEn,
        es: digitalEs,
        pt: digitalPt,
      },
      imageUrls: [
        disenoes,
        disenoen,
        disenopt,
        redesen,
        redeses,
        redespt,
        logos,
      ],
      prices: {
          en: [
            { package: "Social Media Graphics", price: "", details: "Design of social media posts and images.", extraInfo: "", imageUrl:disenoen },
            { package: "Social Media Management", price: "", details: "Management of social media accounts, including content scheduling and client management.", extraInfo: "" , imageUrl:redesen},
            { package: "Brand Logo Design", price: "", details: "Custom logo design for your brand.", extraInfo: "Includes 3 logo concepts and unlimited revisions", imageUrl: logos }
          ],
          es: [
            { package: "Diseño de Gráficos para Redes Sociales", price: "", details: "Diseño de publicaciones e imágenes para redes sociales.", extraInfo: "", imageUrl: disenoes },
            { package: "Manejo de Redes Sociales", price: "", details: "Gestión de cuentas de redes sociales, con programación de contenido y administración de clientes.", extraInfo: "", imageUrl:redeses },
            { package: "Diseño de Logotipo de Marca", price: "", details: "Diseño personalizado de logotipo para tu marca.", extraInfo: "Incluye 3 conceptos de logotipo y revisiones ilimitadas", imageUrl: logos }
          ],
          pt: [
            { package: "Design de Gráficos para Redes Sociais", price: "", details: "Design de postagens e imagens para redes sociais.", extraInfo: "", imageUrl: disenopt },
            { package: "Gerenciamento de Redes Sociais", price: "", details: "Gerenciamento de contas de redes sociais, com agendamento de conteúdo e administração de clientes.", extraInfo: "", imageUrl:redespt },
            { package: "Design de Logotipo de Marca", price: "", details: "Design personalizado de logotipo para sua marca.", extraInfo: "Inclui 3 conceitos de logotipo e revisões ilimitadas", imageUrl: logos }
          ]
        }
    }
  },
];


const Services = ({ isDarkMode }) => {
  const { t, i18n } = useTranslation();
  const [expandedServiceId, setExpandedServiceId] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const detailsRefs = useRef({});
  
  const toggleExpand = (id) => {
    setExpandedServiceId(expandedServiceId === id ? null : id);
    setTimeout(() => {
      const currentServiceRef = detailsRefs.current[id];
      if (currentServiceRef) {
        const top = currentServiceRef.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: top - 50,
          behavior: 'smooth',
        });
      }
    }, 300);
  };

  const openModal = (packageDetails) => {
    setSelectedPackage(packageDetails);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedPackage(null);
  };



  return (
    <div className='services'>
      <div className="services-list">
        {services.map(service => (
          <div
            key={service.id}
            className={`service-card ${isDarkMode ? 'dark-theme' : 'light-theme'}`}
            onClick={() => toggleExpand(service.id)}
          >
            <img
              src={service.imageUrl}
              alt={t(service.key)}
              className={`service-image ${isDarkMode ? 'dark-theme' : 'light-theme'}`}
            />
            <h3>{t(service.key)}</h3>
          </div>
        ))}
      </div>

      {services.map(service => (
        expandedServiceId === service.id && (
          <div
            key={`details-${service.id}`}
            ref={el => detailsRefs.current[service.id] = el}
            className={`service-details ${isDarkMode ? 'dark-theme' : 'light-theme'}`}
          >
            {service.details.videoUrls && (
              <div className="service-video">
                <video controls autoPlay loop muted>
                  <source src={service.details.videoUrls[i18n.language]} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
            
            <div className="package-grid">
              {service.details.prices[i18n.language].map((price, index) => (
                <div
                  key={index}
                  className="package-card"
                  onClick={() => openModal(price)}
                >
                  <h4>{price.package}</h4>
                  <p>{price.price}</p>
                  <p>{price.details}</p>
                </div>
              ))}
            </div>
          </div>
        )
      ))}

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="service-modal" contentLabel="Service Details">
      
      {selectedPackage && (
  <div>
    <div id='descriptionmodal'>
    <div id='Desbox'>
    <p id='DescModal'> {selectedPackage.extraInfo}</p>
    </div>
    {selectedPackage.price != "" && (
    <div id='Desprice'>
      <p>{selectedPackage.price}</p>
    </div>
    )
}
    </div>
    {selectedPackage && selectedPackage.imageUrl ? (
  <>
    <img 
  src={selectedPackage.imageUrl} 
  alt="Service" 
  style={{ 
    width: selectedPackage.price === "" ? '95%' : '100%', 
    height: 'auto', 
    marginTop: selectedPackage.price === "" ? '0px' : '-120px', 
    marginLeft: selectedPackage.price === "" ? '-10px' : '20px'
  }} 
  className='serviceimage' 
/>


    {console.log("Image URL is valid")}
  </>
) : (
  <>
    <p>Image not available</p>
    {console.log("Image URL is not available")}
  </>
)}
    <button onClick={closeModal}>x</button>
  </div>
)}
      </Modal>
    </div>
  );
};

export default Services;