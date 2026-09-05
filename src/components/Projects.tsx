"use client";

import { motion } from "framer-motion";

const experience = {
  title: "Member at Shikkha IT LTD.",
  description: "A Bangladesh-based venture studio and tech incubator working to build skilled tech professionals, startup teams, and global-ready software businesses.",
};

const projects = [
  {
    title: "Smart Streetlight with Traffic Density Override (Ongoing)",
    description: "IoT-enabled smart streetlight that automatically activates at night, dynamically increases brightness when a vehicle approaches to save energy, and publishes real-time sensor data to a cloud dashboard.",
    tags: ["IoT", "ESP32", "Cloud Dashboard"],
  },
  {
    title: "University Exam Seating Management System",
    description: "A PostgreSQL-backed full-stack web application that automates university exam seat allocation for 800 students across 16 rooms and 15 exams, enforcing anti-cheating batch-mixing rules directly at the database level through triggers and constraints.",
    tags: ["PostgreSQL", "Full-Stack", "Database Triggers"],
  },
  {
    title: "Restaurant Bill Generator Using Compiler Design Concepts",
    description: "A modular C compiler that processes restaurant orders through all five classical compiler phases (Lexer → Parser → Symbol Table → Semantic Analysis → Code Generation) to produce a VAT-calculated, discount-aware restaurant bill.",
    tags: ["C", "Compiler Design", "Lexer/Parser"],
  },
  {
    title: "Ascend Eco Bloom",
    description: "A gamified personal growth tracker web application that helps users log daily activities, earn XP rewards, track progress, and measure eco impact through carbon-saving reports.",
    tags: ["WebApp", "Gamification", "Sustainability"],
  },
  {
    title: "Bank System With Transaction Rollback",
    description: "A C-based bank management system that uses linked lists and stacks to manage accounts, handle transactions, and rollback the most recent transaction for error correction.",
    tags: ["C", "Data Structures", "Linked Lists"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Projects() {
  return (
    <section className="py-24 px-8 md:px-24 bg-[#121212] relative z-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white tracking-tight">
            Projects & Experience
          </h2>
        </motion.div>

        {/* Professional Experience Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 relative overflow-hidden rounded-3xl"
        >
          {/* Subtle gradient border effect behind */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B00]/40 to-transparent opacity-20" />
          <div className="relative bg-white/5 border border-[#FF6B00]/30 rounded-3xl p-8 md:p-12 backdrop-blur-md">
            <h3 className="text-[#FF6B00] text-sm md:text-base font-bold tracking-widest uppercase mb-3">
              Professional Experience
            </h3>
            <h4 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {experience.title}
            </h4>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl">
              {experience.description}
            </p>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col backdrop-blur-md transition-colors duration-300 hover:border-white/20 hover:bg-white/10"
            >
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-4 leading-snug">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="px-4 py-1.5 rounded-full bg-white/10 text-xs font-semibold text-gray-200 tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
