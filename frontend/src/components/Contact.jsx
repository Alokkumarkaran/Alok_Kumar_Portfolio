import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FiUploadCloud,
  FiSend,
  FiLoader,
  FiCheckCircle,
  FiPhone,
  FiMail,
  FiUser,
} from "react-icons/fi";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));
    if (file) data.append("file", file);

    try {
      setLoading(true);
      setSent(false);
      const res = await axios.post("http://localhost:8000/api/contact/send", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success(res.data.message || "Message sent successfully ✅", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setFile(null);
      setSent(true);
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message ❌", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });
    } finally {
      setLoading(false);
      setTimeout(() => setSent(false), 4000);
    }
  };

  return (
    <section
  id="contact"
  className="w-full py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900"
>

      <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-center mb-16 px-6"
  >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
      Let’s{" "}
      <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
        Connect
      </span>
    </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-3 max-w-2xl mx-auto">
      Have a project, collaboration idea, or feedback? Feel free to reach
      out below — you can even attach your resume or file 📎
    </p>
      </motion.div>

       <div className="w-full px-6">
    <div className="max-w-[1500px] mx-auto">
      <motion.form
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        onSubmit={handleSubmit}
        className="w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 md:p-10 flex flex-col gap-4 border border-gray-200/20"
      >

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <FiUser className="absolute left-3 top-3.5 text-cyan-500 text-lg" />
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name *"
              required
              className="w-full pl-10 p-3 border rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-cyan-400 outline-none"
            />
          </div>
          <div className="relative">
            <FiMail className="absolute left-3 top-3.5 text-cyan-500 text-lg" />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email *"
              required
              type="email"
              className="w-full pl-10 p-3 border rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-cyan-400 outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <FiPhone className="absolute left-3 top-3.5 text-cyan-500 text-lg" />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone (optional)"
              type="tel"
              className="w-full pl-10 p-3 border rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-cyan-400 outline-none"
            />
          </div>
          <input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-cyan-400 outline-none"
          />
        </div>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          placeholder="Your Message *"
          required
          className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-cyan-400 outline-none"
        ></textarea>

        {/* === File Upload === */}
        <motion.label
          whileHover={{ scale: 1.02 }}
          className={`flex flex-col items-center justify-center border-2 border-dashed ${
            file
              ? "border-violet-500 bg-violet-50 dark:bg-violet-900/20"
              : "border-gray-300 dark:border-gray-600"
          } rounded-xl p-6 text-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition`}
        >
          <FiUploadCloud className="text-4xl text-cyan-500 mb-2" />
          <span className="text-gray-700 dark:text-gray-200">
            {file ? `📎 ${file.name}` : "Click or drag file to upload (optional)"}
          </span>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
            className="hidden"
          />
        </motion.label>

        <motion.button
          type="submit"
          disabled={loading}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 font-semibold text-lg flex items-center justify-center gap-2 text-white rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 hover:shadow-[0_0_20px_#8b5cf6] transition duration-300"
        >
          {loading ? (
            <>
              <FiLoader className="animate-spin text-xl" /> Sending...
            </>
          ) : sent ? (
            <>
              <FiCheckCircle className="text-xl" /> Sent Successfully!
            </>
          ) : (
            <>
              <FiSend className="text-xl" /> Send Message
            </>
          )}
        </motion.button>
      </motion.form>
      </div>
    </div>

      <ToastContainer />
    </section>
  );
}
