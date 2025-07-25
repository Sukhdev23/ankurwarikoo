import { FaInstagram, FaXTwitter, FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa6';
import React from "react";

const socials = [
  { icon: <FaInstagram />, link: '#' },
  { icon: <FaXTwitter />, link: '#' },
  { icon: <FaLinkedin />, link: '#' },
  { icon: <FaFacebook />, link: '#' },
  { icon: <FaYoutube />, link: '#' },
];

const Footer = () => (
  <footer className="w-full flex flex-col items-center justify-center py-6 mt-12 bg-gradient-to-tr from-[#0f2027] via-[#2c5364] to-[#24243e] relative">
    {/* Optional SVG wave for top border */}
    <div className="absolute top-0 left-0 w-full overflow-hidden leading-0" style={{height: '30px'}}>
      <svg viewBox="0 0 500 30" preserveAspectRatio="none" className="w-full h-full">
        <path d="M0,30 C150,0 350,60 500,30 L500,00 L0,0 Z" style={{stroke: 'none', fill: 'rgba(255,255,255,0.12)'}}></path>
      </svg>
    </div>
    <div className="rounded-2xl bg-white/20 backdrop-blur-md shadow-lg px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6 w-full max-w-5xl mx-auto border border-white/20">
      <div className="flex gap-5 text-2xl">
        {socials.map((s, idx) => (
          <a
            href={s.link}
            key={idx}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-brand-teal transition-colors duration-200"
          >
            {s.icon}
          </a>
        ))}
      </div>
      <div className="text-white text-sm text-center md:text-right drop-shadow">
        &copy; {new Date().getFullYear()} Zaan Webveda Private Limited | All Rights Reserved
      </div>
    </div>
  </footer>
);

export default Footer; 