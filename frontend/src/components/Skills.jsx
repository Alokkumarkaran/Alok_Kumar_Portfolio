import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  { name: "React.js", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Express.js", level: 82 },
  { name: "MongoDB", level: 80 },
  { name: "SQL / MySQL", level: 83 },
  { name: "JavaScript (ES6+)", level: 88 },
  { name: "TypeScript", level: 75 },
  { name: "Python", level: 78 },
  { name: "HTML5 & CSS3", level: 92 },
  { name: "Tailwind CSS", level: 88 },
  { name: "Angular", level: 70 },
  { name: "FastAPI", level: 68 },
  { name: "Git & GitHub", level: 87 },
  { name: "RESTful APIs", level: 84 },
  { name: "Docker (Basic)", level: 60 },
];


export default function Skills() {
  return (
    <section
  id="skills"
  className="w-full py-20 px-6 md:px-16 lg:px-32 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800"
>
  <div className="text-center mb-12">
    <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
      My{" "}
      <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
        Skill Set
      </span>
    </h3>
    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
      These are the technologies and tools I’m proficient in and use regularly to build modern web and data-driven applications.
    </p>
  </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
}

function SkillCard({ skill }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="p-6 rounded-2xl shadow-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform duration-300 cursor-pointer relative overflow-hidden"
    >
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          {skill.name}
        </h4>
        <motion.span
          className="text-sm text-gray-500 dark:text-gray-400 font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {skill.level}%
        </motion.span>
      </div>

      <div className="w-full bg-gray-200 dark:bg-gray-700 h-3 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${skill.level}%` : "0%" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </div>

      {/* Optional glow effect */}
      <div className="absolute top-0 left-0 w-full h-full rounded-2xl pointer-events-none bg-gradient-to-tr from-cyan-300/10 via-purple-400/10 to-pink-400/10 opacity-0 hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}
