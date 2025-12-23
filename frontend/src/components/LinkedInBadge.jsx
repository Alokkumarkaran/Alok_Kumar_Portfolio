import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FiLinkedin } from "react-icons/fi";

export default function LinkedInBadge() {
  useEffect(() => {
    if (!window.IN) {
      const script = document.createElement("script");
      script.src = "https://platform.linkedin.com/badges/js/profile.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section
      id="linkedin"
      className="w-full py-24 px-6 md:px-16 lg:px-24 bg-gradient-to-tr 
      from-gray-50 via-white to-gray-100 
      dark:from-gray-950 dark:via-gray-900 dark:to-gray-800"
    >
      {/* HEADER */}
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white">
          LinkedIn{" "}
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text">
            Profile
          </span>
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Connect with me on LinkedIn — explore my experience, projects, skills,
          and professional network.
        </p>
      </div>

      {/* LAYOUT */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-16 w-full">

        {/* Left Info Card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <div className="bg-white/70 dark:bg-gray-800/60 
              backdrop-blur-xl p-10 rounded-3xl shadow-xl 
              border border-gray-200 dark:border-gray-700">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-5">
              Why Connect?
            </h3>

            <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
              <li>• Discover my experience & achievements</li>
              <li>• View endorsements & recommendations</li>
              <li>• Stay updated with my new work</li>
              <li>• Grow your network with me</li>
            </ul>
          </div>
        </motion.div>

        {/* Right Badge Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.03 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="relative w-full max-w-md group">

            {/* Glowing Border */}
            <div className="absolute -inset-1 rounded-3xl 
                bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 
                opacity-40 group-hover:opacity-80 blur-xl transition-all"></div>

            {/* Card */}
            <div className="relative bg-white dark:bg-gray-900 
                rounded-3xl border border-gray-200 dark:border-gray-700 
                p-6 shadow-2xl">
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 flex items-center justify-center 
                    rounded-full bg-blue-600/20">
                  <FiLinkedin className="text-3xl text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  My LinkedIn Badge
                </h3>
              </div>

              {/* Dark Theme LinkedIn Badge */}
              <div className="rounded-xl overflow-hidden border border-gray-300 dark:border-gray-700 p-4 bg-white dark:bg-gray-800 shadow-inner">
                <div
                  className="badge-base LI-profile-badge"
                  data-locale="en_US"
                  data-size="large"
                  data-theme="dark"
                  data-type="VERTICAL"
                  data-vanity="alok-kumar-karan"
                  data-version="v1"
                >
                  <a
                    className="badge-base__link LI-simple-link"
                    href="https://in.linkedin.com/in/alok-kumar-karan?trk=profile-badge"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Alok Kumar
                  </a>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
