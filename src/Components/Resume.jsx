import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code, Cpu } from "lucide-react";

const accentColor = "#62c6e2";

const experiences = [
  {
    role: "MERN Stack Developer",
    company: "Next Skills Technologies",
    duration: "6 Months",
    icon: <Code className="w-7 h-7" style={{ color: accentColor }} />,
  },
  {
    role: "MERN Course",
    company: "Softronics",
    duration: "6 Months",
    icon: <Code className="w-7 h-7 text-green-500" />,
  },
  {
    role: "PCB Board Functional Testing Engineer",
    company: "VAS Advanced Systems",
    duration: "2 Years",
    icon: <Cpu className="w-7 h-7 text-blue-500" />,
  },
  {
    role: "Machine Functional Testing Engineer (R&D)",
    company: "Boatload Minds Pvt Ltd",
    duration: "1 Year",
    icon: <Cpu className="w-7 h-7 text-red-500" />,
  },
];

const education = [
  { level: "10th(SSLC)", school: "PGPHSS Polpully", score: "80%" },
  { level: "12th(Higher Secondary Education)", school: "BGBHSS Vannamada", score: "80%" },
  {
    level: "B.Sc Electronics (2016-2019)",
    school: "College of Applied Science Kuzhalmannam, Kottayi",
    score: "70%",
  },
  {
    level: "M.Sc Applied Electronics (2019-2021)",
    school: "RVS College of Arts and Science Sulur Coimbatore",
    score: "83%",
  },
];

const ResumePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 px-6 md:px-20 py-16 relative overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#62c6e2]/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#62c6e2]/30 rounded-full blur-3xl -z-10 animate-pulse"></div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-center mb-16"
      >
        My{" "}
        <span style={{ color: accentColor }} className="drop-shadow-md">
          Resume
        </span>
      </motion.h1>

      {/* Experience Section */}
      <section className="mb-20">
        <h2
          style={{ color: accentColor }}
          className="text-3xl font-bold flex items-center gap-2 mb-8"
        >
          <Briefcase style={{ color: accentColor }} /> Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6 flex items-center gap-5 border border-gray-100 hover:scale-[1.02] hover:shadow-2xl hover:border-[#62c6e2] transition-all duration-300"
            >
              <div className="flex-shrink-0">{exp.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {exp.role}
                </h3>
                <p className="text-gray-600">{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.duration}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#62c6e2] to-transparent mb-20"></div>

      {/* Education Section */}
      <section>
        <h2
          style={{ color: accentColor }}
          className="text-3xl font-bold flex items-center gap-2 mb-8"
        >
          <GraduationCap style={{ color: accentColor }} /> Education
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-gray-100 hover:scale-[1.03] hover:shadow-2xl hover:border-[#62c6e2] transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {edu.level}
              </h3>
              <p className="text-gray-600">{edu.school}</p>
              <p className="text-sm font-medium text-gray-500">
                Score:{" "}
                <span style={{ color: accentColor, fontWeight: "600" }}>
                  {edu.score}
                </span>
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResumePage;
