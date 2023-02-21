import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import EN from 'common/languages/locales/en.json';
import FR from 'common/languages/locales/fr.json';

i18n.use(initReactI18next).init({
   lng: 'fr',
   resources: {
      fr: { translation: FR },
      en: { translation: EN },
   },
});

export default i18n;
