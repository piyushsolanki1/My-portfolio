import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar.jsx';
import Hero from './Components/Hero.jsx';
import Skills from './Components/Skills.jsx';
import Projects from './Components/Projects.jsx';
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';
import Footer from './Components/Footer.jsx';
import RevealSection from './Components/RevealSection.jsx';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);

    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);

    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <>
      <Navbar toggleTheme={toggleTheme} theme={theme} />

      <RevealSection direction="up">
        <Hero />
      </RevealSection>

      <RevealSection direction="left">
        <Skills />
      </RevealSection>

      <RevealSection direction="right">
        <Projects />
      </RevealSection>

      <RevealSection direction="up">
        <About />
      </RevealSection>

      <RevealSection direction="down">
        <Contact />
      </RevealSection>

      <Footer />
    </>
  );
}

export default App;
