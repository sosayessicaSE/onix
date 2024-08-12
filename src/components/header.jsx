import React from "react";
import "../views/header.css"; 

const Header = ({ isDarkMode }) => {
  return (
    <header className={`header ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
    </header>
  );
};

export default Header;
