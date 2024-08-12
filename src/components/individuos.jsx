import React from 'react';
import { useTranslation } from 'react-i18next';
import "../views/empresa.css";
import devSupport from '../images/designclasses.png';
import individualSupport from '../images/individualsupport.png';
import programmingClasses from '../images/programmingclasses.png';


const services = {
  developerSupport: {
    Imageurl: devSupport,
    title: {
      en: 'Developer Support',
      es: 'Soporte para Desarrolladores',
      pt: 'Suporte para Desenvolvedores'
    },

    keyFeatures: {
      title: {
        en: 'Key Features',
        es: 'Características Clave',
        pt: 'Principais Recursos'
      },
      items: {
        en: [
          "Code review and optimization",
          "Bug fixing and troubleshooting",
          "Performance tuning and enhancements",
          "Integration support"
        ],
        es: [
          "Revisión y optimización de código",
          "Corrección de errores y solución de problemas",
          "Ajuste de rendimiento y mejoras",
          "Soporte de integración"
        ],
        pt: [
          "Revisão e otimização de código",
          "Correção de bugs e solução de problemas",
          "Ajuste de desempenho e melhorias",
          "Suporte à integração"
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
          "Ongoing support and maintenance",
          "Access to specialized resources",
          "Customized solutions to fit your needs"
        ],
        es: [
          "Soporte y mantenimiento continuo",
          "Acceso a recursos especializados",
          "Soluciones personalizadas para adaptarse a tus necesidades"
        ],
        pt: [
          "Suporte e manutenção contínuos",
          "Acesso a recursos especializados",
          "Soluções personalizadas para atender às suas necessidades"
        ]
      }
    }
  },
  individualSupport: {
    Imageurl: individualSupport,
    title: {
      en: 'Individual Support',
      es: 'Soporte Individual',
      pt: 'Suporte Individual'
    },

    keyFeatures: {
      title: {
        en: 'Key Features',
        es: 'Características Clave',
        pt: 'Principais Recursos'
      },
      items: {
        en: [
          "One-on-one mentoring and coaching",
          "Tailored advice for personal projects",
          "Goal setting and progress tracking",
          "Flexible scheduling"
        ],
        es: [
          "Mentoría y coaching individual",
          "Asesoramiento personalizado para proyectos personales",
          "Establecimiento de metas y seguimiento del progreso",
          "Horarios flexibles"
        ],
        pt: [
          "Mentoria e coaching individual",
          "Aconselhamento personalizado para projetos pessoais",
          "Definição de metas e acompanhamento do progresso",
          "Agendamento flexível"
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
          "Continuous support",
          "Access to exclusive content",
          "Networking opportunities"
        ],
        es: [
          "Soporte continuo",
          "Acceso a contenido exclusivo",
          "Oportunidades de networking"
        ],
        pt: [
          "Suporte contínuo",
          "Acesso a conteúdo exclusivo",
          "Oportunidades de networking"
        ]
      }
    }
  },
  programmingClasses: {
    Imageurl: programmingClasses,
    title: {
      en: 'Programming Classes',
      es: 'Clases de Programación',
      pt: 'Aulas de Programação'
    },

    keyFeatures: {
      title: {
        en: 'Key Features',
        es: 'Características Clave',
        pt: 'Principais Recursos'
      },
      items: {
        en: [
          "Beginner to advanced courses",
          "Project-based learning",
          "Interactive coding sessions",
          "Access to course materials"
        ],
        es: [
          "Cursos desde principiantes hasta avanzados",
          "Aprendizaje basado en proyectos",
          "Sesiones de codificación interactivas",
          "Acceso a materiales del curso"
        ],
        pt: [
          "Cursos do iniciante ao avançado",
          "Aprendizagem baseada em projetos",
          "Sessões de codificação interativas",
          "Acesso a materiais do curso"
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
          "Certificate of completion",
          "Career guidance and job placement support",
          "Access to a community of learners"
        ],
        es: [
          "Certificado de finalización",
          "Orientación profesional y soporte para colocación laboral",
          "Acceso a una comunidad de estudiantes"
        ],
        pt: [
          "Certificado de conclusão",
          "Orientação profissional e suporte para colocação no mercado de trabalho",
          "Acesso a uma comunidade de aprendizes"
        ]
      }
    }
  },
  
};

const Service = ({ service }) => {
  const { t, i18n } = useTranslation();
  const language = i18n.language || 'en';

  return (
    <div className="services-details">
      <div className="empresa-image" style={{ backgroundImage: `url(${service.Imageurl})`, backgroundSize: 'cover', backgroundPosition: 'center', height: 'auto', width: '100%', bottom: '0px' }}>
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

const Individuos = () => {
    return (
        <div className="services-container">
          {Object.values(services).map((service, index) => (
            <Service key={index} service={service} />
          ))}
        </div>
      );
    };
    
export default Individuos;
