import React, { useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Hire-A-Helper",
    desc: "Developed during Infosys Springboard 6.0 internship — a full-stack platform connecting service providers and customers for on-demand help, featuring job listings, bookings, and user authentication.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    image: "/Hire_helper.png",
    github: "https://github.com/Alokkumarkaran/Hire_a_Helper_infosys",
    live: "https://hire-a-helper-infosys.vercel.app",
  },
  {
    title: "Skill Swap Platform",
    desc: "A full-stack e-learning and skill-sharing platform enabling learners and educators to connect securely with OTP verification, role-based access, and payment gateway integration.",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
    image: "/Skill_Swap.png",
    github: "https://github.com/Alokkumarkaran/skill-swap",
    live: "https://skill-swap.vercel.app",
  },
  {
    title: "Student Job Tracker (MERN Stack)",
    desc: "A full-stack job application tracker built with the MERN stack that allows users to add, view, update, delete, and filter job applications. It includes authentication, responsive design, and cloud deployment on Vercel and Render.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    image: "/image.png",
    github: "https://github.com/Alokkumarkaran/Student_Job_Tracker",
    live: "https://student-job-tracker-alok-kumars-projects-66159410.vercel.app",
  },
  {
    title: "Real-Time Chat Application",
    desc: "A scalable chat app supporting private chats, group messages, typing indicators, and media sharing using Socket.IO and Express.js.",
    tech: ["React.js", "Node.js", "MongoDB", "Socket.IO"],
    image: "/Chat Appication.png",
    github: "https://github.com/Alokkumarkaran/real-time-chat",
    live: "https://realtimechat.vercel.app",
  },
  {
    title: "Airline Reservation System (SQL Project)",
    desc: "Database system designed with MySQL to manage flight bookings, passengers, and transactions with optimized queries and stored procedures.",
    tech: ["SQL", "MySQL", "Excel"],
    image: "/images/airline-db.png",
    github: "https://github.com/Alokkumarkaran/airline-reservation",
    live: "#",
  },
];

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section
      id="projects"
      className="w-full py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 relative"
    >
      {/* Section Header */}
      <div className="text-center mb-16 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          My{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
          A collection of web and AI-driven applications I’ve built using modern technologies.
        </p>
      </div>

      {/* Project Cards */}
      <div className="w-full px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1500px] mx-auto">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Section with Overlay */}
              <div
                className="relative w-full h-60 overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(project.image)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end justify-between px-4 pb-2 text-white text-sm">
                  <span className="font-medium">{project.title}</span>
                  <button
                    onClick={() => setSelectedImage(project.image)}
                    className="bg-white/20 px-3 py-1 rounded-full text-xs hover:bg-white/40 transition"
                  >
                    View Project Image
                  </button>
                </div>
              </div>

              {/* Text Section */}
              <div className="flex flex-col flex-grow p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{project.desc}</p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r from-cyan-400/20 to-violet-500/20 text-cyan-600 dark:text-cyan-300 border border-cyan-300/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex justify-between items-center mt-auto flex-wrap gap-2">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline hover:scale-105 transition-transform"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:underline hover:scale-105 transition-transform"
                  >
                    <FiGithub /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] mx-4 rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Project View"
              className="w-full h-full object-contain bg-gray-900"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/30 hover:bg-white/60 text-white rounded-full px-3 py-1 text-lg font-bold transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
