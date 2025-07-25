import React, { useState } from "react";

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Books', href: '#books' },
  { label: 'Courses', href: '#courses' },
  { label: 'Content', href: '#content' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="flex justify-between px-8 py-4 fixed top-0 left-0 w-full z-50 bg-transparent text-white">
      {/* Left: Site Logo */}
      <div className="flex items-center">
        <div className="rounded-3xl bg-black backdrop-blur-md shadow-lg p-1 flex items-center justify-center">
          <img
            src="https://ankurwarikoo.com/wp-content/uploads/2021/09/Logo_White_Vector.png"
            alt="ankur Warikoo Official Website"
            className="h-10 w-auto object-contain"
          />
        </div>
      </div>

      {/* Hamburger for mobile */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Right: Nav Links */}
      <div className="rounded-full bg-white/10 backdrop-blur-md shadow-lg px-6 py-2 gap-6 hidden md:flex">
        {navLinks.map(({ label, href }) => {
          if (label === 'Contact') {
            return (
              <a
                key="Contact"
                href={href}
                className="flex items-center bg-[rgb(56,242,202)] hover:bg-[rgb(42,200,170)] transition-colors duration-300 p-2 rounded-full"
                style={{ cursor: "pointer" }}
              >
                <div className="text-white text-sm pl-1 font-bold uppercase tracking-widest">
                  Contact
                </div>
                <img
                  src="https://files.peachworlds.com/website/4d10ea1c-195e-4391-85ba-1c07cc5e42de/arrow.svg"
                  loading="lazy"
                  alt="Arrow"
                  className="ml-1 w-4 h-4"
                />
              </a>
            );
          }

          return (
            <a
              key={label}
              href={href}
              className="flex items-center uppercase tracking-widest font-semibold text-black text-sm transition-colors duration-200 hover:text-[rgb(56,242,202)]"
              style={{ letterSpacing: '0.13em' }}
            >
              {label}
            </a>
          );
        })}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 md:hidden" onClick={() => setMenuOpen(false)}></div>
      )}
      <div className={`fixed top-0 right-0 z-50 w-3/4 max-w-xs h-full bg-white/95 shadow-lg transform transition-transform duration-300 md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col gap-6 p-8 pt-20">
          {navLinks.map(({ label, href }) => {
            if (label === 'Contact') {
              return (
                <a
                  key="Contact"
                  href={href}
                  className="flex items-center bg-[rgb(56,242,202)] hover:bg-[rgb(42,200,170)] transition-colors duration-300 p-2 rounded-full"
                  style={{ cursor: "pointer" }}
                  onClick={() => setMenuOpen(false)}
                >
                  <div className="text-white text-sm pl-1 font-bold uppercase tracking-widest">
                    Contact
                  </div>
                  <img
                    src="https://files.peachworlds.com/website/4d10ea1c-195e-4391-85ba-1c07cc5e42de/arrow.svg"
                    loading="lazy"
                    alt="Arrow"
                    className="ml-1 w-4 h-4"
                  />
                </a>
              );
            }
            return (
              <a
                key={label}
                href={href}
                className="flex items-center uppercase tracking-widest font-semibold text-black text-base transition-colors duration-200 hover:text-[rgb(56,242,202)] py-2"
                style={{ letterSpacing: '0.13em' }}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
