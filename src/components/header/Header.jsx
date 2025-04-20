import React from 'react';
import './Header.css';
import SearchBox from '../searchbox/SearchBox';
import { useThemeStore } from '../../store/themeStore';

const Header = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <header className="header-container glass-card">
      <div className="header-left">
        <h1 className="header-title">🌏 Raw Weathers</h1>
      </div>

      <div className="header-search">
        <SearchBox />
      </div>

      <div className="theme-toggle">
        <input
          type="checkbox"
          id="theme-switch"
          onChange={toggleTheme}
          checked={theme === 'dark'}
        />
        <label htmlFor="theme-switch" className="toggle-label">
          {theme === 'dark' ?   '☀️' : '🌙'}
        </label>
      </div>
    </header>
  );
};

export default Header;
