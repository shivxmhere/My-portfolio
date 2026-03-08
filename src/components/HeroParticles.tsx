import React, { useEffect, useRef } from 'react';

export default function HeroParticles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
        const particleCount = 60; // Adjust for density
        let animationFrameId: number;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 1, // Velocity
                    vy: (Math.random() - 0.5) * 1,
                    radius: Math.random() * 1.5 + 0.5,
                });
            }
        };

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Get current theme accent color from CSS variable
            const rootStyles = getComputedStyle(document.documentElement);
            let accentColor = rootStyles.getPropertyValue('--accent-1').trim();

            // Fallback in case var isn't instantly available
            if (!accentColor || accentColor === '') {
                const theme = document.documentElement.getAttribute('data-theme');
                if (theme === 'light') accentColor = '#e85d26';
                else if (theme === 'hacker') accentColor = '#00ff41';
                else accentColor = '#00d4ff';
            }

            ctx.fillStyle = accentColor;
            ctx.strokeStyle = accentColor;

            // Update positions
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fill();
            });

            // Draw connections
            for (let i = 0; i < particleCount; i++) {
                for (let j = i + 1; j < particleCount; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        // Opacity based on distance
                        ctx.globalAlpha = 1 - dist / 120;
                        ctx.stroke();
                        ctx.globalAlpha = 1.0;
                    }
                }
            }

            animationFrameId = requestAnimationFrame(drawParticles);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        initParticles();
        drawParticles();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40 mix-blend-screen dark:mix-blend-screen"
        />
    );
}
