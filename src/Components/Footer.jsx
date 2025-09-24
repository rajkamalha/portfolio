import React from "react";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
  Home,
   User,
    Briefcase,
    
} from "lucide-react";

const Footer = () => {
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
      label: "Instagram",
      value: "@___rajkamal",
      icon: <Instagram className="w-6 h-6" style={{ color: accentColor }} />,
      link: "https://instagram.com/____rajkamal",
    },
    {
      label: "WhatsApp",
      value: "8129408910",
      icon: <MessageCircle className="w-6 h-6" style={{ color: accentColor }} />,
      link: "https://wa.me/918129408910",
    },
   
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-50 via-white to-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Branding Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Raj Kamal</h2>
          <p className="mt-2 text-gray-600">
            Passionate MERN Developer | Building Web Apps with Creativity 
          </p>
        </div>

        {/* Quick Links */}
       
<div>
  <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Links</h3>
  <ul className="space-y-2 text-gray-600">
    <li>
      <a
        href="#home"
        className="hover:text-[#62c6e2] transition flex items-center gap-2"
      >
        <Home className="w-4 h-4" style={{ color: accentColor }} /> Home
      </a>
    </li>
    <li>
      <a
        href="#about"
        className="hover:text-[#62c6e2] transition flex items-center gap-2"
      >
        <User className="w-4 h-4" style={{ color: accentColor }} /> About
      </a>
    </li>
    <li>
      <a
        href="#projects"
        className="hover:text-[#62c6e2] transition flex items-center gap-2"
      >
        <Briefcase className="w-4 h-4" style={{ color: accentColor }} /> Projects
      </a>
    </li>
    <li>
      <a
        href="#contact"
        className="hover:text-[#62c6e2] transition flex items-center gap-2"
      >
        <Mail className="w-4 h-4" style={{ color: accentColor }} /> Contact
      </a>
    </li>
  </ul>
</div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
          <ul className="space-y-3">
            {contacts.map((contact, idx) => (
              <li key={idx}>
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:scale-105 transition transform"
                >
                  {contact.icon}
                  <span className="text-gray-700 hover:text-[#62c6e2] transition">
                    {contact.value}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 pt-6 text-center">
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Raj Kamal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
