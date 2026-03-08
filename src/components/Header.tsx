import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher';
import AnimatedProfileLogo from './AnimatedProfileLogo';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 });

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
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-40 px-6 py-4 flex justify-between items-center transition-all duration-300 ${scrolled ? 'bg-[var(--bg-primary)]/80 backdrop-blur-md border-b border-[var(--card-bg)] shadow-sm' : 'bg-transparent'
        } text-[var(--text-main)]`}
    >
      <div className="flex items-center gap-4">
        <AnimatedProfileLogo />
        <Link to="/" className="flex items-center gap-2 hidden sm:flex hover:opacity-80 transition-opacity">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/5/52/Indian_Institute_of_Technology%2C_Patna.svg"
            alt="IIT Patna"
            className="w-10 h-10 object-contain image-invert-wrapper"
          />
          <span className="text-xl font-mono font-bold tracking-tight uppercase">
            IIT Patna
          </span>
        </Link>
      </div>

      {/* Desktop Nav */}
      <div className="hidden lg:flex items-center gap-8">
        <nav className="flex gap-6 text-sm font-medium uppercase tracking-wide">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className={`transition-colors duration-300 relative ${activeSection === link.href.substring(1)
                ? 'text-[var(--accent-1)]'
                : 'hover:text-[var(--accent-1)]'
                }`}
            >
              {link.label}
              {activeSection === link.href.substring(1) && (
                <motion.div
                  layoutId="active-indicator"
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-[var(--accent-1)]"
                />
              )}
            </a>
          ))}
        </nav>
        <a
          href="/Shivam_Singh_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 border border-[var(--text-main)] text-[var(--text-main)] rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[var(--text-main)] hover:text-[var(--bg-primary)] transition-colors duration-300"
        >
          Resume ↗
        </a>
      </div>

      {/* Mobile Toggle & Resume Button */}
      <div className="flex lg:hidden items-center gap-4">
        <a
          href="/Shivam_Singh_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-[var(--text-main)] text-[var(--text-main)] rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[var(--text-main)] hover:text-[var(--bg-primary)] transition-colors duration-300"
        >
          Resume
        </a>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-1 rounded-full text-[var(--text-main)] border border-transparent hover:border-[var(--card-bg)]"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-[60px] bg-[var(--bg-primary)]/95 backdrop-blur-lg flex flex-col p-6 z-30 border-t border-[var(--card-bg)] lg:hidden h-[calc(100vh-60px)]"
          >
            <nav className="flex flex-col gap-6 text-xl font-medium uppercase tracking-widest mt-8">
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`transition-colors duration-300 ${activeSection === link.href.substring(1) ? 'text-[var(--accent-1)]' : 'hover:text-[var(--accent-1)]'}`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-auto mb-12 flex items-center justify-between border-t border-[var(--card-bg)] pt-6">
              <span className="text-sm font-mono tracking-widest text-[var(--text-main)]">THEME</span>
              <ThemeSwitcher />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
