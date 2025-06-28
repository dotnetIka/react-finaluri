import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetchCountries from '../hooks/useFetchCountries';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/CountryDetails.scss';

const CountryDetails = () => {
  const { name } = useParams();
  const { t, language } = useLanguage();
  const [showNativeNames, setShowNativeNames] = useState(false);
  
  const { countries, loading, error } = useFetchCountries(`name/${encodeURIComponent(name)}`);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>{t('loading')}</p>
      </div>
    );
  }

  if (error || !countries || countries.length === 0) {
    return (
      <div className="error-container">
        <p className="error-message">{t('error')}</p>
        <Link to="/countries" className="back-button">{t('back')}</Link>
      </div>
    );
  }

  const country = countries[0];

  const getNativeNames = () => {
    if (!country.name.nativeName) return null;
    
    const nativeNames = Object.values(country.name.nativeName).map(native => ({
      common: native.common,
      official: native.official
    }));
    
    return nativeNames;
  };

  const formatCurrencies = () => {
    if (!country.currencies) return 'N/A';
    
    return Object.entries(country.currencies)
      .map(([code, currency]) => `${currency.name} (${code})`)
      .join(', ');
  };

  const formatLanguages = () => {
    if (!country.languages) return 'N/A';
    
    return Object.values(country.languages).join(', ');
  };

  const nativeNames = getNativeNames();

  return (
    <div className="country-details">
      <div className="country-details-container">
        <Link to="/countries" className="back-button">
          ← {t('back')}
        </Link>

        <div className="country-content">
          <div className="country-flag-section">
            <img 
              src={country.flags.svg} 
              alt={`Flag of ${country.name.common}`}
              className="country-flag"
            />
          </div>

          <div className="country-info-section">
            <h1 className="country-title">{country.name.common}</h1>
            
            <div className="names-section">
              <div className="name-item">
                <h3>{t('official')}:</h3>
                <p>{country.name.official}</p>
              </div>
              
              <div className="name-item">
                <h3>{t('common')}:</h3>
                <p>{country.name.common}</p>
              </div>

              {nativeNames && (
                <div className="name-item">
                  <div className="native-names-header">
                    <h3>{t('native')}:</h3>
                    <button 
                      onClick={() => setShowNativeNames(!showNativeNames)}
                      className="toggle-native-btn"
                    >
                      {showNativeNames ? 'Hide' : 'Show'} Native Names
                    </button>
                  </div>
                  {showNativeNames && (
                    <div className="native-names-list">
                      {nativeNames.map((native, index) => (
                        <div key={index} className="native-name-item">
                          <p><strong>Common:</strong> {native.common}</p>
                          <p><strong>Official:</strong> {native.official}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="details-grid">
              <div className="detail-item">
                <h3>{t('population')}:</h3>
                <p>{country.population?.toLocaleString() || 'N/A'}</p>
              </div>
              
              <div className="detail-item">
                <h3>{t('region')}:</h3>
                <p>{country.region || 'N/A'}</p>
              </div>
              
              <div className="detail-item">
                <h3>{t('capital')}:</h3>
                <p>{country.capital?.[0] || 'N/A'}</p>
              </div>
              
              <div className="detail-item">
                <h3>{t('currencies')}:</h3>
                <p>{formatCurrencies()}</p>
              </div>
              
              <div className="detail-item">
                <h3>{t('languages')}:</h3>
                <p>{formatLanguages()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails; 