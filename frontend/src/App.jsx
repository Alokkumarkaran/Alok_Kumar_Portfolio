import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import AIResume from './components/AIResume';
import GithubStats from './components/GithubStats';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light';
    if (theme === 'dark') document.documentElement.classList.add('dark');
  }, []);

  return (
   <div className="min-h-screen w-full overflow-x-hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">

      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Certifications />
      <AIResume />
      <GithubStats />
      <Contact />
      <Footer />
    </div>
  );
}
