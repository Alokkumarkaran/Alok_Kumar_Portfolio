import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../data/profile";

export default function Hero() {
  const controls = useAnimation();
  const [offsetY, setOffsetY] = useState(0);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * 0.2);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-8 w-full">

        {/* ===== Left Content ===== */}
        <div className="flex-1 text-center md:text-left z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-gray-900 dark:text-white">
            Hi, I'm {profile.name}
          </h1>

          <h2 className="text-xl md:text-2xl font-medium mb-4 text-gray-700 dark:text-gray-300">
            Software Developer | Data Analyst
          </h2>

          <div className="text-lg mb-6 text-gray-600 dark:text-gray-400">
            <Typewriter
              options={{
                strings: [
                  "MERN Stack & FastAPI Developer",
                  "Data Analyst (SQL, Python, Power BI)",
                  "Building Scalable Web Apps",
                  "Turning Data into Insights",
                  "Open to New Opportunities ",
                ],
                autoStart: true,
                loop: true,
                delay: 70,
              }}
            />
          </div>

          {/* === CTA Buttons === */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-6">
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-violet-500 text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-md"
            >
              Hire Me
            </a>
            <a
              href="/Alok_Kumar_resume.pdf"
              className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:scale-105 transition-transform duration-300"
            >
              Download CV
            </a>
          </div>

          {/* === Social Icons === */}
          <div className="flex justify-center md:justify-start gap-6 mt-4">
            <motion.a
              href="https://github.com/Alokkumarkaran"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-700 dark:text-gray-300 hover:text-cyan-400 transition-all"
            >
              <FiGithub size={28} />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/alok-kumar-karan/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-700 dark:text-gray-300 hover:text-violet-400 transition-all"
            >
              <FiLinkedin size={28} />
            </motion.a>

            <motion.a
              href="mailto:alokkumarkaranraj@gmail.com"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-700 dark:text-gray-300 hover:text-cyan-400 transition-all"
            >
              <FiMail size={28} />
            </motion.a>
          </div>
        </div>

        {/* ===== Right Image Section ===== */}
        <div className="flex-1 flex justify-center md:justify-end items-center relative">
          {/* Background Glow */}
          <div className="absolute w-80 h-80 md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-tr from-cyan-300 to-violet-400 blur-3xl opacity-30 animate-pulse" />

          {/* Floating Profile Image */}
          <motion.img
            src="/Alok_Kumar.png"
            alt={profile.name}
            className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px] object-contain rounded-full shadow-2xl cursor-pointer"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ y: offsetY }}
            whileHover={{ scale: 1.05, rotate: 2 }}
          />

          {/* Soft Overlay */}
          <div className="absolute w-80 h-80 md:w-[500px] md:h-[500px] rounded-full bg-white/20 dark:bg-gray-900/20 blur-2xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
