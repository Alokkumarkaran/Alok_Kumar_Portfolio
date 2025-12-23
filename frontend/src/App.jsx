import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Loader from "./components/Loader";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import LinkedInBadge from './components/LinkedInBadge';
import Blog from "./components/Blog";
import About from './components/About';
import Projects from './components/Projects';
import AIResume from './components/AIResume';
import GithubStats from './components/GithubStats';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light';
    if (theme === 'dark') document.documentElement.classList.add('dark');
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // you can tweak this duration (in ms)
    return () => clearTimeout(timer);
  }, []);

  return (
   <div className="min-h-screen w-full overflow-x-hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
     {/* === Loader Animation === */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900"
          >
            <Loader />
          </motion.div>
        )}
      </AnimatePresence>

      {/* === Actual Portfolio Content === */}
      {!isLoading && (
        <>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Certifications />
      <LinkedInBadge />
      <GithubStats />
      <AIResume />
      <Blog />
      <Contact />
      <Footer />
       </>
        )}
    </div>
  );
}
