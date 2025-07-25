import { motion } from 'framer-motion';
import React from "react";
import { FaNewspaper, FaBlog, FaVideo, FaPodcast, FaQuoteLeft } from 'react-icons/fa';
import SpotlightCard from './SpotlightCard';

const contents = [
  { title: 'Newsletter', icon: <FaNewspaper size={32} />, desc: 'Subscribe to the latest insights and updates.' },
  { title: 'Blog', icon: <FaBlog size={32} />, desc: 'Read articles on entrepreneurship, careers, and more.' },
  { title: 'Videos', icon: <FaVideo size={32} />, desc: 'Watch videos on life, money, and growth.' },
  { title: 'Podcast', icon: <FaPodcast size={32} />, desc: 'Listen to the podcast for deep dives.' },
  { title: 'Quotes', icon: <FaQuoteLeft size={32} />, desc: 'Get inspired by daily quotes.' },
];

const ContentSections = () => (
  <section id="content" className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-blue-700 text-center">Content</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {contents.map((c, idx) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.7 }}
          >
            <SpotlightCard className="flex flex-col items-center">
              <div className="mb-4 text-blue-400">{c.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-center text-white">{c.title}</h3>
              <p className="text-gray-300 text-sm text-center">{c.desc}</p>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ContentSections; 