import React from "react";
import { FaReact, FaNodeJs, FaDatabase, FaCss3Alt } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiTailwindcss } from "react-icons/si";
import aboutImg from "../assets/new.png"; // 👉 replace with your image

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white px-6 md:px-16">
      <div className="flex flex-col md:flex-row items-center gap-16">
        {/* Left Side - Image Box */}
      <div className="relative flex items-center justify-center">
          <div className="relative w-60 h-40 sm:w-64 sm:h-56 md:w-96 md:h-80 bg-[#0f151a] shadow-2xl flex items-center justify-center rounded-2xl overflow-hidden">
            <img
              src={aboutImg}
              alt="About"
              className="w-48 sm:w-52 md:w-92 object-contain hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="text-center md:text-left max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 bg-gradient-to-r from-[#62c6e2] to-[#4bb3cf] text-transparent bg-clip-text tracking-wide">
            About Me
          </h2>

          {/* Highlight Box */}
          <div className="bg-white border-l-4 border-[#62c6e2] p-4 shadow-md rounded-md mb-6">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              I am a highly motivated and passionate{" "}
              <span className="font-semibold text-[#62c6e2]">MERN Stack Developer</span> 
              with expertise in building full-stack applications using{" "}
              <span className="font-medium">MongoDB, Express.js, React, and Node.js</span>.  
              I love transforming ideas into{" "}
              <span className="italic">scalable, high-performance, and user-friendly</span> web solutions.
            </p>
          </div>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            My focus lies in crafting <span className="font-semibold">clean code</span>, 
            optimizing <span className="font-semibold">performance</span>, 
            and enhancing <span className="font-semibold">user experience</span>.  
            I thrive in collaborative environments and enjoy solving complex challenges with 
            creativity and precision.
          </p>

          {/* Skills / Tags */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <span className="flex items-center gap-2 px-5 py-2 bg-white text-[#62c6e2] font-medium rounded-full shadow hover:scale-105 transition">
              <FaReact /> React.js
            </span>
            <span className="flex items-center gap-2 px-5 py-2 bg-white text-[#62c6e2] font-medium rounded-full shadow hover:scale-105 transition">
              <SiTailwindcss /> Tailwind CSS
            </span>
            <span className="flex items-center gap-2 px-5 py-2 bg-white text-[#62c6e2] font-medium rounded-full shadow hover:scale-105 transition">
              <SiJavascript /> JavaScript (ES6+)
            </span>
            <span className="flex items-center gap-2 px-5 py-2 bg-white text-[#62c6e2] font-medium rounded-full shadow hover:scale-105 transition">
              <FaNodeJs /> Node.js
            </span>
            <span className="flex items-center gap-2 px-5 py-2 bg-white text-[#62c6e2] font-medium rounded-full shadow hover:scale-105 transition">
              <SiMongodb /> MongoDB
            </span>
            <span className="flex items-center gap-2 px-5 py-2 bg-white text-[#62c6e2] font-medium rounded-full shadow hover:scale-105 transition">
              <FaDatabase /> Express.js
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
