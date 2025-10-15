import React, { useState } from "react";
import axios from "axios";
import { FiUpload, FiCheckCircle, FiLoader } from "react-icons/fi";

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
      const resp = await axios.post(
        "http://localhost:8000/api/analyze-resume",
        fd,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setResult(resp.data);
    } catch (err) {
      alert(
        "Could not analyze. Make sure backend is running at http://localhost:8000"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="ai"
      className="w-full py-24 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          AI <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">Resume Analyzer</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
          Upload your resume and get instant analysis, highlights, and suggestions powered by AI.
        </p>
      </div>

      <form
        onSubmit={submit}
        className="w-full max-w-3xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-8 shadow-lg flex flex-col gap-4 transition-all"
      >
        <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-8 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition">
          <FiUpload className="text-4xl text-cyan-500 mb-2" />
          <span className="text-gray-700 dark:text-gray-200">{file ? file.name : "Click or drag file to upload (.pdf, .docx, .txt)"}</span>
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

      {result && (
        <div className="mt-8 w-full max-w-3xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-6 shadow-lg space-y-4">
          <h4 className="text-xl font-bold text-gray-900 dark:text-white">
            Score: {result.score}
          </h4>
          <p className="text-gray-700 dark:text-gray-200">
            <strong>Highlights:</strong> {result.highlights}
          </p>
          <p className="text-gray-700 dark:text-gray-200">
            <strong>Suggestions:</strong> {result.suggestions}
          </p>
        </div>
      )}
    </section>
  );
}
