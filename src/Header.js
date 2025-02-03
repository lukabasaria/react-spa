import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useLocalStorage from '../hooks/useLocalStorage';
import '../styles/Header.scss';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const switchLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ka' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">{t('home')}</Link>
          </li>
          <li>
            <Link to="/about">{t('about')}</Link>
          </li>
          <li>
            <Link to="/contact">{t('contact')}</Link>
          </li>
        </ul>
      </nav>
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      </button>
      <button onClick={switchLanguage} className="language-toggle">
        {t('switch_language')}
      </button>
    </header>
  );
};

export default Header;