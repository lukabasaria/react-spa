import { useState, useEffect } from 'react';
import axios from 'axios';

// Кастомный хук для получения данных с API
export function useFetchData('https://jsonplaceholder.typicode.com/posts') {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data); // Сохраняем данные
      } catch (err) {
        setError(err.message); // Сохраняем ошибку
      } finally {
        setLoading(false); // Загружаем завершено
      }
    };

    fetchData();
  }, [url]); // Перезапускаем эффект, если URL изменился

  return { data, error, loading };
}
