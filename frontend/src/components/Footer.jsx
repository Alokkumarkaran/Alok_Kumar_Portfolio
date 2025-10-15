import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 text-white shadow-inner">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-5 gap-4">
        
        {/* Copyright */}
        <div className="text-center md:text-left text-sm md:text-base">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">@alokkumarkaranraj</span>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-5 text-xl justify-center">
          <a
            href="https://github.com/Alokkumarkaran"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-100 transition-transform transform hover:scale-110"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/alok-kumar-karan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-100 transition-transform transform hover:scale-110"
          >
            <FiLinkedin />
          </a>
          <a
            href="mailto:alokkumarkaranraj@gmail.com"
            className="hover:text-gray-100 transition-transform transform hover:scale-110"
          >
            <FiMail />
          </a>
        </div>
      </div>
    </footer>
  );
}
