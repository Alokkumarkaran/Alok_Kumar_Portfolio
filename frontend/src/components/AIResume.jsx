import React, { useState } from "react";
import axios from "axios";
import { FiUpload, FiCheckCircle, FiLoader } from "react-icons/fi";
import { motion } from "framer-motion";

export default function AIResume() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  async function submit(e) {
    e.preventDefault();
    if (!file) return alert("Please choose a file");
    const fd = new FormData();
    fd.append("file", file);
    setLoading(true);
    try {
      const resp = await axios.post("http://localhost:8000/api/analyze-resume", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResult(resp.data);
    } catch (err) {
      alert("Could not analyze. Make sure backend is running at http://localhost:8000");
    } finally {
      setLoading(false);
    }
  }

  const getScoreColor = (score) => {
    if (score >= 80) return "from-green-400 to-emerald-500";
    if (score >= 60) return "from-yellow-400 to-orange-500";
    return "from-red-400 to-pink-500";
  };

  return (
    <section
      id="ai"
      className="w-full py-24 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900"
    >
      {/* ===== Header ===== */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          AI{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            Resume Analyzer
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
          Upload your resume and get instant analysis, highlights, and suggestions — powered by AI.
        </p>
      </div>

      {/* ===== Upload Form ===== */}
      <form
        onSubmit={submit}
        className="w-full max-w-3xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-8 shadow-lg flex flex-col gap-4 transition-all"
      >
        <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-8 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition">
          <FiUpload className="text-4xl text-cyan-500 mb-2" />
          <span className="text-gray-700 dark:text-gray-200">
            {file ? file.name : "Click or drag file to upload (.pdf, .docx, .txt)"}
          </span>
          <input
            type="file"
            accept=".pdf,.docx,.txt"
            onChange={(e) => setFile(e.target.files[0])}
            className="hidden"
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-violet-500 text-white py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-transform"
        >
          {loading ? <FiLoader className="animate-spin" /> : <FiCheckCircle />}{" "}
          {loading ? "Analyzing..." : "Analyze Resume"}
        </button>
      </form>

      {/* ===== Result Section ===== */}
      {result && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 w-full max-w-3xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-8 shadow-xl grid md:grid-cols-2 gap-6"
        >
          {/* --- Circular Progress --- */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-40 h-40">
              <svg className="w-full h-full">
                <circle
                  className="text-gray-300 dark:text-gray-700"
                  strokeWidth="10"
                  stroke="currentColor"
                  fill="transparent"
                  r="60"
                  cx="80"
                  cy="80"
                />
                <motion.circle
                  className={`text-cyan-500`}
                  strokeWidth="10"
                  strokeLinecap="round"
                  stroke="url(#gradient)"
                  fill="transparent"
                  r="60"
                  cx="80"
                  cy="80"
                  initial={{ strokeDasharray: 377, strokeDashoffset: 377 }}
                  animate={{
                    strokeDashoffset: 377 - (377 * result.score) / 100,
                  }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-gray-900 dark:text-white">
                {result.score}%
              </div>
            </div>
            <p className="mt-4 text-gray-600 dark:text-gray-300 font-medium">Overall Score</p>
          </div>

          {/* --- Highlights & Suggestions --- */}
          <div className="space-y-3 text-left">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
              Key Highlights
            </h4>
            <p className="text-gray-700 dark:text-gray-200">{result.highlights}</p>

            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mt-4">
              Suggestions for Improvement
            </h4>
            <p className="text-gray-700 dark:text-gray-200">{result.suggestions}</p>
          </div>
        </motion.div>
      )}
    </section>
  );
}
