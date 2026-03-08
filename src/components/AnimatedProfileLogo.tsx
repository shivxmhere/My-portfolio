import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export default function AnimatedProfileLogo() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="relative group w-12 h-12 rounded-full overflow-hidden border-2 border-[var(--text-main)] hover:border-[var(--accent-1)] transition-colors shadow-lg flex-shrink-0"
                title="View Profile"
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
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[100] bg-[var(--bg-primary)]/90 backdrop-blur-md overflow-hidden flex items-center justify-center p-4 cursor-pointer"
                        onClick={() => setIsOpen(false)}
                    >
                        <button
                            className="absolute top-6 right-6 md:top-8 md:right-8 text-[var(--bg-primary)] bg-[var(--text-main)] hover:bg-[var(--accent-1)] rounded-full z-[120] p-3 transition-transform hover:rotate-90 hover:scale-110 shadow-xl"
                            onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                        >
                            <X size={28} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative max-w-xl max-h-[85vh] w-full rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(var(--accent-1),0.15)] bg-[var(--bg-secondary)] flex justify-center items-center p-8 cursor-default"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="w-full h-full flex flex-col items-center justify-center gap-6">
                                <img
                                    src="/profile-sticker.png"
                                    alt="Shivam Singh"
                                    className="w-full max-h-[60vh] object-contain drop-shadow-2xl"
                                />

                                <div className="text-center space-y-2">
                                    <h3 className="text-2xl font-[family-name:--font-display] font-bold text-[var(--text-main)] drop-shadow-[0_0_8px_var(--accent-1)]">Shivam Singh</h3>
                                    <p className="font-mono tracking-widest text-sm text-[var(--accent-1)] uppercase">
                                        IIT Patna — CS & Data Analytics
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
