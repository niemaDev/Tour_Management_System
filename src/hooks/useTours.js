import { useState, useEffect } from 'react';
import API from '../api/axiosConfig';

export const useTours = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTours = async () => {
    try {
      const {data} = await API.get('/tours');
      setTours(data);
    } catch (err) {
      console.error("Failed to fetch tours", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return { tours, loading, refetch: fetchTours };
};