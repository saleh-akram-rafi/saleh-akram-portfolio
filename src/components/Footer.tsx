"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const links = [
    { name: "GitHub", href: "https://github.com/saleh-akram-rafi/" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/saleh-akram01/" },
    { name: "Email", href: "mailto:salehakram02921@gmail.com" }
  ];

  return (
    <footer className="bg-[#121212] relative z-20 overflow-hidden">
      {/* Subtle glowing horizontal divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent shadow-[0_0_10px_rgba(255,255,255,0.1)]" />

      <div className="max-w-7xl mx-auto px-8 md:px-24 py-16 flex flex-col items-center justify-center">

        {/* Social Links */}
        <div className="flex items-center space-x-8 mb-8">
          {links.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              whileHover={{ y: -3, color: "#FF6B00" }}
              className="text-gray-300 font-medium tracking-wide transition-colors duration-300"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-gray-500 font-light text-sm tracking-widest text-center">
          © 2026 Saleh Akram. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
