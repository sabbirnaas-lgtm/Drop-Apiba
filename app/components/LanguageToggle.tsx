import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { clsx } from 'clsx';

export default function LanguageToggle() {
    const { language, toggleLanguage } = useLanguage();

    const langs = [
        { code: 'en', label: 'EN' },
        { code: 'ar', label: 'AR' },
        { code: 'he', label: 'HE' }
    ];

    return (
        <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md p-1 rounded-full border border-white/20 shadow-sm">
            {langs.map((lang) => (
                <button
                    key={lang.code}
                    onClick={() => toggleLanguage(lang.code)}
                    className={clsx(
                        "px-3 py-1 rounded-full text-xs font-bold transition-all",
                        language === lang.code
                            ? "bg-primary text-white shadow-md shadow-primary/20"
                            : "text-gray-500 hover:text-primary hover:bg-gray-100"
                    )}
                >
                    {lang.label}
                </button>
            ))}
        </div>
    );
}
