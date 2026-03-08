import React from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';

export default function GithubActivity() {
    return (
        <section id="github" className="relative py-32 px-6 md:px-12 lg:px-24 bg-[var(--bg-secondary)] text-[var(--text-main)] overflow-hidden transition-colors duration-400">
            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <span className="text-[var(--accent-1)] font-mono text-[13px] tracking-widest">// 07. code_activity</span>
                        <h2 className="text-4xl md:text-[48px] font-bold tracking-tighter mt-2 font-[family-name:--font-display]">GitHub Activity</h2>
                        <p className="text-[var(--text-muted)] text-md mt-2 font-mono max-w-xl">
                            {'>'} Actively building in <span className="text-[var(--text-main)] font-bold">Python</span> and deepening knowledge in <span className="text-[var(--text-main)] font-bold">Data Structures & Algorithms (DSA)</span>.
                        </p>
                    </div>
                    <a
                        href="https://github.com/shivxmhere"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 px-6 py-3 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-md font-mono text-sm hover:border-[var(--accent-1)] hover:text-[var(--accent-1)] hover:shadow-[0_0_15px_var(--accent-1)] transition-all duration-300 w-fit"
                    >
                        <Github size={18} /> @shivxmhere
                        <ExternalLink size={14} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </a>
                </div>

                {/* Animated Container Border */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-2xl overflow-hidden group p-[2px]"
                >
                    {/* Rotating gradient background for the animated border */}
                    <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_180deg,var(--accent-1)_270deg,var(--accent-2)_360deg)] animate-[spin_4s_linear_infinite] opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative bg-[var(--bg-primary)] p-6 md:p-10 rounded-2xl z-10 h-full backdrop-blur-md flex flex-col gap-8">

                        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-[2fr_1.5fr] gap-8">
                            {/* Stats Card */}
                            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl overflow-hidden flex items-center justify-center p-4 min-h-[220px] hover:border-[var(--accent-1)] transition-colors duration-300">
                                <img
                                    src="https://github-readme-stats.vercel.app/api?username=shivxmhere&theme=tokyonight&hide_border=true&bg_color=00000000"
                                    alt="GitHub Stats"
                                    className="w-full max-w-[450px] hover:scale-[1.02] transition-transform duration-500"
                                />
                            </div>

                            {/* Top Langs Card */}
                            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl overflow-hidden flex items-center justify-center p-4 min-h-[220px] hover:border-[var(--accent-1)] transition-colors duration-300">
                                <img
                                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=shivxmhere&theme=tokyonight&hide_border=true&bg_color=00000000&layout=compact"
                                    alt="Top Languages"
                                    className="w-full max-w-[350px] hover:scale-[1.02] transition-transform duration-500"
                                />
                            </div>
                        </div>

                        {/* Contribution Graph */}
                        <div className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl overflow-hidden p-6 md:p-8 hover:border-[var(--accent-1)] transition-colors duration-300 flex flex-col items-center">
                            <h3 className="text-[var(--text-muted)] font-mono text-sm mb-6 w-full text-left">{'// Contribution Graph'}</h3>
                            <div className="w-full overflow-x-auto pb-4 flex justify-center">
                                {/* Adding hue-rotate mapping to vaguely match blueish/accent theme, but default looks cool too */}
                                <img
                                    src="https://ghchart.ssh.surf/shivxmhere"
                                    alt="GitHub Contribution Graph"
                                    className="min-w-[700px] w-full max-w-[850px] hover:scale-[1.02] transition-transform duration-500"
                                    style={{ filter: "drop-shadow(0 0 10px rgba(0,212,255,0.1))" }}
                                />
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
