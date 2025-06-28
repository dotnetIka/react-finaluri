import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import useFetchCountries from '../hooks/useFetchCountries';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/CountryList.scss';

const CountryList = () => {
  const { countries, loading, error } = useFetchCountries('all?fields=name,flags,population,region,capital');
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCountries = useMemo(() => {
    if (!countries) return [];
    return countries.filter(country =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.name.official.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [countries, searchTerm]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>{t('loading')}</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">{t('error')}</p>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="country-list">
      <div className="country-list-container">
        <div className="search-section">
          <input
            type="text"
            placeholder={t('search')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <div className="results-count">
            {filteredCountries.length} {filteredCountries.length === 1 ? 'country' : 'countries'} found
          </div>
        </div>

        <div className="countries-grid">
          {filteredCountries.map((country) => (
            <Link
              key={country.name.common}
              to={`/country/${encodeURIComponent(country.name.common)}`}
              className="country-card"
            >
              <div className="country-flag">
                <img 
                  src={country.flags.svg} 
                  alt={`Flag of ${country.name.common}`}
                  loading="lazy"
                />
              </div>
              <div className="country-info">
                <h3 className="country-name">{country.name.common}</h3>
                <p className="country-official">{country.name.official}</p>
                <div className="country-details">
                  <p><strong>Population:</strong> {country.population?.toLocaleString() || 'N/A'}</p>
                  <p><strong>Region:</strong> {country.region || 'N/A'}</p>
                  <p><strong>Capital:</strong> {country.capital?.[0] || 'N/A'}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredCountries.length === 0 && searchTerm && (
          <div className="no-results">
            <p>No countries found matching "{searchTerm}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryList; 