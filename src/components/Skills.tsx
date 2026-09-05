"use client";

import { motion } from "framer-motion";

const technicalSkills = ["C", "C++", "Java", "Python", "ESP32", "AI Annotation"];
const softSkills = ["Leadership", "Networking", "Teamwork", "Communication", "Problem-Solving"];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, type: "spring", stiffness: 200 } },
};

export default function Skills() {
  return (
    <section className="py-24 px-8 md:px-24 bg-[#121212] relative z-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FF6B00]">
            Skills & Expertise
          </h2>
        </motion.div>

        <div className="space-y-16">
          {/* Technical Arsenal */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">Technical Arsenal</h3>
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
            >
              {technicalSkills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, borderColor: 'rgba(255, 107, 0, 0.5)' }}
                  className="px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md transition-colors duration-300 text-gray-200 font-medium tracking-wide cursor-default hover:text-white hover:bg-white/10"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Professional Soft Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">Professional Soft Skills</h3>
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
            >
              {softSkills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, borderColor: 'rgba(255, 107, 0, 0.5)' }}
                  className="px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md transition-colors duration-300 text-gray-200 font-medium tracking-wide cursor-default hover:text-white hover:bg-white/10"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
