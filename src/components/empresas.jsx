import React from 'react';
import { useTranslation } from 'react-i18next';
import "../views/empresa.css";
import webdesing from '../images/webdesign.png'
import graphic from '../images/graphic.png'
import database from '../images/database.png'

const services = {
  webDesign: {
    Imageurl: webdesing,
    title: {
      en: 'Web Design',
      es: 'Diseño Web',
      pt: 'Design de Sites'
    },

    keyFeatures: {
      title: {
        en: 'Key Features',
        es: 'Características Clave',
        pt: 'Principais Recursos'
      },
      items: {
        en: [
          "Custom designs reflecting your brand’s identity",
          "Optimized for all devices",
          "Intuitive navigation and user-friendly interfaces",
          "On-page SEO strategies"
        ],
        es: [
          "Diseños personalizados que reflejan la identidad de tu marca",
          "Optimizado para todos los dispositivos",
          "Navegación intuitiva e interfaces amigables",
          "Estrategias SEO en la página"
        ],
        pt: [
          "Designs personalizados que refletem a identidade da sua marca",
          "Otimizado para todos os dispositivos",
          "Navegação intuitiva e interfaces amigáveis",
          "Estratégias de SEO na página"
        ]
      }
    },
    additionalBenefits: {
      title: {
        en: 'Additional Benefits',
        es: 'Beneficios Adicionales',
        pt: 'Benefícios Adicionais'
      },
      items: {
        en: [
          "Regular updates and maintenance",
          "Easy-to-use CMS for content management",
          "Tools and analytics to track performance"
        ],
        es: [
          "Actualizaciones y mantenimiento regulares",
          "CMS fácil de usar para la gestión de contenidos",
          "Herramientas y análisis para rastrear el rendimiento"
        ],
        pt: [
          "Atualizações e manutenção regulares",
          "CMS fácil de usar para gestão de conteúdo",
          "Ferramentas e análises para monitorar desempenho"
        ]
      }
    }
  },
  dataBaseManagement: {
    Imageurl: database,
    title: {
      en: 'Database Management',
      es: 'Gestión de Bases de Datos',
      pt: 'Gestão de Bancos de Dados'
    },

    keyFeatures: {
      title: {
        en: 'Key Features',
        es: 'Características Clave',
        pt: 'Principais Recursos'
      },
      items: {
        en: [
          "Data optimization for enhanced performance",
          "Robust security protocols to protect your data",
          "Scalable solutions to grow with your business",
          "Automated backups and disaster recovery"
        ],
        es: [
          "Optimización de datos para mejorar el rendimiento",
          "Protocolos de seguridad robustos para proteger tus datos",
          "Soluciones escalables para crecer con tu negocio",
          "Copias de seguridad automáticas y recuperación ante desastres"
        ],
        pt: [
          "Otimização de dados para melhor desempenho",
          "Protocolos de segurança robustos para proteger seus dados",
          "Soluções escaláveis para crescer com o seu negócio",
          "Backups automáticos e recuperação de desastres"
        ]
      }
    },
    additionalBenefits: {
      title: {
        en: 'Additional Benefits',
        es: 'Beneficios Adicionales',
        pt: 'Benefícios Adicionais'
      },
      items: {
        en: [
          "Regular monitoring and maintenance",
          "User-friendly interfaces for data access",
          "Advanced analytics for informed decision-making"
        ],
        es: [
          "Monitoreo y mantenimiento regular",
          "Interfaces amigables para acceso a datos",
          "Análisis avanzados para una toma de decisiones informada"
        ],
        pt: [
          "Monitoramento e manutenção regulares",
          "Interfaces amigáveis para acesso a dados",
          "Análises avançadas para decisões informadas"
        ]
      }
    }
  },
  
  
  graphicDesign: {
    Imageurl: graphic,
    title: {
      en: 'Graphic Design',
      es: 'Diseño Gráfico',
      pt: 'Design Gráfico'
    },

    keyFeatures: {
      title: {
        en: 'Key Features',
        es: 'Características Clave',
        pt: 'Principais Recursos'
      },
      items: {
        en: [
          "Custom illustrations and designs",
          "Infographics and visual storytelling",
          "Print and digital media design"
        ],
        es: [
          "Ilustraciones y diseños personalizados",
          "Infografías y narrativas visuales",
          "Diseño para medios impresos y digitales"
        ],
        pt: [
          "Ilustrações e designs personalizados",
          "Infográficos e narrativas visuais",
          "Design para mídia impressa e digital"
        ]
      }
    },
    additionalBenefits: {
      title: {
        en: 'Additional Benefits',
        es: 'Beneficios Adicionales',
        pt: 'Benefícios Adicionais'
      },
      items: {
        en: [
          "Consistent visual branding",
          "Collaboration with marketing teams",
          "High-resolution files for all media types"
        ],
        es: [
          "Branding visual consistente",
          "Colaboración con equipos de marketing",
          "Archivos de alta resolución para todos los tipos de medios"
        ],
        pt: [
          "Branding visual consistente",
          "Colaboração com equipes de marketing",
          "Arquivos em alta resolução para todos os tipos de mídia"
        ]
      }
    }
  }
};

const Service = ({ service }) => {
  const { t, i18n } = useTranslation();
  const language = i18n.language || 'en';

  return (
    <div className="services-details">
        <div className="empresa-image" style={{ backgroundImage: `url(${service.Imageurl})`, backgroundSize: 'cover', backgroundPosition: 'center bottom', height: 'auto', width: '100%' }}>
</div>
      <div className="services-info">
        <h1 className="services-title">{service.title[language]}</h1>
        <div className="services-key-features">
          <h2>{service.keyFeatures.title[language]}</h2>
          <ul>
            {service.keyFeatures.items[language].map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="services-additional-benefits">
          <h2>{service.additionalBenefits.title[language]}</h2>
          <ul>
            {service.additionalBenefits.items[language].map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Empresas = () => {
  return (
    <div className="services-container">
      {Object.values(services).map((service, index) => (
        <Service key={index} service={service} />
      ))}
    </div>
  );
};

export default Empresas;
