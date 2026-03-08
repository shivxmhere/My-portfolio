import React, { useEffect } from 'react';
import Lenis from 'lenis';
import CustomCursor from './CustomCursor';
import ThemeSwitcher from './ThemeSwitcher';
import { motion } from 'motion/react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[var(--bg-primary)] text-[var(--text-main)] min-h-screen font-sans selection:bg-[var(--accent-1)] selection:text-[var(--bg-primary)] transition-colors duration-400">
      <CustomCursor />
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex">
        <ThemeSwitcher />
      </div>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>
    </div>
  );
}
