
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // Common
          "overview": "Overview",
          "experience": "Experience",
          "skills": "Skills",
          "downloads": "Downloads",
          "store": "Store",
          "blog": "Blog",
          "settings": "Settings",
          
          // Store
          "professional_training": "Professional Training Store",
          "buy_now": "Buy Now",
          "learn_more": "Learn More",
          "key_features": "Key Features",
          
          // Skills
          "skills_expertise": "Skills & Expertise",
          "level": "Level",
          "expert": "Expert",
          "advanced": "Advanced",
          
          // Settings
          "language": "Language",
          "choose_language": "Choose your preferred language",
          "app_settings": "Application Settings",
          "theme": "Theme",
          "notifications": "Notifications"
        }
      },
      sv: {
        translation: {
          // Common
          "overview": "Översikt",
          "experience": "Erfarenhet",
          "skills": "Kompetenser",
          "downloads": "Nedladdningar",
          "store": "Butik",
          "blog": "Blogg",
          "settings": "Inställningar",
          
          // Store
          "professional_training": "Professionell Utbildningsbutik",
          "buy_now": "Köp nu",
          "learn_more": "Läs mer",
          "key_features": "Huvudfunktioner",
          
          // Skills
          "skills_expertise": "Kompetenser & Expertis",
          "level": "Nivå",
          "expert": "Expert",
          "advanced": "Avancerad",
          
          // Settings
          "language": "Språk",
          "choose_language": "Välj ditt föredragna språk",
          "app_settings": "Applikationsinställningar",
          "theme": "Tema",
          "notifications": "Aviseringar"
        }
      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
