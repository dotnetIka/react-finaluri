import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/Home.scss';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="home">
      <div className="home-container">
        <div className="hero-section">
          <h1 className="hero-title">{t('welcome')}</h1>
          <p className="hero-description">{t('description')}</p>
          <Link to="/countries" className="cta-button">
            {t('explore')}
          </Link>
        </div>
        
        <div className="features-section">
          <div className="feature-card">
            <div className="feature-icon">🌍</div>
            <h3>200+ Countries</h3>
            <p>Explore countries from all continents</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Detailed Information</h3>
            <p>Get comprehensive country data</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Search & Filter</h3>
            <p>Find countries easily</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 