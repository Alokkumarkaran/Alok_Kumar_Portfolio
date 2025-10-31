import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 text-white">
      {/* ===== Upper Footer Content ===== */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-3">Alok Kumar</h3>
          <p className="text-sm text-gray-100 leading-relaxed">
            Software Developer & Data Analyst passionate about building scalable web apps
            and crafting data-driven solutions using MERN, FastAPI, Python, SQL, and Power BI.
          </p>
          <div className="flex gap-4 mt-4 text-xl">
            <a
              href="https://github.com/Alokkumarkaran"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition-transform transform hover:scale-110"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/alok-kumar-karan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition-transform transform hover:scale-110"
            >
              <FiLinkedin />
            </a>
            <a
              href="mailto:alokkumarkaranraj@gmail.com"
              className="hover:text-gray-200 transition-transform transform hover:scale-110"
            >
              <FiMail />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 border-b border-white/40 pb-1 w-fit">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#about" className="hover:underline hover:text-gray-200 transition">
                About Me
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:underline hover:text-gray-200 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:underline hover:text-gray-200 transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#certifications" className="hover:underline hover:text-gray-200 transition">
                Certifications
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:underline hover:text-gray-200 transition">
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline hover:text-gray-200 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3 border-b border-white/40 pb-1 w-fit">
            Contact Info
          </h3>
          <ul className="space-y-3 text-sm">
           
            <li className="flex items-center gap-2">
              <FiPhone className="text-white/80" />
              <a href="tel:+919113793533" className="hover:underline hover:text-gray-200">
                +91 91137 93533
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FiMail className="text-white/80" />
              <a
                href="mailto:alokkumarkaranraj@gmail.com"
                className="hover:underline hover:text-gray-200"
              >
                alokkumarkaranraj@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter / Quote Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3 border-b border-white/40 pb-1 w-fit">
            Let's Connect
          </h3>
          <p className="text-sm text-gray-100 mb-4">
            Have an opportunity or project in mind? Let’s discuss ideas and make it happen.
          </p>
          <a
            href="mailto:alokkumarkaranraj@gmail.com"
            className="inline-block px-6 py-2 rounded-full bg-white text-blue-600 font-semibold text-sm hover:bg-gray-200 transition"
          >
            Say Hello 👋
          </a>
        </div>
      </div>

      {/* ===== Bottom Footer Bar ===== */}
      <div className="w-full border-t border-white/20 mt-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-6 py-4 text-sm text-gray-100">
          <p className="text-center sm:text-left">
            © {currentYear} <strong>Alok Kumar</strong>. All Rights Reserved.
          </p>
          <p className="text-center sm:text-right">
  Designed and developed by <span className="font-semibold">Alok Kumar</span> — 
  turning ideas into impactful digital experiences.
</p>

        </div>
      </div>
    </footer>
  );
}
