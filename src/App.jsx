import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar.jsx';
import Hero from './Components/Hero.jsx';
import Skills from './Components/Skills.jsx';
import Projects from './Components/Projects.jsx';
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';
import Footer from './Components/Footer.jsx';
function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('theme');

    // Check system preference if no saved theme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);

    // Apply theme to document
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);

    // Update localStorage
    localStorage.setItem('theme', newTheme);

    // Update document class
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
