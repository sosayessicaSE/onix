import React from 'react';
import '../views/toggle.css';

const Toggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <div className="container--toggle">
      <input 
        type="checkbox" 
        id="toggle" 
        className="toggle--checkbox" 
        checked={isDarkMode} 
        onChange={toggleTheme} 
      />
      <label htmlFor="toggle" className="toggle--label">
        <span className="toggle--label-background"></span>
        <span className="icon light-icon">☀️</span>
        <span className="icon dark-icon">🌑</span>
      </label>
    </div>
  );
};

export default Toggle;
