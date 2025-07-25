import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope } from 'react-icons/fa';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!form.email.trim()) newErrors.email = 'Email is required.';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) newErrors.email = 'Enter a valid email.';
    if (!form.message.trim()) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-8  bg-blue-50">
      <div className="container mx-auto p-4 max-w-2xl md:max-w-3xl rounded-2xl shadow-lg bg-white/90">
        <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-8">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 flex flex-col justify-center mb-6 md:mb-0 md:pr-6 border-b md:border-b-0 md:border-r border-blue-100"
          >
            <div className="flex flex-col items-center md:items-start">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.7, type: 'spring' }}
                className="mb-2"
              >
                <FaEnvelope className="text-blue-500 text-4xl animate-bounce" />
              </motion.div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-blue-700">Get in Touch</h2>
              <p className="text-gray-700 mb-4 text-center md:text-left text-sm md:text-base">Have a question, collaboration idea, or just want to say hello? Fill out the form and I'll get back to you soon!</p>
              <ul className="space-y-2 text-blue-700 text-sm md:text-base">
                <li className="flex items-center gap-2"><span className="sr-only">Email:</span>ankur@warikoo.com</li>
              </ul>
            </div>
          </motion.div>
          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 flex items-center justify-center"
          >
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-4 sm:p-6 border-2 border-transparent bg-clip-padding relative"
              style={{ background: 'rgba(255,255,255,0.95)', borderImage: 'linear-gradient(90deg, #38bdf8, #6366f1, #06b6d4) 1' }}>
              {submitted ? (
                <div className="text-center">
                  <div className="text-green-500 text-4xl mb-2">✓</div>
                  <div className="text-lg font-semibold mb-2">Thank you!</div>
                  <div className="text-gray-600">Your message has been sent.</div>
                  <button className="mt-6 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition" onClick={() => setSubmitted(false)}>Send Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h1 className="text-2xl font-bold mb-4 text-blue-700 text-center flex items-center justify-center gap-2">
                    <FaEnvelope className="text-blue-400 animate-pulse" /> Get in Touch
                  </h1>
                  <div className="mb-4 relative">
                    <label htmlFor="name" className="block text-left text-gray-700 font-medium mb-1 text-sm">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handleChange}
                      className={`w-full py-2 pl-5 pr-12 rounded-lg bg-gray-100 text-gray-800 font-medium text-base outline-none border ${errors.name ? 'border-red-400' : 'border-none'} focus:ring-2 focus:ring-blue-200 transition`}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    <i className='bx bxs-user absolute right-4 top-9 text-2xl text-gray-400'></i>
                    {errors.name && <div id="name-error" className="text-red-500 text-xs mt-1">{errors.name}</div>}
                  </div>
                  <div className="mb-4 relative">
                    <label htmlFor="email" className="block text-left text-gray-700 font-medium mb-1 text-sm">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={form.email}
                      onChange={handleChange}
                      className={`w-full py-2 pl-5 pr-12 rounded-lg bg-gray-100 text-gray-800 font-medium text-base outline-none border ${errors.email ? 'border-red-400' : 'border-none'} focus:ring-2 focus:ring-blue-200 transition`}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    <i className='bx bxs-envelope absolute right-4 top-9 text-2xl text-gray-400'></i>
                    {errors.email && <div id="email-error" className="text-red-500 text-xs mt-1">{errors.email}</div>}
                  </div>
                  <div className="mb-4 relative">
                    <label htmlFor="message" className="block text-left text-gray-700 font-medium mb-1 text-sm">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Your Message"
                      value={form.message}
                      onChange={handleChange}
                      className={`w-full py-2 pl-5 pr-12 rounded-lg bg-gray-100 text-gray-800 font-medium text-base outline-none border ${errors.message ? 'border-red-400' : 'border-none'} focus:ring-2 focus:ring-blue-200 transition resize-vertical min-h-[80px]`}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    <i className='bx bxs-comment-detail absolute right-4 top-9 text-2xl text-gray-400'></i>
                    {errors.message && <div id="message-error" className="text-red-500 text-xs mt-1">{errors.message}</div>}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: '#2563eb' }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className={`w-full h-11 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow transition text-base flex items-center justify-center ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
                    disabled={loading}
                  >
                    {loading ? (
                      <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 