import { motion } from 'motion/react';
import MagicText from './MagicText';

const projects = [
  {
    title: "RAGE OS",
    category: "Student OS",
    description: "A comprehensive \"Student Operating System\" designed to replace scattered productivity apps with a unified ecosystem (RISE. ACHIEVE. GROW. EVOLVE.). It deeply integrates essential academic tools into one seamless interface: Pomodoro timer, spaced-repetition flashcards, exam countdown, mood-tracking, OKR management, and an in-context AI tutor. By combining these with detailed analytics (RAGE Report) and visual study heatmaps, it eliminates context-switching, helps build streaks, avoids burnout, and maximizes academic potential.",
    tags: ["Productivity", "EdTech", "AI Tutor", "Analytics"],
    year: "Feb 2026",
    image_url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Krishi-Net",
    category: "AI & Agriculture",
    description: "AI-powered agricultural intelligence platform empowering farmers with crop planning, yield prediction, and decision-making insights. Built to solve real-world farming challenges.",
    tags: ["Python", "NLP", "Machine Learning"],
    year: "2026",
    image_url: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Automated Content Gen",
    category: "Automation @ InAmigos",
    description: "Python-based automation tools developed during my internship at InAmigos Foundation. Reduced manual effort by 60% for content creation and poster design workflows.",
    tags: ["Python", "Automation", "Design Scripting"],
    year: "2025",
    image_url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Data Analytics Portfolio",
    category: "Data Science @ IIT Patna",
    description: "Comprehensive data analysis projects utilizing Python, pandas, and visualization libraries. Includes academic research and statistical modeling performed at IIT Patna.",
    tags: ["Python", "Pandas", "Matplotlib"],
    year: "2025",
    image_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Gen AI Applications",
    category: "Generative AI",
    description: "Explored and implemented generative AI models for various use cases, demonstrating proficiency in cutting-edge AI technologies and prompt engineering.",
    tags: ["Deep Learning", "LLMs", "Prompt Engineering"],
    year: "2025",
    image_url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-[var(--bg-primary)] transition-colors duration-400">
      <div className="flex justify-between items-end mb-16 border-b border-[var(--text-main)] pb-8">
        <MagicText text="Selected Works" tag="h2" className="text-4xl md:text-6xl font-bold tracking-tighter text-[var(--text-main)]" />
        <span className="text-[var(--text-main)] opacity-70 text-sm uppercase font-mono tracking-widest hidden md:block">2025 — Present</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group cursor-pointer p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-bg)] hover:border-[var(--accent-1)] transition-all duration-300 shadow-sm"
          >
            <div className="aspect-[4/3] bg-[var(--bg-primary)] mb-6 overflow-hidden relative rounded-xl border border-[var(--card-bg)]">
              {project.image_url ? (
                <motion.img
                  src={project.image_url}
                  alt={project.title}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-cover group-hover:grayscale-0 grayscale-[40%] transition-all duration-500"
                />
              ) : (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full bg-[var(--accent-2)] opacity-10 group-hover:opacity-20 transition-all duration-500"
                />
              )}
              <div className="absolute top-4 right-4 bg-[var(--bg-primary)] text-[var(--accent-1)] px-3 py-1 text-xs font-mono font-bold uppercase tracking-widest rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-[var(--accent-1)]">
                View Case
              </div>
            </div>

            <div className="flex justify-between items-start mb-2">
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-main)] group-hover:text-[var(--accent-1)] transition-colors duration-300">{project.title}</h3>
              <span className="text-[var(--text-main)] opacity-70 text-xs font-mono border border-[var(--text-main)] px-2 py-1 rounded-full">{project.year}</span>
            </div>

            <p className="text-[var(--accent-2)] text-sm uppercase font-mono tracking-widest mb-4">{project.category}</p>
            <p className="text-[var(--text-main)] leading-relaxed mb-6 opacity-80">{project.description}</p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag, i) => (
                <span key={i} className="bg-[var(--bg-primary)] text-[var(--accent-1)] border border-[var(--accent-1)] px-3 py-1 text-xs font-mono uppercase tracking-wide rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
