import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import './styles/main.scss';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === "true" ? true : false;
  });
  const toggleTheme = () => setDarkMode(prev => {
    localStorage.setItem("darkMode", !prev); 
    return !prev;
  });
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <Router>
      <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
      <main className="main-content">
        <Home />
      </main>
      <Footer />
    </Router>
  );
}

export default App;