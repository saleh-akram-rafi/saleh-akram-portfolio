"use client";

import { motion } from "framer-motion";

const shortTermGoals = [
  {
    title: "Academic Excellence",
    description: "Maintain an elite CGPA track (targeting above 3.7) by dedicating consistent effort and mastering core subject matter."
  },
  {
    title: "The Grain Protector Prototype",
    description: "Build an end-to-end IoT data pipeline using ESP32, DHT22, MQ-135 sensors, and a normalized 3NF database schema."
  },
  {
    title: "Publish a Research Paper",
    description: "Apply curve fitting and numerical analysis to develop a predictive algorithm for early fungal growth detection, targeting IEEE or ACM venues by mid-2027."
  },
  {
    title: "Global MSc Preparation",
    description: "Complete IELTS examinations by June 2027, finalizing top-tier university applications by October 2027."
  }
];

const longTermGoals = [
  {
    title: "World-Class Master's Degree (MSc)",
    description: "Secure admission and begin an MSc program at a globally recognized, top-tier research university specialized in advanced IoT architectures."
  },
  {
    title: "Found a B2B IoT Enterprise",
    description: "Scale the 'Grain Protector' and other projects into a fully-fledged AgriTech startup offering industrial loss-prevention hardware and recurring SaaS analytics."
  },
  {
    title: "Authoritative IoT Industry Expert",
    description: "Build an elite professional profile bridging the gap between hardware, cloud database logic, and industrial data tracking."
  },
  {
    title: "Master the Soft-Skill Spectrum",
    description: "Evolve as a high-level executive by mastering emotional intelligence, high-stakes communication, and strategic business leadership."
  }
];

const leftColumnVariants = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, type: "spring", stiffness: 100 } }
};

const rightColumnVariants = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, type: "spring", stiffness: 100 } }
};

export default function Goals() {
  return (
    <section className="py-24 px-8 md:px-24 bg-[#121212] relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white tracking-tight">
            Career Mapping & Vision
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">

          {/* Left Column: Short-Term */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4"
            >
              Short-Term Goals (2026 - 2027)
            </motion.h3>

            <div className="space-y-6">
              {shortTermGoals.map((goal, idx) => (
                <motion.div
                  key={idx}
                  variants={leftColumnVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.15 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md hover:bg-white/10 transition-colors duration-300"
                >
                  <h4 className="text-xl font-bold text-[#00E5FF] mb-3 leading-snug">
                    {goal.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {goal.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Long-Term */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4"
            >
              Long-Term Goals (2028 & Beyond)
            </motion.h3>

            <div className="space-y-6">
              {longTermGoals.map((goal, idx) => (
                <motion.div
                  key={idx}
                  variants={rightColumnVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.15 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md hover:bg-white/10 transition-colors duration-300"
                >
                  <h4 className="text-xl font-bold text-[#FF6B00] mb-3 leading-snug">
                    {goal.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {goal.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
