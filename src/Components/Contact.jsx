import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
} from "lucide-react";

const accentColor = "#62c6e2";

const contacts = [
  {
    label: "Email",
    value: "kankamal3@gmail.com",
    icon: <Mail className="w-6 h-6" style={{ color: accentColor }} />,
    link: "mailto:kankamal3@gmail.com",
  },
  {
    label: "Phone",
    value: "8129408910",
    icon: <Phone className="w-6 h-6" style={{ color: accentColor }} />,
    link: "tel:8129408910",
  },
  {
    label: "GitHub",
    value: "github.com/rajkamalha",
    icon: <Github className="w-6 h-6 text-gray-800" />,
    link: "https://github.com/rajkamalha",
  },
  {
    label: "LinkedIn",
    value: "raj-kamal-588944285",
    icon: <Linkedin className="w-6 h-6 text-blue-600" />,
    link: "https://www.linkedin.com/in/raj-kamal-588944285",
  },
  {
    label: "Instagram",
    value: "@___rajkamal",
    icon: <Instagram className="w-6 h-6 text-pink-500" />,
    link: "https://instagram.com/____rajkamal",
  },
  {
    label: "WhatsApp",
    value: "8129408910",
    icon: <MessageCircle className="w-6 h-6 text-green-500" />,
    link: "https://wa.me/918129408910",
  },
];

const ContactPage = () => {
  return (
    <div id="contact" className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 px-6 md:px-20 py-16 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#62c6e2]/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#62c6e2]/30 rounded-full blur-3xl -z-10 animate-pulse"></div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-center mb-12"
      >
        Get in{" "}
        <span style={{ color: accentColor }} className="drop-shadow-md">
          Touch
        </span>
      </motion.h1>

      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
        I’m always open to discussing new opportunities, collaborations, or just
        having a friendly chat. Connect with me through any of the platforms
        below!
      </p>

      {/* Contact Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {contacts.map((contact, i) => (
          <motion.a
            key={i}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/90 backdrop-blur-md rounded-2xl shadow-md hover:shadow-2xl border border-gray-100 hover:border-[#62c6e2] transition-all duration-300 p-6 flex flex-col items-center text-center group"
          >
            <div className="mb-4">{contact.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#62c6e2] transition">
              {contact.label}
            </h3>
            <p className="text-sm text-gray-600 mt-1">{contact.value}</p>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default ContactPage;
