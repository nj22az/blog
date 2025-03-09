import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations, TranslationContent } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationContent;
  availableLanguages: { code: Language; name: string }[];
}

const availableLanguages = [
  { code: 'en' as Language, name: 'English' },
  { code: 'vi' as Language, name: 'Tiếng Việt' },
  { code: 'sv' as Language, name: 'Svenska' },
  { code: 'ja' as Language, name: 'Japanese 日本語' },
  { code: 'zh' as Language, name: 'Chinese 中文' },
  { code: 'de' as Language, name: 'Deutsch' }
];

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Try to get language from localStorage, fallback to browser language or default to English
  const getBrowserLanguage = (): Language => {
    const browserLang = navigator.language.split('-')[0];
    return (availableLanguages.find(lang => lang.code === browserLang)?.code || 'en') as Language;
  };

  const [language, setLanguageState] = useState<Language>(
    () => (localStorage.getItem('language') as Language) || getBrowserLanguage()
  );

  // Get translations for current language
  const t = translations[language];

  // Update language and save to localStorage
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    
    // Update HTML lang attribute for SEO
    document.documentElement.lang = lang;
    
    // Update meta tags for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', translations[lang].siteDescription);
    }
  };

  // Initialize language on mount
  useEffect(() => {
    // Set initial HTML lang attribute
    document.documentElement.lang = language;
    
    // Show language selection prompt if not set before
    if (!localStorage.getItem('language-prompt-shown')) {
      const userConfirmed = window.confirm('Would you like to translate this website to your preferred language?');
      if (userConfirmed) {
        // If user confirms, we'll show the language settings
        // This would typically open a language selector modal or redirect to settings
        // For now, we'll just mark that we've shown the prompt
        localStorage.setItem('language-prompt-shown', 'true');
      }
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, availableLanguages }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 