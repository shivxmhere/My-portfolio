import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial state
    const savedMode = localStorage.getItem('theme');
    if (savedMode === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-40 px-6 py-8 flex justify-between items-center mix-blend-difference text-[#FDFDFD]"
    >
      <Link to="/" className="text-xl font-bold tracking-tight uppercase">
        Shivam Singh
      </Link>
      <div className="flex items-center gap-6">
        <nav className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-wide">
          <a href="#work" className="hover:text-[#CEB3A6] transition-colors duration-300">Work</a>
          <a href="#resume" className="hover:text-[#CEB3A6] transition-colors duration-300">Resume</a>
          <a href="#contact" className="hover:text-[#CEB3A6] transition-colors duration-300">Contact</a>
        </nav>
        <button
          onClick={toggleTheme}
          className="p-2 ml-2 rounded-full hover:bg-[#FDFDFD]/20 transition-colors"
          aria-label="Toggle dark mode"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </motion.header>
  );
}
