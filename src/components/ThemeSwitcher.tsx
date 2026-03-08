import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

type Theme = 'dark' | 'light' | 'hacker';

export default function ThemeSwitcher() {
    const [theme, setTheme] = useState<Theme>('dark');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as Theme | null;
        if (savedTheme && ['dark', 'light', 'hacker'].includes(savedTheme)) {
            setTheme(savedTheme);
            document.documentElement.setAttribute('data-theme', savedTheme);
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    }, []);

    const handleThemeChange = (newTheme: Theme) => {
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    const themes = [
        { id: 'dark', label: 'Dark', color: '#050d1a', border: '#00d4ff' },
        { id: 'light', label: 'Light', color: '#f8f5f0', border: '#e85d26' },
        { id: 'hacker', label: 'Hacker', color: '#000000', border: '#00ff41' }
    ];

    return (
        <div className="flex flex-row md:flex-col gap-3 p-2 rounded-full bg-[var(--card-bg)] backdrop-blur-md border border-[var(--card-border)] transition-colors duration-400 z-50">
            {themes.map((t) => (
                <button
                    key={t.id}
                    onClick={() => handleThemeChange(t.id as Theme)}
                    className="relative group w-6 h-6 rounded-full transition-all duration-400 ease-in-out hover:scale-110"
                    style={{
                        backgroundColor: t.color,
                        boxShadow: theme === t.id
                            ? '0 0 0 2px var(--bg-primary), 0 0 0 4px var(--accent-1), 0 0 12px 2px var(--accent-1)'
                            : t.id === 'hacker'
                                ? `inset 0 0 0 2px ${t.border}`
                                : 'inset 0 0 0 1px rgba(128, 128, 128, 0.3)',
                    }}
                    aria-label={`Switch to ${t.label} theme`}
                >
                    {/* Tooltip */}
                    <span className="absolute md:right-full md:left-auto left-1/2 -translate-x-1/2 md:-translate-x-0 md:mr-4 md:top-1/2 top-full mt-4 md:mt-0 md:-translate-y-1/2 px-2 py-1 text-xs font-mono rounded bg-[var(--text-main)] text-[var(--bg-primary)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                        {t.label}
                    </span>
                </button>
            ))}
        </div>
    );
}
