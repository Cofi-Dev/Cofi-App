import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { TRANSLATIONS_EN } from "./assets/locales/en/translation";
import { TRANSLATIONS_ES } from "./assets/locales/es/translation";

const resources = {
  en: {
    translation: {
      ...TRANSLATIONS_EN,
    },
  },
  es: {
    translation: {
      ...TRANSLATIONS_ES,
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
	lng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
