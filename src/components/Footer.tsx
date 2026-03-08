import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Linkedin, Github, ExternalLink } from 'lucide-react';
import MagicText from './MagicText';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[var(--bg-primary)] text-[var(--text-main)] px-6 py-20 md:py-32 min-h-[80vh] flex flex-col justify-between relative overflow-hidden transition-colors duration-400 border-t border-[var(--card-bg)]">
      {/* Background Gradient Mesh */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--accent-2)] opacity-20 blur-[150px] rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 flex-grow z-10">
        {/* Left Panel - The Human Element */}
        <div className="flex flex-col justify-center space-y-12">
          <div className="space-y-4">
            <h3 className="text-[var(--text-main)] opacity-70 text-sm uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-[var(--accent-1)] rounded-full animate-pulse"></span>
              Currently Listening To
            </h3>
            <motion.a
              href="https://music.youtube.com/playlist?list=PLE0Jo6NF_JYO5-phess8GKafKMtPv3tfZ&si=IIjhVL5R2xtKoCMM"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 p-4 border border-[var(--card-bg)] rounded-xl bg-[var(--card-bg)] shadow-lg max-w-md hover:border-[var(--accent-1)] transition-colors duration-300 cursor-pointer group backdrop-blur-md"
            >
              <div className="w-16 h-16 bg-[var(--bg-primary)] rounded-lg overflow-hidden relative flex-shrink-0 flex items-center justify-center border border-[var(--card-bg)]">
                {/* Raj Shamani / YouTube Music Icon */}
                <img src="https://yt3.googleusercontent.com/strLdMSfOLMsaJU50IFOnVXgzolGmGSbtmczTIEi_gFt7IX6sBqNDGBM6AKzCCBDAN5weIBE=s900-c-k-c0x00ffffff-no-rj" alt="Raj Shamani" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity absolute inset-0 image-invert-wrapper" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] group-hover:bg-black/20 transition-all duration-300">
                  {/* Clean opaque Youtube Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="11" fill="#FF0000" />
                    <polygon points="10,8 16,12 10,16" fill="#FFFFFF" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-lg font-medium group-hover:text-[var(--accent-1)] transition-colors">Raj Shamani Podcast</p>
                <p className="text-[var(--text-main)] opacity-70 text-sm flex items-center gap-1">
                  YouTube Music <ExternalLink size={12} />
                </p>
              </div>
            </motion.a>
          </div>

          <div className="space-y-8">
            <div className="group cursor-default">
              <h3 className="text-[var(--text-main)] opacity-70 text-sm uppercase tracking-widest mb-2 group-hover:text-[var(--accent-1)] transition-colors">Currently Watching</h3>
              <MagicText text="CodeWithHarry" className="text-2xl font-mono text-[var(--text-main)] group-hover:translate-x-2 transition-transform duration-300" />
            </div>
            <div className="group cursor-default">
              <h3 className="text-[var(--text-main)] opacity-70 text-sm uppercase tracking-widest mb-2 group-hover:text-[var(--accent-1)] transition-colors">Daily Fuel</h3>
              <MagicText text="Reading 'Atomic Habits'" className="text-xl font-mono text-[var(--text-main)] group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </div>
        </div>

        {/* Right Panel - Contact */}
        <div className="flex flex-col justify-center items-start md:items-end text-left md:text-right">
          <MagicText text="Let's" tag="h2" className="text-4xl md:text-6xl lg:text-8xl font-bold leading-none tracking-tighter text-[var(--text-main)]" />
          <MagicText text="Connect." tag="h2" className="text-4xl md:text-6xl lg:text-8xl font-bold leading-none tracking-tighter mb-8 text-[var(--accent-1)]" delay={0.2} />

          <a
            href="mailto:shivamhere6257@gmail.com"
            className="text-xl md:text-3xl font-mono border-b border-[var(--text-main)] pb-2 hover:text-[var(--accent-1)] hover:border-[var(--accent-1)] transition-all duration-300"
          >
            shivamhere6257@gmail.com
          </a>
        </div>
      </div>

      <div className="mt-20 border-t border-[var(--card-bg)] pt-12 z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-sm text-[var(--text-main)] opacity-70 uppercase font-mono tracking-widest">
            &copy; {new Date().getFullYear()} Shivam Singh
          </div>

          <div className="flex gap-6">
            <SocialLink href="https://www.linkedin.com/in/shivam-singh-iit-patna/" icon={<Linkedin size={20} />} label="LinkedIn" />
            <SocialLink href="https://github.com/shivxmhere" icon={<Github size={20} />} label="GitHub" />
            <SocialLink href="https://instagram.com/shivxm._.s" icon={<Instagram size={20} />} label="Instagram" />
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5 }}
      className="flex items-center gap-2 text-[var(--text-main)] hover:text-[var(--accent-1)] transition-colors group"
    >
      <div className="p-3 border border-[var(--card-bg)] rounded-full bg-[var(--card-bg)] group-hover:border-[var(--accent-1)] shadow-sm transition-colors">
        {icon}
      </div>
      <span className="text-sm font-mono tracking-widest font-medium hidden md:block opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-[var(--accent-1)]">
        {label}
      </span>
    </motion.a>
  );
}

