import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import HeroParticles from './HeroParticles';

function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const timeout = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout);
  }, [blink]);

  // Typing logic
  useEffect(() => {
    if (index === words.length) {
      setIndex(0);
      return;
    }

    if (subIndex === words[index].length + 1 && !reverse) {
      const waitTime = setTimeout(() => setReverse(true), 2000);
      return () => clearTimeout(waitTime);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(
      () => setSubIndex((prev) => prev + (reverse ? -1 : 1)),
      Math.max(reverse ? 30 : 50, Math.random() * (reverse ? 75 : 150))
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="text-[var(--text-main)] font-mono text-xl md:text-3xl font-regular">
      {`> ${words[index] ? words[index].substring(0, subIndex) : ''}`}
      <span className={`${blink ? 'opacity-100' : 'opacity-0'} text-[var(--accent-1)] transition-opacity`}>_</span>
    </span>
  );
}

export default function Hero() {
  const roles = [
    "Data Analyst",
    "AI/ML Developer",
    "IIT Patna — CSDA",
    "Full Stack Builder",
    "Generative AI Explorer"
  ];

  const floatingTags = ["Python", "React", "ML", "FastAPI", "SQL", "AWS"];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 md:px-12 lg:px-24 bg-[var(--bg-primary)] text-[var(--text-main)] transition-colors duration-400">
      <HeroParticles />

      {/* Floating Tech Tags */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden hidden md:block">
        {floatingTags.map((tag, i) => (
          <motion.div
            key={tag}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 0.1,
              scale: 1,
              y: [Math.random() * 50 - 25, Math.random() * -50 - 25],
              x: Math.random() * 50 - 25,
            }}
            transition={{
              duration: Math.random() * 5 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: i * 0.4
            }}
            className="absolute text-5xl lg:text-8xl font-mono font-bold text-[var(--text-main)] mix-blend-overlay"
            style={{
              left: `${15 + (i * 15)}%`,
              top: `${20 + Math.random() * 60}%`
            }}
          >
            {tag}
          </motion.div>
        ))}
      </div>

      <div className="z-10 flex flex-col items-center text-center mt-20">
        {/* Giant animated name with gradient shimmer sweep */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-[7rem] font-bold leading-[1.1] tracking-tighter mb-4"
        >
          <span className="inline-block relative text-transparent bg-clip-text bg-[linear-gradient(110deg,var(--text-main),40%,var(--accent-1),55%,var(--text-main))] bg-[length:250%_100%] animate-shimmer">
            SHIVAM SINGH
          </span>
        </motion.h1>

        {/* Typewriter Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="h-12 mb-12 flex justify-center items-center"
        >
          <Typewriter words={roles} />
        </motion.div>

        {/* Two CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 mt-8"
        >
          <a
            href="#work"
            className="px-8 py-4 bg-[var(--accent-1)] text-[var(--bg-primary)] rounded-md text-sm font-bold uppercase tracking-widest hover:opacity-80 transition-opacity duration-300 relative group overflow-hidden"
          >
            <span className="relative z-10">View My Work ↓</span>
          </a>
          <a
            href="/Shivam_Singh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-[var(--text-main)] text-[var(--text-main)] bg-transparent rounded-md text-sm font-bold uppercase tracking-widest hover:border-[var(--accent-2)] hover:text-[var(--accent-2)] transition-all duration-300 backdrop-blur-sm"
          >
            Download Resume ↗
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <div className="w-[1px] h-16 bg-[var(--card-bg)] overflow-hidden relative">
          <motion.div
            animate={{ top: ['-100%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            className="w-full h-1/2 bg-[var(--text-main)] absolute left-0"
          />
        </div>
      </motion.div>
    </section>
  );
}
