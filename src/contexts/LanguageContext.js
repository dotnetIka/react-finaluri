import React, { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useLocalStorage('language', 'en');

  const toggleLanguage = () => {
    setLanguage(prevLanguage => prevLanguage === 'en' ? 'ka' : 'en');
  };

  const translations = {
    en: {
      home: 'Home',
      countries: 'Countries',
      search: 'Search countries...',
      loading: 'Loading...',
      error: 'Error loading data',
      theme: 'Theme',
      language: 'Language',
      welcome: 'Welcome to Countries Explorer',
      description: 'Discover countries around the world with detailed information',
      explore: 'Explore Countries',
      back: 'Back',
      official: 'Official Name',
      common: 'Common Name',
      native: 'Native Name',
      population: 'Population',
      region: 'Region',
      capital: 'Capital',
      currencies: 'Currencies',
      languages: 'Languages'
    },
    ka: {
      home: 'მთავარი',
      countries: 'ქვეყნები',
      search: 'ქვეყნების ძიება...',
      loading: 'იტვირთება...',
      error: 'მონაცემების ჩატვირთვის შეცდომა',
      theme: 'თემა',
      language: 'ენა',
      welcome: 'კეთილი იყოს თქვენი მობრძანება ქვეყნების მკვლევარში',
      description: 'გაეცანით ქვეყნებს მსოფლიოს გარშემო დეტალური ინფორმაციით',
      explore: 'ქვეყნების შესწავლა',
      back: 'უკან',
      official: 'ოფიციალური სახელი',
      common: 'საერთო სახელი',
      native: 'დედაენის სახელი',
      population: 'მოსახლეობა',
      region: 'რეგიონი',
      capital: 'დედაქალაქი',
      currencies: 'ვალუტები',
      languages: 'ენები'
    }
  };

  const t = (key) => translations[language][key] || key;

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}; 