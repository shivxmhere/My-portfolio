import { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  // Use springs for smooth following
  const cursorX = useSpring(0, { damping: 25, stiffness: 200, mass: 0.5 });
  const cursorY = useSpring(0, { damping: 25, stiffness: 200, mass: 0.5 });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 100); // 100 is half of width of glow (200px)
      cursorY.set(e.clientY - 100);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.closest('a') || target.closest('button')) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Glow Follower (Delayed/Smoothed via Spring) */}
      <motion.div
        className="fixed top-0 left-0 w-[200px] h-[200px] rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-screen"
        style={{
          x: cursorX,
          y: cursorY,
          background: "radial-gradient(circle, var(--accent-1) 0%, transparent 60%)",
          opacity: 0.15,
        }}
        animate={{
          scale: hovered ? 1.5 : 1,
          opacity: hovered ? 0.3 : 0.15
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Center Dot (Instant Follow) */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-[var(--accent-1)] rounded-full pointer-events-none z-[10000] hidden md:block shadow-[0_0_10px_var(--accent-1)] mix-blend-difference"
        style={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
        }}
        animate={{
          scale: hovered ? 0.5 : 1
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
