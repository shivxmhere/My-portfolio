import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher';
import AnimatedProfileLogo from './AnimatedProfileLogo';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Dynamic active link via Intersection Observer
    const sections = document.querySelectorAll('section[id]');

    // We adjust rootMargin to trigger slightly above the middle of the screen
    const observer = new IntersectionObserver((entries) => {
      // Find the intersecting entry with the highest intersection ratio
      let currentActive = null;
      let maxRatio = 0;

      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          currentActive = entry.target.id;
        }
      });

      if (currentActive) {
        setActiveSection(currentActive);
      }
    }, { threshold: [0.2, 0.5, 0.8], rootMargin: "-100px 0px -40% 0px" });

    sections.forEach(section => observer.observe(section));
    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Journey', href: '#journey' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Activity', href: '#github' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? 'bg-[var(--bg-primary)]/80 backdrop-blur-[20px] border-b border-[var(--card-bg)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-4'
          : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">

          {/* Logo Left */}
          <div className="flex items-center gap-4">
            <AnimatedProfileLogo />
            <Link
              to="/"
              className="text-[var(--accent-1)] font-mono text-2xl font-bold tracking-widest hover:scale-105 transition-transform hover:shadow-[0_0_15px_var(--accent-1)] rounded hidden sm:block"
              onClick={() => window.scrollTo(0, 0)}
            >
              {`<SS />`}
            </Link>
          </div>

          {/* Links Right (Desktop) */}
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex gap-6 text-sm font-mono tracking-wide">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="relative px-1 py-2 group transition-colors duration-300"
                  >
                    <span className={`relative z-10 ${isActive ? 'text-[var(--accent-1)] drop-shadow-[0_0_8px_var(--accent-1)]' : 'text-[var(--text-main)] group-hover:text-[var(--accent-1)]'}`}>
                      {link.label}
                    </span>

                    {/* Animated Underline */}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-[var(--accent-1)] shadow-[0_0_8px_var(--accent-1)] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
                    />
                  </a>
                );
              })}
            </nav>

            <a
              href="/Shivam_Singh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-transparent border border-[var(--accent-1)] text-[var(--accent-1)] rounded-md font-mono text-sm tracking-widest hover:bg-[var(--accent-1)]/10 hover:shadow-[0_0_15px_var(--accent-1)] transition-all duration-300"
            >
              <Download size={16} /> Resume
            </a>
          </div>

          {/* Mobile Right */}
          <div className="flex lg:hidden items-center gap-4">
            <a
              href="/Shivam_Singh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-transparent border border-[var(--accent-1)] text-[var(--accent-1)] rounded-md font-mono text-xs tracking-widest hover:bg-[var(--accent-1)]/10 transition-colors duration-300"
            >
              <Download size={14} /> <span className="hidden sm:inline">Resume</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-[var(--accent-1)]"
            >
              <Menu size={28} />
            </button>
          </div>

        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-[var(--bg-primary)]/95 backdrop-blur-xl flex flex-col p-8 lg:hidden"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="text-[var(--accent-1)] font-mono text-2xl font-bold tracking-widest">
                {`<SS />`}
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[var(--accent-1)] hover:rotate-90 transition-transform duration-300"
              >
                <X size={32} />
              </button>
            </div>

            <nav className="flex flex-col gap-8 flex-grow">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <motion.a
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-3xl font-[family-name:--font-display] font-bold tracking-tight transition-colors duration-300 flex items-center gap-4 ${isActive ? 'text-[var(--accent-1)]' : 'text-[var(--text-main)] hover:text-[var(--accent-1)]'
                      }`}
                  >
                    <span className="text-sm font-mono text-[var(--accent-1)] opacity-50">
                      // 0{index + 1}.
                    </span>
                    {link.label}
                  </motion.a>
                );
              })}
            </nav>

            <div className="mt-8 border-t border-[var(--card-bg)] pt-8 flex items-center justify-between">
              <span className="font-mono text-sm tracking-widest text-[var(--text-muted)]">THEME PREF</span>
              <ThemeSwitcher />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
