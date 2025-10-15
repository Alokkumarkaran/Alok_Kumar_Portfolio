import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/contact/send', formData, {
        headers: { 'Content-Type': 'application/json' }
      });

      toast.success(res.data.message || 'Message sent successfully ✅', {
        position: "top-center",
        autoClose: 3000,
        theme: "colored"
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error(err);
      toast.error('Failed to send email ❌', {
        position: "top-center",
        autoClose: 3000,
        theme: "colored"
      });
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 transition-colors duration-500">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">
          Get in <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">Touch</span>
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          Have a project or idea? Send me a message and I’ll get back to you!
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden p-8 space-y-4
                   before:absolute before:inset-0 before:bg-gradient-to-tr before:from-cyan-400/20 before:to-violet-500/20 before:-z-10 before:blur-3xl transition-all"
      >
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full p-3 border rounded-lg dark:bg-gray-700"
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full p-3 border rounded-lg dark:bg-gray-700"
        />
        <input
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="w-full p-3 border rounded-lg dark:bg-gray-700"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          placeholder="Message"
          required
          className="w-full p-3 border rounded-lg dark:bg-gray-700"
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 font-medium text-white rounded-lg bg-gradient-to-r from-cyan-400 to-violet-500
                     shadow-lg hover:scale-105 transform transition duration-300"
        >
          Send Message
        </button>
      </form>

      <ToastContainer />
    </section>
  );
}
