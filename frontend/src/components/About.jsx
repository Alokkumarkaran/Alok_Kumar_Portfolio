import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaPython, FaDatabase, FaChartBar, FaCode } from "react-icons/fa";

export default function About() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 17) setGreeting("Good Afternoon");
    else if (hour < 20) setGreeting("Good Evening");
    else setGreeting("Good Night");
  }, []);

  return (
    <section
      id="about"
      className="w-full min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 py-24 px-6 md:px-16 lg:px-28 flex flex-col items-center justify-center"
    >
      {/* ===== Heading ===== */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold mb-10 text-center text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">
          Me
        </span>
      </motion.h2>

      {/* ===== About Text ===== */}
      <motion.div
        className="w-full text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-xl font-medium text-gray-800 dark:text-gray-200 text-justify">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-cyan-500 font-semibold"
          >
            {greeting}!
          </motion.span>{" "}
          I'm <strong>Alok Kumar</strong>, a results-driven{" "}
          <strong>Software Developer</strong> and{" "}
          <strong>Data Analyst</strong> who transforms complex ideas into elegant, scalable
          digital solutions. With a passion for clean code, analytical precision, and creative problem-solving,
          I build applications that not only perform seamlessly but also deliver measurable impact.
        </p>

        <p>
          I specialize in{" "}
          <strong>Full Stack Software Development</strong> with expertise in the{" "}
          <strong>MERN Stack</strong>{" "}
          (<strong>MongoDB, Express.js, React.js, Node.js, FastAPI</strong>). Experienced in designing secure,
          scalable, and high-performance web applications. Proficient in RESTful API
          development, database design, cloud deployment, and Agile/Scrum methodologies.
          Strong problem-solving, debugging, and code optimization skills with a focus on
          delivering business value.
        </p>

        <p>
          My expertise extends to <strong>Data Analytics</strong> — converting raw data into actionable insights
          using <strong>Python</strong>, <strong>SQL</strong>, and <strong>Power BI</strong>. I design data
          pipelines and dashboards that empower organizations to make informed, data-driven decisions.
        </p>

        <p>
          During my <strong>Infosys Springboard 6.0 Internship</strong>, I built{" "}
          <em>Hire-A-Helper</em>, a full-stack service marketplace connecting professionals and clients.
          I also developed projects like <em>Skill Swap Platform</em> and{" "}
          <em>Real-Time Chat Application</em>, leveraging modern frameworks and best UI/UX practices.
        </p>

        <p>
          I hold a <strong>Master’s in Computer Application (MCA)</strong> from{" "}
          <strong>Chandigarh University</strong>, where I deepened my knowledge of cloud computing,
          data analytics, and advanced web technologies.
        </p>

        <p>
          If you’re looking for someone who thrives on innovation, collaboration, and continuous learning —{" "}
          <a
            href="#contact"
            className="text-cyan-500 font-semibold hover:underline"
          >
            let’s connect!
          </a>
        </p>
      </motion.div>

      {/* ===== Skill Icons ===== */}
      <motion.div
        className="flex justify-center flex-wrap gap-8 mt-12 text-cyan-500 text-4xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <FaReact title="React.js" />
        <FaPython title="Python" />
        <FaDatabase title="SQL & MongoDB" />
        <FaChartBar title="Power BI / Data Visualization" />
        <FaCode title="FastAPI / Backend" />
      </motion.div>
    </section>
  );
}
