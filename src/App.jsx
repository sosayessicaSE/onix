import React, { useState, useEffect } from "react";
import "./views/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import { keepTheme, setTheme } from "./components/mode";
import Toggle from "./components/toggle";
import Home from "./components/Home";
import Empresas from "./components/empresas";
import Emprendimientos from "./components/emprendimientos";
import Individuos from "./components/individuos";
import Navbar from "./components/Navbar";
import Services from "./components/services";
import Contact from "./components/contact";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    keepTheme();
    const currentTheme = localStorage.getItem("theme");
    setIsDarkMode(currentTheme === "theme-dark");
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      setTheme("theme-light");
    } else {
      setTheme("theme-dark");
    }
    setIsDarkMode(!isDarkMode);
  };
  const themeClass = isDarkMode ? "dark-theme" : "light-theme";

  return (
    <Router>
      <div className={`App ${themeClass}`}>
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <Toggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        
        <Navbar themeClass={themeClass} />
        <Routes>
          <Route
            path="/"
            element={<Home isDarkMode={isDarkMode} toggleTheme={toggleTheme} />}
          />
          <Route
            path="/services"
            element={
              <Services isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            }
          />
          <Route
            path="/contact"
            element={
              <Contact isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            }
          />
          <Route
            path="/empresas"
            element={
              <Empresas isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            }
          />
          <Route
            path="/emprendimientos"
            element={
              <Emprendimientos isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            }
          />
          <Route
            path="/individuos"
            element={
              <Individuos isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
