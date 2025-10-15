import React from "react";

export default function Education() {
  const education = [
   {
    degree: "Master of Computer Applications (M.C.A)",
    institution: "Chandigarh University, Mohali",
    duration: "2023 - 2025",
    details: "Focused on Full Stack Development, Database Systems, and Cloud Computing. Graduated with strong academic performance and hands-on project experience.",
  },
  {
    degree: "Bachelor of Computer Applications (B.C.A)",
    institution: "Patliputra University, Patna",
    duration: "2019 - 2022",
    details: "Developed a strong foundation in programming, data structures, and web technologies. Completed multiple academic and personal projects in the MERN stack.",
  },
  ];

  return (
    <section
      id="education"
      className="w-full py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900"
    >
      {/* Section Heading */}
      <div className="text-center mb-16 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          My{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            Education
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
          Academic background and certifications that helped shape my career.
        </p>
      </div>

      {/* Education Cards Full Width */}
      <div className="w-full px-6">
        <div className="flex flex-col space-y-8 max-w-[1500px] mx-auto">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-start gap-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex-shrink-0 text-cyan-500 font-bold text-lg md:text-xl">
                {edu.duration}
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
                  {edu.degree}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium">
                  {edu.institution}
                </p>
                <p className="mt-2 text-gray-700 dark:text-gray-200">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
