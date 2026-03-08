import { motion } from 'motion/react';

const skills = [
  "Python", "SQL", "Generative AI", "Machine Learning", "Figma", "Data Visualization", "React", "Next.js", "FastAPI", "PostgreSQL", "AWS"
];

export default function Resume() {
  return (
    <section id="about" className="py-24 bg-[var(--bg-primary)] text-[var(--text-main)] overflow-hidden transition-colors duration-400">
      <div className="px-6 md:px-12 lg:px-24 mb-16 flex flex-col md:flex-row justify-between items-start md:items-center">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 md:mb-0">About & Skills</h2>
        <a
          href="/Shivam_Singh_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download="Shivam_Singh_Resume.pdf"
          className="px-8 py-4 bg-[var(--text-main)] text-[var(--bg-primary)] rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[var(--accent-1)] transition-colors duration-300 shadow-lg shadow-[var(--accent-1)]/20"
        >
          Download Resume ↗
        </a>
      </div>

      {/* Infinite Ticker - Acts as the Skills section */}
      <div id="skills" className="relative flex overflow-x-hidden border-y border-[var(--card-bg)] py-8 bg-[var(--card-bg)]">
        <motion.div
          className="flex whitespace-nowrap items-center"
          animate={{ x: [0, -2000] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {[...skills, ...skills, ...skills, ...skills, ...skills].map((skill, index) => (
            <span key={index} className="flex items-center text-4xl md:text-6xl font-bold uppercase tracking-tighter text-[var(--text-main)] opacity-30 hover:opacity-100 hover:text-[var(--accent-1)] transition-all duration-300 cursor-default mx-8">
              {skill} <span className="text-[var(--accent-2)] opacity-80 mx-8 md:mx-16">•</span>
            </span>
          ))}
        </motion.div>
      </div>

      <div className="px-6 md:px-12 lg:px-24 mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-[var(--text-main)] opacity-70 text-sm font-mono uppercase tracking-widest mb-6">Summary</h3>
          <p className="text-xl leading-relaxed text-[var(--accent-2)]">
            I am Shivam Singh, currently pursuing Computer Science and Data Analytics (CSDA) at IIT Patna.
            Passionate about technology, well-versed in English, and thrive on creative challenges.
            My ability to learn quickly helps me adapt to new situations and master emerging technologies with ease.
          </p>
        </div>
        <div>
          <h3 className="text-[var(--text-main)] opacity-70 text-sm font-mono uppercase tracking-widest mb-6">Education</h3>
          <ul className="space-y-4">
            <li className="flex justify-between border-b border-[var(--card-bg)] pb-4 text-[var(--text-main)] hover:text-[var(--accent-1)] transition-colors">
              <span className="font-bold text-lg">IIT Patna</span>
              <span className="text-[var(--text-main)] opacity-70 font-mono">2025 - 2029</span>
            </li>
            <li className="flex justify-between border-b border-[var(--card-bg)] pb-4 text-[var(--text-main)] hover:text-[var(--accent-1)] transition-colors">
              <span className="font-bold text-lg">Hansraj College</span>
              <span className="text-[var(--text-main)] opacity-70 font-mono">2026 - 2029</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
