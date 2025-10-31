import React, { useState, useEffect } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { profile } from "../data/profile";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [menuOpen, setMenuOpen] = useState(false);

  // Apply theme on load
  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
    if (next === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  };

  return (
    <nav className="fixed top-0 left-0 w-screen z-50 bg-white/70 dark:bg-gray-900/50 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm transition-all duration-300">
      {/* Full-width content wrapper */}
      <div className="w-full px-6 md:px-10 lg:px-16 flex justify-between items-center py-4">
        {/* Brand / Logo */}
        <a
          href="home"
          className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text tracking-wide"
        >
          {profile.name}
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-gray-700 dark:text-gray-200 font-medium">
          <a
            href="#about"
            className="hover:text-cyan-500 transition-colors duration-200"
          >
            About Me
          </a>
           <a
            href="#skills"
            className="hover:text-cyan-500 transition-colors duration-200"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="hover:text-cyan-500 transition-colors duration-200"
          >
            Projects
          </a>
          <a
            href="#ai"
            className="hover:text-cyan-500 transition-colors duration-200"
          >
            AI Resume
          </a>
          <a
            href="#blog"
            className="hover:text-cyan-500 transition-colors duration-200"
          >
            My Blog
          </a>
          <a
            href="#contact"
            className="hover:text-cyan-500 transition-colors duration-200"
          >
            Contact
          </a>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
          >
            {theme === "light" ? (
              <FiMoon className="text-xl" />
            ) : (
              <FiSun className="text-xl text-yellow-400" />
            )}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
        >
          {menuOpen ? (
            <FiX className="text-2xl text-gray-700 dark:text-gray-200" />
          ) : (
            <FiMenu className="text-2xl text-gray-700 dark:text-gray-200" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-t border-gray-200/50 dark:border-gray-800/50"
          >
            <div className="flex flex-col space-y-4 p-6 text-gray-700 dark:text-gray-200 font-medium">
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-500 transition-colors duration-200"
              >
                About Me
              </a>
              <a
                href="#skills"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-500 transition-colors duration-200"
              >
                Skills
              </a>
              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-500 transition-colors duration-200"
              >
                Projects
              </a>
 
              <a
                href="#ai"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-500 transition-colors duration-200"
              >
                AI Resume
              </a>
              <a
                href="#blog"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-500 transition-colors duration-200"
              >
                My Blog
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-500 transition-colors duration-200"
              >
                Contact
              </a>
              <button
                onClick={() => {
                  toggleTheme();
                  setMenuOpen(false);
                }}
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
              >
                {theme === "light" ? (
                  <>
                    <FiMoon />
                    <span>Dark Mode</span>
                  </>
                ) : (
                  <>
                    <FiSun className="text-yellow-400" />
                    <span>Light Mode</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
