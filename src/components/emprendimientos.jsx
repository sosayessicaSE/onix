import React from 'react';
import { useTranslation } from 'react-i18next';
import "../views/empresa.css";
import webdesing from '../images/webdesign.png'
import branding from '../images/branding.png'
import graphic from '../images/graphic.png'
import media from '../images/socialmedia.png'

const services = {
  webDesign: {
    Imageurl: webdesing,
    title: {
      en: 'Web Design',
      es: 'Diseño Web',
      pt: 'Design de Sites'
    },
    shortDescription: {
      en: "Establish and enhance your online presence with custom, responsive websites tailored to your business needs.",
      es: "Establece y mejora tu presencia en línea con sitios web personalizados y responsivos adaptados a las necesidades de tu negocio.",
      pt: "Estabeleça e melhore sua presença online com sites personalizados e responsivos adaptados às necessidades do seu negócio."
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
  branding: {
    Imageurl: branding,
    title: {
      en: 'Branding',
      es: 'Branding',
      pt: 'Branding'
    },
    shortDescription: {
      en: "Create a strong brand identity with cohesive visuals and messaging that resonates with your target audience.",
      es: "Crea una identidad de marca sólida con visuales coherentes y mensajes que resuenen con tu público objetivo.",
      pt: "Crie uma identidade de marca forte com visuais coesos e mensagens que ressoem com seu público-alvo."
    },
    keyFeatures: {
      title: {
        en: 'Key Features',
        es: 'Características Clave',
        pt: 'Principais Recursos'
      },
      items: {
        en: [
          "Unique logo and visual identity creation",
          "Brand messaging development",
          "Consistency across all marketing materials"
        ],
        es: [
          "Creación de logotipo e identidad visual única",
          "Desarrollo de mensajes de marca",
          "Consistencia en todos los materiales de marketing"
        ],
        pt: [
          "Criação de logotipo e identidade visual única",
          "Desenvolvimento de mensagens de marca",
          "Consistência em todos os materiais de marketing"
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
          "Market research to align brand with audience",
          "Brand guidelines documentation",
          "Ongoing brand strategy support"
        ],
        es: [
          "Investigación de mercado para alinear la marca con la audiencia",
          "Documentación de guías de marca",
          "Soporte continuo de estrategia de marca"
        ],
        pt: [
          "Pesquisa de mercado para alinhar a marca com o público",
          "Documentação de diretrizes de marca",
          "Suporte contínuo de estratégia de marca"
        ]
      }
    }
  },
  socialMediaManagement: {
    Imageurl: media,
    title: {
      en: 'Social Media Management',
      es: 'Administración de Redes Sociales',
      pt: 'Gestão de Mídias Sociais'
    },
    shortDescription: {
      en: "Engage with your audience and grow your online presence through strategic social media management.",
      es: "Involucra a tu audiencia y aumenta tu presencia en línea mediante la gestión estratégica de redes sociales.",
      pt: "Engaje com seu público e cresça sua presença online através de gestão estratégica de redes sociais."
    },
    keyFeatures: {
      title: {
        en: 'Key Features',
        es: 'Características Clave',
        pt: 'Principais Recursos'
      },
      items: {
        en: [
          "Content creation and curation",
          "Scheduled posts and updates",
          "Community engagement and interaction"
        ],
        es: [
          "Creación y curación de contenido",
          "Publicaciones y actualizaciones programadas",
          "Compromiso e interacción con la comunidad"
        ],
        pt: [
          "Criação e curadoria de conteúdo",
          "Postagens e atualizações agendadas",
          "Engajamento e interação com a comunidade"
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
          "Analytics and performance tracking",
          "Social media strategy development",
          "Crisis management and support"
        ],
        es: [
          "Análisis y seguimiento del rendimiento",
          "Desarrollo de estrategias en redes sociales",
          "Gestión de crisis y soporte"
        ],
        pt: [
          "Análise e monitoramento de desempenho",
          "Desenvolvimento de estratégias em redes sociais",
          "Gestão de crises e suporte"
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
    shortDescription: {
      en: "Elevate your brand with visually stunning graphics that communicate your message effectively.",
      es: "Eleva tu marca con gráficos visualmente impactantes que comunican tu mensaje de manera efectiva.",
      pt: "Eleve sua marca com gráficos visualmente impressionantes que comunicam sua mensagem de forma eficaz."
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
        <div className="empresa-image" style={{ backgroundImage: `url(${service.Imageurl})`, backgroundSize: 'cover', backgroundPosition: 'center', height: 'auto', width: '100%' }}>
</div>




      <div className="services-info">
        <h1 className="services-title">{service.title[language]}</h1>
        <p className="services-short-description">{service.shortDescription[language]}</p>
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

const Emprendimientos = () => {
  return (
    <div className="services-container">
      {Object.values(services).map((service, index) => (
        <Service key={index} service={service} />
      ))}
    </div>
  );
};

export default Emprendimientos;
