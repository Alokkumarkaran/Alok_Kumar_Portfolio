import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import logo from "/Alok_Kumar.png";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden 
                    bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 
                    dark:from-gray-950 dark:via-gray-900 dark:to-gray-800">

      {/* === Subtle Animated Background Gradient === */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-cyan-200/30 via-blue-200/20 to-violet-300/20 
                   dark:from-cyan-900/20 dark:via-blue-900/20 dark:to-violet-900/20"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "300% 300%" }}
      />

      {/* === Center Logo with Rings === */}
      <div className="relative flex flex-col items-center justify-center">
        {/* Outer Glow */}
        <motion.div
          className="absolute w-56 h-56 rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-violet-600 
                     blur-3xl opacity-30"
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Rotating Rings */}
        <motion.div
          className="absolute w-52 h-52 rounded-full border-t-4 border-b-4 border-cyan-400/60"
          animate={{ rotate: 360 }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-44 h-44 rounded-full border-t-4 border-b-4 border-violet-500/60"
          animate={{ rotate: -360 }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
        />

        {/* Logo */}
        <motion.img
          src={logo}
          alt="Alok Kumar Logo"
          className="relative z-10 w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover shadow-xl 
                     ring-4 ring-white/40 dark:ring-gray-700/50"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>

      {/* === Typewriter Boot Text === */}
      <div className="mt-10 text-center">
        <motion.h2
          className="text-2xl sm:text-3xl font-extrabold tracking-wide 
                     bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 bg-clip-text text-transparent"
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Typewriter
            options={{
              strings: [
                "Initializing Portfolio Environment...",
                "Loading Professional Experience...",
                "Configuring Data Visualization Modules...",
                "Optimizing Front-End Interface...",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 20,
            }}
          />
        </motion.h2>

        <motion.p
          className="mt-3 text-gray-700 dark:text-gray-300 text-sm sm:text-base tracking-wide"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.6 }}
        >
          Alok Kumar — Software Developer | Data Analyst
        </motion.p>
      </div>

      {/* === Progress Indicator Bar === */}
      <motion.div
        className="mt-8 w-56 sm:w-72 h-1 rounded-full overflow-hidden bg-gray-300/40 dark:bg-gray-700/40"
      >
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600"
          initial={{ x: "-100%" }}
          animate={{ x: ["-100%", "0%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* === Background Floating Orbs === */}
      <motion.div
        className="absolute w-64 h-64 bg-gradient-to-tr from-violet-400/15 to-cyan-400/15 
                   rounded-full blur-3xl top-20 left-10"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-gradient-to-tr from-cyan-300/15 to-blue-400/15 
                   rounded-full blur-3xl bottom-20 right-10"
        animate={{ y: [0, -25, 0], x: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
