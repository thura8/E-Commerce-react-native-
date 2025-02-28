import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import RNSecureKeyStore from 'react-native-secure-key-store';
import 'intl-pluralrules';

import en from './locales/en.json';
import mm from './locales/mm.json';

const resources = {
  en: {translation: en},
  mm: {translation: mm},
};

const LANGUAGE_KEY = 'user_selected_language';

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    compatibilityJSON: 'v3',
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    debug: true,
  });
}

const loadLanguage = async () => {
  try {
    const savedLanguage = await RNSecureKeyStore.get(LANGUAGE_KEY);
    if (savedLanguage && resources[savedLanguage]) {
      i18n.changeLanguage(savedLanguage);
    }
  } catch (error) {
    console.error('Failed to load language:', error);
  }
};

const saveLanguage = async language => {
  try {
    if (resources[language]) {
      await RNSecureKeyStore.set(LANGUAGE_KEY, language, {
        accessible: 'AccessibleAlways',
      });
      i18n.changeLanguage(language);
    }
  } catch (error) {
    console.error('Failed to save language:', error);
  }
};

export {loadLanguage, saveLanguage};
export default i18n;
