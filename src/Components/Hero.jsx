import React from "react";
import { FaFacebookF, FaInstagram, FaGithub,FaWhatsapp  } from "react-icons/fa";
import heroImg from "../assets/captain.png"; // 👉 replace with your image path

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-16 py-10 bg-white"
    > 
      {/* Left Side - Text Content */}
      <div className="text-center md:text-left max-w-lg mt-5">
        <h3 className="text-lg md:text-xl text-gray-600">Hello, I am</h3>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-2">
          <span className="text-[#62c6e2]">Rajkamal H</span>
        </h1>
        <p className="text-gray-600 mt-4 text-sm sm:text-base md:w-125 px-2 ">
        I create modern, user-friendly, and responsive web applications. 
  As a passionate <span className="text-[#62c6e2] font-semibold">MERN Stack Developer</span>, 
  I specialize in building scalable full-stack solutions using 
  <span className="font-medium"> MongoDB, Express.js, React, and Node.js</span>. 
  I focus on clean code, performance optimization, and delivering seamless user experiences.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-6 justify-center md:justify-start">
  <a
    href="https://wa.me/8129408910" // Replace with your WhatsApp number
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border-2 border-[#62c6e2] text-[#62c6e2] hover:bg-[#62c6e2] hover:text-white transition"
  >
    <FaWhatsapp />
  </a>
  <a
    href="https://instagram.com/____rajkamal"
    className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border-2 border-[#62c6e2] text-[#62c6e2] hover:bg-[#62c6e2] hover:text-white transition"
  >
    <FaInstagram />
  </a>
  <a
    href="https://github.com/rajkamalha"
    className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border-2 border-[#62c6e2] text-[#62c6e2] hover:bg-[#62c6e2] hover:text-white transition"
  >
    <FaGithub />
  </a>
</div>

        {/* Button */}
        <a
          href="/Resume-Rajkamal.pdf"
          download
          className="inline-block mt-6 px-5 py-2 sm:px-6 sm:py-3 bg-[#62c6e2] text-white font-medium rounded-lg shadow-md hover:bg-[#4bb3cf] transition text-sm sm:text-base"
        >
          Download CV
        </a>
      </div>

      {/* Right Side - Hero Box with Arc */}
      <div className="mt-10 md:mt-0 sm:ml-10 -md:ml-90 relative flex items-center justify-center">
        {/* Rotating Square */}
        <div
          className="relative w-50 h-50 sm:w-56  sm:h-56 md:w-90 md:h-90 bg-[#62c6e2] ml-[60px] shadow-2xl flex items-center justify-center rounded-lg"
          style={{ animation: "spin 60s linear infinite" }}
        >
          {/* Image counter-rotates */}
          <img
            src={heroImg}
            alt="Hero"
            className="w-34 sm:w-40 md:w-70 object-contain border-1 border-blue-400"
            style={{ animation: "spin 60s linear infinite reverse" }}
          />
        </div>

        {/* Left Arc */}
        <div className="absolute -left-20 sm:-left-28 md:-left-60 top-1/2 -translate-y-1/2 w-58 h-58 sm:w-64 sm:h-64 md:w-[450px] md:h-[450px] border-[3px] ml-[70px] border-[#62c6e2] rounded-full border-r-0 border-t-0 border-b-0">
          <span className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 text-[#62c6e2] font-bold text-lg sm:text-xl ml-[20px] md:ml-[0px] md:text-4xl whitespace-nowrap bg-white px-2 sm:px-3 py-1 rounded-full ">
            Web Developer
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
