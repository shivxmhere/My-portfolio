import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface Particle {
    x: number;
    y: number;
    originX: number;
    originY: number;
    color: string;
    vx: number;
    vy: number;
    delay: number;
}

export default function AnimatedProfileLogo() {
    const [isOpen, setIsOpen] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [imageLoaded, setImageLoaded] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);
    const [isReconstructed, setIsReconstructed] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = '/profile-sticker.png';
        img.crossOrigin = 'Anonymous';
        img.onload = () => {
            setImageLoaded(true);
        };
        imgRef.current = img;
    }, []);

    useEffect(() => {
        if (!isOpen) {
            setIsReconstructed(false);
            return;
        }

        if (!imageLoaded || !canvasRef.current || !imgRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const TARGET_WIDTH = Math.min(300, window.innerWidth * 0.8);
        const scale = TARGET_WIDTH / imgRef.current.width;
        const TARGET_HEIGHT = imgRef.current.height * scale;

        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = TARGET_WIDTH;
        tempCanvas.height = TARGET_HEIGHT;
        const tempCtx = tempCanvas.getContext('2d');
        if (!tempCtx) return;

        tempCtx.drawImage(imgRef.current, 0, 0, TARGET_WIDTH, TARGET_HEIGHT);
        const imageData = tempCtx.getImageData(0, 0, TARGET_WIDTH, TARGET_HEIGHT).data;

        const particles: Particle[] = [];
        const offsetX = (canvas.width - TARGET_WIDTH) / 2;
        const offsetY = (canvas.height - TARGET_HEIGHT) / 2;

        const skip = 3;
        let maxDelay = 0;

        for (let y = 0; y < TARGET_HEIGHT; y += skip) {
            for (let x = 0; x < TARGET_WIDTH; x += skip) {
                const index = (y * TARGET_WIDTH + x) * 4;
                const r = imageData[index];
                const g = imageData[index + 1];
                const b = imageData[index + 2];
                const a = imageData[index + 3];

                if (a > 20) {
                    const delay = Math.random() * 80;
                    if (delay > maxDelay) maxDelay = delay;

                    particles.push({
                        x: Math.random() * canvas.width,
                        y: Math.random() * canvas.height,
                        originX: x + offsetX,
                        originY: y + offsetY,
                        color: `rgba(${r},${g},${b},${a / 255})`,
                        vx: (Math.random() - 0.5) * 20,
                        vy: (Math.random() - 0.5) * 20,
                        delay: delay
                    });
                }
            }
        }

        let frameId: number;
        let tick = 0;

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            let allArrived = true;

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                if (tick > p.delay) {
                    const dx = p.originX - p.x;
                    const dy = p.originY - p.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist > 1.5) {
                        allArrived = false;
                        p.vx += dx * 0.04;
                        p.vy += dy * 0.04;
                        p.vx *= 0.82;
                        p.vy *= 0.82;

                        p.x += p.vx;
                        p.y += p.vy;
                    } else {
                        p.x = p.originX;
                        p.y = p.originY;
                    }
                } else {
                    allArrived = false;
                    p.x += p.vx * 0.1;
                    p.y += p.vy * 0.1;
                    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
                }

                ctx.fillStyle = p.color;
                ctx.fillRect(p.x, p.y, skip, skip);
            }

            tick++;
            if (!allArrived) {
                frameId = requestAnimationFrame(draw);
            } else {
                // Animation finished, fade in clear image and orbit skills
                setIsReconstructed(true);
                // Clear canvas slightly after image fades in to hand over display
                setTimeout(() => {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                }, 1000);
            }
        };

        draw();

        return () => cancelAnimationFrame(frameId);
    }, [isOpen, imageLoaded]);

    const skills = [
        { text: "Python", color: "text-[#3776AB]" },
        { text: "Java", color: "text-[#E32D2D]" },
        { text: "SQL", color: "text-[#336791]" },
        { text: "CSS", color: "text-[#264DE4]" },
        { text: "React", color: "text-[#61DAFB]" },
        { text: "Machine Learning", color: "text-[#FF6F00]" },
        { text: "Generative AI", color: "text-[#8A2BE2]" }
    ];

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="relative group w-12 h-12 rounded-full overflow-hidden border-2 border-[var(--text-main)] hover:border-[var(--accent-1)] transition-colors shadow-lg"
                title="Click me to assemble!"
            >
                <div className="image-invert-wrapper w-full h-full">
                    <img
                        src="/profile-sticker.png"
                        alt="Profile Logo"
                        className="w-full h-full object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="fixed inset-0 z-[100] bg-[var(--bg-primary)]/80 backdrop-blur-sm overflow-hidden flex items-center justify-center cursor-crosshair"
                        onClick={() => setIsOpen(false)}
                    >
                        <button
                            className="absolute top-8 right-8 text-[var(--bg-primary)] bg-[var(--text-main)] hover:bg-[var(--accent-1)] rounded-full z-[120] p-2 transition-transform hover:rotate-90"
                            onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                        >
                            <X size={24} />
                        </button>

                        {/* Glowing Skills burst that disappears as canvas pieces form */}
                        {!isReconstructed && (
                            <motion.div
                                initial={{ opacity: 1 }}
                                animate={{ opacity: 0, scale: 0.3 }}
                                transition={{ duration: 3, ease: "easeIn" }}
                                className="absolute inset-0 pointer-events-none z-10"
                            >
                                {skills.map((skill, i) => {
                                    // Scatter anywhere across the screen
                                    const top = Math.random() * 100 + "%";
                                    const left = Math.random() * 100 + "%";
                                    const sizeClasses = ["text-4xl", "text-5xl", "text-6xl", "text-7xl", "text-8xl"];
                                    const size = sizeClasses[Math.floor(Math.random() * sizeClasses.length)];

                                    return (
                                        <motion.div
                                            key={`scatter-${i}`}
                                            initial={{
                                                x: (Math.random() - 0.5) * window.innerWidth * 1.5,
                                                y: (Math.random() - 0.5) * window.innerHeight * 1.5,
                                                opacity: 0,
                                                scale: 0,
                                                rotate: (Math.random() - 0.5) * 90
                                            }}
                                            animate={{
                                                x: 0,
                                                y: 0,
                                                opacity: 0.8,
                                                scale: 1,
                                                rotate: 0
                                            }}
                                            transition={{
                                                duration: 1.5,
                                                delay: i * 0.1,
                                                ease: "circOut"
                                            }}
                                            className={`absolute font-bold font-mono ${size} ${skill.color} mix-blend-screen whitespace-nowrap`}
                                            style={{
                                                textShadow: '0 0 20px currentColor',
                                                left,
                                                top,
                                                transform: 'translate(-50%, -50%)'
                                            }}
                                        >
                                            {skill.text}
                                        </motion.div>
                                    )
                                })}
                            </motion.div>
                        )}

                        {/* Canvas for the particle animation rebuilding the image */}
                        <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full pointer-events-none z-20 ${isReconstructed ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000`} />

                        {/* Perfect clarity image and circulating skills when reconstruction completes */}
                        {isReconstructed && (
                            <>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1 }}
                                    className="absolute z-30 image-invert-wrapper drop-shadow-[0_0_30px_var(--accent-1)]"
                                >
                                    <img src="/profile-sticker.png" alt="Profile" className="w-[300px] h-auto rounded-xl" />
                                </motion.div>

                                <div className="absolute z-[25] w-[300px] h-[300px]">
                                    {skills.map((skill, i) => {
                                        const angle = (i / skills.length) * 360;
                                        return (
                                            <motion.div
                                                key={`orbit-${i}`}
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1, rotate: [0, 360] }}
                                                transition={{
                                                    opacity: { duration: 1, delay: i * 0.1 },
                                                    scale: { duration: 1, delay: i * 0.1 },
                                                    rotate: { duration: 25, repeat: Infinity, ease: "linear" }
                                                }}
                                                className="absolute top-1/2 left-1/2 w-0 h-0 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
                                            >
                                                <div
                                                    className="w-0 h-0 flex items-center justify-center"
                                                    style={{ transform: `rotate(${angle}deg) translateX(240px)` }}
                                                >
                                                    <motion.div
                                                        animate={{ rotate: [-angle, -angle - 360] }}
                                                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                                        className="flex items-center justify-center w-0 h-0"
                                                    >
                                                        <span
                                                            className={`font-mono font-bold text-2xl md:text-3xl ${skill.color} whitespace-nowrap px-4 py-2 bg-[var(--bg-primary)]/80 backdrop-blur-md rounded-full border border-[var(--card-bg)] shadow-[0_0_20px_currentColor]`}
                                                        >
                                                            {skill.text}
                                                        </span>
                                                    </motion.div>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
