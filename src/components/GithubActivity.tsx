import React from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, User, GitPullRequest, CheckCircle } from 'lucide-react';

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

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-6"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

                        {/* GitHub Stats - Matches screenshot left top box */}
                        <div className="lg:col-span-3 bg-[var(--bg-primary)] border border-[var(--card-border)] rounded-xl p-6 flex flex-col shadow-sm transition-shadow">
                            <h3 className="text-2xl font-bold font-sans tracking-tight mb-4 text-[var(--text-main)]">
                                GitHub Stats
                            </h3>

                            <div className="flex flex-col font-mono text-sm mb-6 flex-grow border-b border-[var(--card-border)] pb-4">
                                <div className="flex justify-between items-center bg-[var(--text-main)] text-[var(--bg-primary)] px-4 py-2 rounded">
                                    <span>Total Stars</span>
                                    <span className="font-bold">1.2k</span>
                                </div>
                                <div className="flex justify-between items-center px-4 py-2 mt-1">
                                    <span className="text-[var(--text-muted)]">Total Commits</span>
                                    <span>150+</span>
                                </div>
                                <div className="flex justify-between items-center px-4 py-2">
                                    <span className="text-[var(--text-muted)]">Total PRs</span>
                                    <span>45</span>
                                </div>
                                <div className="flex justify-between items-center px-4 py-2">
                                    <span className="text-[var(--text-muted)]">Total Issues</span>
                                    <span>12</span>
                                </div>
                            </div>

                            {/* Badges */}
                            <div className="grid grid-cols-2 gap-2 text-sm font-sans pt-2">
                                <div className="border border-[var(--card-border)] rounded p-2 flex items-center justify-center gap-2 text-[var(--text-main)]">
                                    <Github size={16} /> GitHub Profile
                                </div>
                                <div className="border border-[var(--card-border)] rounded p-2 flex items-center justify-center gap-2 text-[var(--text-main)]">
                                    <User size={16} /> Top Contributor
                                </div>
                                <div className="border border-[var(--card-border)] rounded p-2 flex items-center justify-center gap-2 text-[var(--text-main)]">
                                    <GitPullRequest size={16} /> Pull Request Champion
                                </div>
                                <div className="border border-[var(--card-border)] rounded p-2 flex items-center justify-center gap-2 text-[var(--text-main)]">
                                    <CheckCircle size={16} /> Issue Resolver
                                </div>
                            </div>
                        </div>

                        {/* Top Languages - Matches screenshot right top box */}
                        <div className="lg:col-span-2 bg-[var(--bg-primary)] border border-[var(--card-border)] rounded-xl p-6 flex flex-col shadow-sm transition-shadow">
                            <h3 className="text-2xl font-bold font-sans tracking-tight mb-8 text-[var(--text-main)]">
                                Top Languages
                            </h3>

                            <div className="grid grid-cols-4 gap-2 flex-grow items-center justify-items-center mb-8">
                                {/* Python */}
                                <div className="flex flex-col items-center gap-4">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-12 h-12 md:w-16 md:h-16" />
                                    <span className="font-sans font-medium text-[var(--text-main)]">40%</span>
                                </div>
                                {/* HTML */}
                                <div className="flex flex-col items-center gap-4">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-12 h-12 md:w-16 md:h-16" />
                                    <span className="font-sans font-medium text-[var(--text-main)]">30%</span>
                                </div>
                                {/* CSS */}
                                <div className="flex flex-col items-center gap-4">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="w-12 h-12 md:w-16 md:h-16" />
                                    <span className="font-sans font-medium text-[var(--text-main)]">20%</span>
                                </div>
                                {/* JS */}
                                <div className="flex flex-col items-center gap-4">
                                    <div className="w-12 h-12 md:w-16 md:h-16 bg-[#F7DF1E] flex items-end justify-end p-1 font-bold text-black border border-black/10">
                                        <span className="text-xl md:text-2xl leading-none">JS</span>
                                    </div>
                                    <span className="font-sans font-medium text-[var(--text-main)]">10%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contribution Graph Box */}
                    <div className="bg-[var(--bg-primary)] border border-[var(--card-border)] rounded-xl p-6 flex flex-col shadow-sm items-start overflow-x-auto">
                        <h3 className="text-sm font-mono text-[var(--text-muted)] mb-4 flex items-center gap-2 whitespace-nowrap">
                            // Contribution Graph
                        </h3>
                        {/* Working GitHub Contribution generated image */}
                        <div className="w-full flex justify-center min-w-[700px] rounded-md p-4">
                            <img
                                src="https://github-readme-activity-graph.vercel.app/graph?username=shivxmhere&theme=react&bg_color=050d1a&color=00d4ff&line=7c3aed&point=FFFFFF&hide_border=true"
                                alt="GitHub Contribution Graph"
                                className="w-full max-w-[900px] hover:scale-[1.02] transition-transform duration-500 rounded-lg drop-shadow-[0_0_15px_rgba(var(--accent-1),0.1)]"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
