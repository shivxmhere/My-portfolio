import { motion } from 'motion/react';
import MagicText from './MagicText';

const experiences = [
  {
    role: "Data Analytics Intern",
    company: "InAmigos Foundation",
    period: "Sep 2025 - Oct 2025",
    description: "Led cross-functional teams, automated social media workflows with Python (60% efficiency boost), and engineered technical solutions for platform reliability.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" // Corporate/Work generic
  },
  {
    role: "BS in Computer Science & Data Analytics",
    company: "IIT Patna",
    period: "2025 - 2029",
    description: "Focus on Data Structures, Algorithms, Machine Learning, and Statistical Analysis. National Hackathon Winner.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop" // College generic (IIT Patna placeholder)
  },
  {
    role: "Higher National Diploma in French",
    company: "Hansraj College",
    period: "Jan 2026 - Apr 2029",
    description: "Advanced language studies alongside technical curriculum.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop" // University generic
  }
];

export default function Timeline() {
  return (
    <section id="journey" className="py-24 px-6 md:px-12 lg:px-24 bg-[var(--bg-primary)] text-[var(--text-main)] transition-colors duration-400">
      <MagicText text="Experience & Education" tag="h2" className="text-4xl md:text-6xl font-bold mb-16 tracking-tighter" />

      <div className="border-t border-[var(--card-bg)]">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group grid grid-cols-1 md:grid-cols-12 gap-8 p-6 md:p-12 border-b border-[var(--card-bg)] hover:bg-[var(--card-bg)] hover:shadow-lg transition-all duration-300 cursor-default items-center rounded-2xl md:rounded-none md:hover:rounded-2xl my-2 md:my-0"
          >
            <div className="md:col-span-3 text-[var(--text-main)] opacity-70 font-mono text-sm uppercase tracking-widest group-hover:text-[var(--accent-1)] group-hover:opacity-100 transition-colors">
              {exp.period}
            </div>

            <div className="md:col-span-4">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-[var(--card-bg)] hidden md:block group-hover:border-[var(--accent-1)] transition-colors">
                  <img src={exp.image} alt={exp.company} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 image-invert-wrapper" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl text-[var(--text-main)] group-hover:text-[var(--accent-1)] transition-colors">{exp.role}</h3>
                  <span className="block text-lg font-mono text-[var(--accent-2)] opacity-80 group-hover:opacity-100">{exp.company}</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 text-[var(--text-main)] opacity-70 group-hover:opacity-100 transition-opacity leading-relaxed">
              {exp.description}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
