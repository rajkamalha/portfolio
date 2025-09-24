import React from "react";
import {
  Database, GitBranch, Server, KeyRound,
  ShieldCheck, Layers, Network, Atom, Palette,
  Code, Braces, Globe, Boxes
} from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  {
    category: "MERN & Backend",
    items: [
      { name: "MongoDB", icon: <Database className="w-6 h-6" /> },
      { name: "Node.js", icon: <Server className="w-6 h-6" /> },
      { name: "Express.js", icon: <Network className="w-6 h-6" /> },
      { name: "RESTful APIs", icon: <Globe className="w-6 h-6" /> },
      { name: "Middleware & Routing", icon: <Layers className="w-6 h-6" /> },
      { name: "Authentication (JWT, OAuth)", icon: <KeyRound className="w-6 h-6" /> },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React.js, React Hooks", icon: <Atom className="w-6 h-6" /> },
      { name: "Tailwind CSS, Bootstrap", icon: <Palette className="w-6 h-6" /> },
      { name: "JavaScript (ES6+)", icon: <Code className="w-6 h-6" /> },
      { name: "HTML5, CSS3", icon: <Braces className="w-6 h-6" /> },
    ],
  },
  {
    category: "Tools & Practices",
    items: [
      { name: "Git & GitHub", icon: <GitBranch className="w-6 h-6" /> },
      { name: "Postman for API Testing", icon: <ShieldCheck className="w-6 h-6" /> },
      { name: "Adaptability & Learning", icon: <Boxes className="w-6 h-6" /> },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Expertise = () => {
  return (
    <section id="expertise" className="py-20 bg-gradient-to-b from-gray-50 to-white px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          My <span className="text-[#62c6e2]">Expertise</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          I specialize in building scalable full-stack applications with the
          <span className="text-[#62c6e2] font-semibold"> MERN stack</span>,
          focusing on clean code, performance, and modern UI/UX practices.
        </motion.p>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-8 border-t-4 border-[#62c6e2] hover:scale-105 transform duration-300"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              {/* Category Title */}
              <h3 className="text-xl font-semibold text-[#62c6e2] mb-6 flex items-center justify-center gap-2">
                {skillGroup.category}
              </h3>

              {/* Skill Items */}
              <ul className="space-y-4">
                {skillGroup.items.map((item, idx) => (
                  <motion.li
                    key={idx}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-3 text-gray-700 hover:text-[#62c6e2] transition"
                  >
                    <span className="text-[#62c6e2]">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
