import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchCountries = (endpoint = 'all') => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await axios.get(`https://restcountries.com/v3.1/${endpoint}`);
        setCountries(response.data);
      } catch (err) {
        setError(err.message || 'Failed to fetch countries');
        console.error('Error fetching countries:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, [endpoint]);

  return { countries, loading, error };
};

export default useFetchCountries; 