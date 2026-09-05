"use client";

import { motion } from "framer-motion";

const educationData = [
  {
    title: "B.Sc. in Computer Science and Engineering",
    institution: "Daffodil International University (DIU)",
    status: "7th Semester",
    year: "Present",
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    institution: "Bogura Cantonment Public School and College",
    status: "GPA: 5.00",
    year: "Past",
  },
  {
    title: "Secondary School Certificate (SSC)",
    institution: "B.L. Govt. High School",
    status: "GPA: 5.00",
    year: "Past",
  },
];

export default function Education() {
  return (
    <section className="py-24 px-8 md:px-24 bg-[#121212] relative z-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white tracking-tight">
            Educational Background
          </h2>
        </motion.div>

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-6 pl-8 md:pl-12 space-y-12">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] md:-left-[57px] top-2 w-4 h-4 rounded-full bg-[#00E5FF] shadow-[0_0_10px_#00E5FF]" />
              
              {/* Card */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                <span className="text-[#00E5FF] font-medium text-sm tracking-widest uppercase mb-2 block">
                  {edu.year}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {edu.title}
                </h3>
                <p className="text-lg text-gray-300 mb-1">
                  {edu.institution}
                </p>
                <p className="text-gray-400 font-light">
                  {edu.status}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
