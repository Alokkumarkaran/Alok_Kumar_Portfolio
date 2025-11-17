import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Hero() {
  const [greeting, setGreeting] = useState("");
  const [gradient, setGradient] = useState("from-cyan-400 to-violet-500");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Good Morning 🌅");
      setGradient("from-amber-300 to-orange-500");
    } else if (hour < 17) {
      setGreeting("Good Afternoon ☀️");
      setGradient("from-sky-400 to-cyan-500");
    } else if (hour < 20) {
      setGreeting("Good Evening 🌇");
      setGradient("from-purple-400 to-pink-500");
    } else {
      setGreeting("Good Night 🌙");
      setGradient("from-indigo-500 to-blue-800");
    }
  }, []);

  return (
    <section className="relative w-screen min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-24 md:pt-32">
      {/* ==== Animated Floating Background ==== */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-25 top-10 left-10 animate-pulse"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-3xl opacity-25 bottom-10 right-10 animate-pulse"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* ==== Main Container ==== */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 gap-10 relative z-10">
        {/* ==== Left Content ==== */}
        <div className="flex-1 text-center md:text-left">
          {/* Greeting Bubble */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="inline-block mb-5 px-8 py-3 rounded-full backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border border-gray-300/40 dark:border-gray-600/40 shadow-lg"
          >
            <h3
              className={`text-lg md:text-xl font-semibold bg-gradient-to-r ${gradient} bg-clip-text text-transparent animate-gradient-x`}
            >
              {greeting}
            </h3>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-5xl md:text-7xl font-extrabold mb-3 text-gray-900 dark:text-white"
          >
            Hi, I’m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-800 animate-gradient-x">
  Alok Kumar
</span>




          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6"
          >
            Software Developer | Data Analyst | Tech Enthusiast
          </motion.h2>

          {/* Professional Summary */}
          

          {/* Typewriter */}
          <div className="text-lg mb-6 text-gray-700 dark:text-gray-300">
            <Typewriter
              options={{
                strings: [
                  "MERN Stack & FastAPI Developer", "Data Analyst (SQL, Python, Power BI)", "Building Scalable Web Apps", "Turning Data into Insights", "Open to New Opportunities ",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-8">
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-white font-semibold hover:shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Let’s Connect
            </a>
            <a
              href="/Alok_Kumar_resume.pdf"
              className="px-8 py-3 rounded-full border border-gray-400 dark:border-gray-600 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
            >
              Download CV
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 mt-8">
            <motion.a
              href="https://github.com/Alokkumarkaran"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-gray-700 dark:text-gray-300 hover:text-cyan-400"
            >
              <FiGithub size={28} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/alok-kumar-karan/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-gray-700 dark:text-gray-300 hover:text-violet-400"
            >
              <FiLinkedin size={28} />
            </motion.a>
            <motion.a
              href="mailto:alokkumarkaranraj@gmail.com"
              whileHover={{ scale: 1.2 }}
              className="text-gray-700 dark:text-gray-300 hover:text-cyan-400"
            >
              <FiMail size={28} />
            </motion.a>
          </div>
        </div>

        {/* ==== Right Image ==== */}
        {/* ==== Right Image (Enhanced with Rotating Orbit) ==== */}
<div className="flex-1 flex justify-center items-center relative">
  {/* Soft Gradient Background Glow */}
  <motion.div
    className="absolute w-[520px] h-[520px] bg-gradient-to-tr from-cyan-400 via-blue-500 to-violet-600 
               rounded-full blur-3xl opacity-25 animate-pulse"
    animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.35, 0.2] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
  />

  {/* Rotating Orbit Ring */}
  <motion.div
    className="absolute w-[480px] h-[480px] rounded-full border-t-[6px] border-b-[6px] border-gradient-to-r 
               from-cyan-400 via-blue-400 to-violet-500 blur-sm"
    style={{
      borderImage: "linear-gradient(to right, #22d3ee, #3b82f6, #8b5cf6) 1",
    }}
    animate={{ rotate: 360 }}
    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
  />

  {/* Inner Pulsing Halo */}
  <motion.div
    className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-tr 
               from-cyan-400/20 via-blue-400/10 to-violet-500/20 blur-2xl"
    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
  />

  {/* Profile Image with Floating Effect */}
  <motion.img
    src="/Alok_Kumar.png"
    alt="Alok Kumar — Full Stack Developer and Data Analyst alokkumarkaranraj"
    className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[480px] md:h-[480px] object-cover rounded-full shadow-2xl ring-4 ring-white/30 dark:ring-gray-700/50"
    animate={{ y: [0, -15, 0] }}
    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
    whileHover={{ scale: 1.05, rotate: 2 }}
  />
</div>

      </div>
    </section>
  );
}
