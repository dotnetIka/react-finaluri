import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/Navbar.scss';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          🌍 Countries SPA
        </Link>
        
        <div className="navbar-menu">
          <Link 
            to="/" 
            className={`navbar-link ${isActive('/') ? 'active' : ''}`}
          >
            {t('home')}
          </Link>
          <Link 
            to="/countries" 
            className={`navbar-link ${isActive('/countries') ? 'active' : ''}`}
          >
            {t('countries')}
          </Link>
        </div>

        <div className="navbar-controls">
          <button 
            onClick={toggleLanguage}
            className="control-btn language-btn"
            title={t('language')}
          >
            {language === 'en' ? '🇬🇪' : '🇺🇸'}
          </button>
          <button 
            onClick={toggleTheme}
            className="control-btn theme-btn"
            title={t('theme')}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 