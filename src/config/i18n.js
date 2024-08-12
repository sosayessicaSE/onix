import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationES from "../locales/es/translation.json";
import translationEN from "../locales/en/translation.json";
import translationPT from "../locales/pt/translation.json";

// Las traducciones
const resources = {
  es: {
    translation: translationES,
  },
  en: {
    translation: translationEN,
  },
  pt: {
    translation: translationPT,
  },
};

i18n

  .use(initReactI18next) // pasa i18n a React
  .init({
    resources,
    fallbackLng: "en", // Idioma por defecto si no encuentra el preferido
    interpolation: {
      escapeValue: false, // React ya protege contra XSS
    },
  });

export default i18n;
