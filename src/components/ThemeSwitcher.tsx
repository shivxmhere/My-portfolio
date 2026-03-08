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
        <div className="flex flex-col gap-3 p-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
            {themes.map((t) => (
                <button
                    key={t.id}
                    onClick={() => handleThemeChange(t.id as Theme)}
                    className="relative group w-6 h-6 rounded-full transition-transform hover:scale-110"
                    style={{
                        backgroundColor: t.color,
                        boxShadow: theme === t.id ? `0 0 0 2px var(--bg-primary), 0 0 0 4px ${t.border}` : 'inset 0 0 0 1px rgba(255,255,255,0.2)'
                    }}
                    aria-label={`Switch to ${t.label} theme`}
                >
                    {/* Tooltip */}
                    <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-2 py-1 text-xs font-mono rounded bg-[var(--text-main)] text-[var(--bg-primary)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                        {t.label}
                    </span>
                </button>
            ))}
        </div>
    );
}
