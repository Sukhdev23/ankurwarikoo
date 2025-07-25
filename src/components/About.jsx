import React from "react";
import { motion } from "framer-motion";
import { SparklesIcon } from "lucide-react";
import { Badge } from "../components/ui/badge";

const About = () => (
  <section id="about" className="relative py-12 md:py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
    {/* Decorative SVG blob */}
    <svg className="absolute -top-20 -left-20 w-96 h-96 opacity-20" viewBox="0 0 200 200">
      <path fill="#38bdf8" d="M40.5,-67.6C52.7,-60.2,62.7,-52.2,68.2,-41.5C73.7,-30.8,74.7,-17.4,74.2,-4.2C73.7,9,71.7,22,65.2,32.7C58.7,43.4,47.7,51.8,36.1,59.2C24.5,66.6,12.2,73,0.2,72.7C-11.8,72.4,-23.6,65.4,-34.2,58.2C-44.8,51,-54.2,43.6,-60.2,33.7C-66.2,23.8,-68.8,11.4,-68.2,-0.7C-67.6,-12.8,-63.8,-25.6,-56.2,-35.7C-48.6,-45.8,-37.2,-53.2,-25.1,-60.2C-13,-67.2,0,-73.8,12.2,-74.2C24.5,-74.6,36.9,-68.9,40.5,-67.6Z" transform="translate(100 100)" />
    </svg>
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10 relative z-10">
      {/* Left: Image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center md:justify-end"
      >
        <div className="relative">
          <img
            src="https://i0.wp.com/ankurwarikoo.com/wp-content/uploads/2022/07/imageedit_3_8408235035.png?w=800&ssl=1   "
            alt="About"
            className="w-64 h-64 object-cover rounded-3xl shadow-2xl border-4 border-blue-200"
          />
          <SparklesIcon className="absolute -top-6 -left-6 text-blue-400 animate-pulse" size={40} />
        </div>
      </motion.div>
      {/* Right: Text */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 bg-white/80 rounded-2xl shadow-lg p-6 md:p-10 border border-blue-100 backdrop-blur-md"
      >
        <Badge variant="outline" className="mb-4 rounded-lg border border-blue-200 bg-white text-blue-700">
          <SparklesIcon className="mr-2 text-blue-400" /> About Me
        </Badge>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-blue-800">
          Hi, I'm <span className="text-blue-500">Ankur Warikoo</span>
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          I help people <span className="font-semibold text-blue-500">learn, grow, and succeed</span> in life and business. My mission is to empower you with practical skills, a growth mindset, and the confidence to achieve your dreams.
        </p>
        <ul className="list-disc pl-5 text-blue-700 space-y-1 mb-4">
          <li>Entrepreneur, educator, and mentor</li>
          <li>Author of best-selling books</li>
          <li>Millions of learners worldwide</li>
        </ul>
        <div className="flex gap-2 flex-wrap">
          <Badge className="bg-blue-100 text-blue-700">#Growth</Badge>
          <Badge className="bg-blue-100 text-blue-700">#Mindset</Badge>
          <Badge className="bg-blue-100 text-blue-700">#Learning</Badge>
        </div>
      </motion.div>
    </div>
  </section>
);

export default About; 