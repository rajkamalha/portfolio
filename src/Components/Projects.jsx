import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

// Example logos
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/fishman.png";
import logo3 from "../assets/tejas.png";
const Projects = () => {
  const projectList = [
    {
      title: "Sukacare.org",
      subtitle: "Full-Stack Web Application (MERN)",
      overview:
        "A scalable, responsive web app showcasing skills in secure APIs, efficient state management, and robust backend development.",
      bullets: [
        "SukaCare.org – Kidney Transplant Management System(LIVE)-Tech Stack: MERN, Tailwind CSS | Deployment: Render, Developed a full-stack platform for Suka Charitable Trust with patient & donor management, donor–recipient matching, and case tracking. Implemented JWT authentication, email updates, and a dynamic admin panel for real-time event and content management",
        "Deployed seamlessly on Render",
        "Responsive design & Secure API",
      ],
      link: "https://sukacare.org",
      logo: logo1,
      logoClass: "w-60 h-60", // 👈 custom size
      color: "from-white to-purple-600",
    },
    {
      title: "Orders.fishmanb2b.in",
      subtitle: "Full-Stack Web Application (MERN)",
      overview:
        "A complete online shopping experience with cart, payment gateway integration, and admin dashboard.",
      bullets: [
        "FishmanB2B – Medical Orders E-Commerce Platform-Tech Stack: MERN, Tailwind CSS | Deployment: orders.fishmanb2b.in, Built a B2B medical e-commerce system with secure order tracking, JWT + RBAC authentication, and real-time admin controls. Integrated Nodemailer for order updates and developed a Distributor Module enabling customer account creation and commission-based earnings.",
      ],
      link: "https://orders.fishmanb2b.in/distributor-signup",
      logo: logo2,
      logoClass: "w-92 h-32", // 👈 different size
      color: "from-white to-[#77d6e6]",
    },
    {
      title: "Tejasfurniture.in",
      subtitle: "Full-Stack Web Application (MERN)",
      overview:
        "A complete online shopping experience with cart, payment gateway integration, and admin dashboard.",
      bullets: [
        "E-commerce Website – TejasFurniture.in-Developed a full-fledged e-commerce platform using React, Node.js, Express, and MongoDB. Implemented dynamic category-based product listing, combo offers, new arrivals, and top-selling sections. Designed an intuitive UI with Tailwind CSS and ensured seamless backend integration for efficient product management.",
      ],
      link: "https://tejasfurniture.in",
      logo: logo3,
      logoClass: "w-36 h-36", // 👈 another size
      color: "from-white to-green-600",
    },
  ];
  
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projectList.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPlaying, projectList.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % projectList.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? projectList.length - 1 : prev - 1));
  };

  return (
    <section id="projects" className="w-full bg-gray-50 py-20 relative">
      <div className="w-full max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#62c6e2]">Projects</h2>

        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className={`w-full bg-gradient-to-r ${projectList[current].color} text-black flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between p-6 md:p-10 rounded-2xl`}
            >
              {/* LEFT SIDE - Logo */}
              <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
                {projectList[current].logo && (
                  <motion.img
                  src={projectList[current].logo}
                  alt={projectList[current].title}
                  className={`${projectList[current].logoClass} object-contain drop-shadow-lg`} // 👈 dynamic
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                />
                
                )}
              </div>

              {/* RIGHT SIDE - Content */}
              <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-5 text-left md:pl-6">
                <h3 className="text-3xl font-bold">{projectList[current].title}</h3>
                <h4 className="text-xl font-medium opacity-90">{projectList[current].subtitle}</h4>
                <ul className="list-disc pl-5 space-y-2">
                  {projectList[current].bullets.map((b, i) => (
                    <li key={i} className="opacity-90">{b}</li>
                  ))}
                </ul>
                <p className="mt-2 text-sm opacity-80">
                  <strong>Overview:</strong> {projectList[current].overview}
                </p>
                <motion.a
                  href={projectList[current].link}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 inline-block px-6 py-3 bg-white text-gray-800 rounded-full font-medium shadow-md hover:bg-gray-100 transition"
                >
                   View Live Demo
                </motion.a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* LEFT / RIGHT buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 left-4 bg-white/30 hover:bg-white/50 p-2 rounded-full"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 right-4 bg-white/30 hover:bg-white/50 p-2 rounded-full"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Play/Pause button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute bottom-4 right-4 bg-white/30 hover:bg-white/50 p-2 rounded-full"
          >
            {isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
