// src/pages/Home.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import useFetchData from '../hooks/useFetchData';

const Home = () => {
  const { t } = useTranslation();
  const { data, loading, error } = useFetchData('https://jsonplaceholder.typicode.com/posts');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="home">
      <h1>{t('welcome')}</h1>
      <ul>
        {data.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;