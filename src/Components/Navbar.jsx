import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] transition-all duration-300 z-50 
      ${scrolled ? "bg-white/90 backdrop-blur-md rounded-3xl shadow-lg" : "bg-transparent"}`}
    >
      <div className="relative flex items-center justify-between py-3 px-6 overflow-hidden rounded-3xl">
        
        {/* Left Side - Logo */}
        <h1 className="text-xl sm:text-2xl font-bold text-[#62c6e2]">Rajkamal H</h1>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8 font-medium text-gray-700">
          <li><a href="#home" className="hover:text-[#2babd0] text-[#62c6e2] transition">Home</a></li>
          <li><a href="#about" className="hover:text-[#2babd0] text-[#62c6e2] transition">About</a></li>
          <li><a href="#projects" className="hover:text-[#2babd0] text-[#62c6e2] transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-[#2babd0] text-[#62c6e2] transition">Contact</a></li>
        </ul>

        {/* Right Side - Resume Button (hidden on mobile) */}
        <a
          href="/Resume-Rajkamal.pdf"
          download
          className="hidden md:inline-block ml-auto bg-[#62c6e2] text-white px-4 py-2 rounded-full font-medium hover:bg-[#2babd0] transition"
        >
          Download Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden ml-auto text-[#62c6e2] text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md rounded-2xl mt-2 mx-4 shadow-lg">
          <ul className="flex flex-col items-center py-4 space-y-4 font-medium text-gray-700">
            <li><a href="#home" className="hover:text-[#2babd0] text-[#62c6e2] transition" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" className="hover:text-[#2babd0] text-[#62c6e2] transition" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#projects" className="hover:text-[#2babd0] text-[#62c6e2] transition" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="#contact" className="hover:text-[#2babd0] text-[#62c6e2] transition" onClick={() => setMenuOpen(false)}>Contact</a></li>
            <li>
              <a
                href="/resume.pdf"
                download
                className="bg-[#62c6e2] text-white px-4 py-2 rounded-full font-medium hover:bg-[#2babd0] transition"
                onClick={() => setMenuOpen(false)}
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
