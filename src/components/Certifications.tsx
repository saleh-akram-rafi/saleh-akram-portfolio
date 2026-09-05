"use client";

import { motion } from "framer-motion";

const certs = [
  {
    title: "Data Annotation",
    issuer: "Quantigo AI",
    image: "/certificates/QuantigoAI.webp"
  },
  {
    title: "Best Library User (Summer 2025)",
    issuer: "DIU Library",
    image: "/certificates/libraryawardsummer2025.webp"
  },
  {
    title: "Best Library User (Fall 2024)",
    issuer: "DIU Library",
    image: "/certificates/libraryawardFall2024.webp"
  },
  {
    title: "18th Position: Growing Star Spring 2024",
    issuer: "DIU",
    image: "/certificates/DIUgrowingstar.webp"
  },
  {
    title: "Googling Contest Spring 2024",
    issuer: "DIU CPC",
    image: "/certificates/googling.webp"
  },
  {
    title: "Active Volunteer: Job Utsob 2024",
    issuer: "DIU",
    image: "/certificates/jobutshob2024.webp"
  },
  {
    title: "Class Opener & Wrapping Toolkit: 31 Teaching Strategies",
    issuer: "GoEdu",
    image: "/certificates/Class-Opener-Wrapping-Toolkit-31Teaching-Strategies.webp"
  },
  {
    title: "Training on Climate Change, Human Mobility, and Resilience",
    issuer: "GoEdu",
    image: "/certificates/Training-on-Climate-Change-Human-Mobility-and-Resilience.webp"
  },
  {
    title: "Soft Skill and Hard Skill",
    issuer: "GoEdu",
    image: "/certificates/Soft-Skill-and-Hard-Skill.webp"
  },
  {
    title: "Puro Puri English Shikhi",
    issuer: "English Boli",
    image: "/certificates/Puro-Puri-English-Shikh.webp"
  },
  {
    title: "Become & Make A Leader: With Examples",
    issuer: "GoEdu",
    image: "/certificates/Become-Make-A-Leader-With-Examples.webp"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Certifications() {
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
            Certifications & Awards
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {certs.map((cert, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-[#00E5FF]/50 hover:shadow-[0_0_20px_rgba(0,229,255,0.1)] transition-colors duration-300 flex flex-col"
            >
              {/* Certificate Image */}
              <div className="w-full h-48 bg-black/40 overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-start">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-[#00E5FF] font-medium text-sm tracking-wide">
                  {cert.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
