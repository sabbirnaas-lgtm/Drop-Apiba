import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext({
    language: 'en',
    dir: 'ltr',
    toggleLanguage: (lang: string) => { }
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [language, setLanguage] = useState('en'); // 'en', 'ar', 'he'
    const [dir, setDir] = useState('ltr');

    useEffect(() => {
        const direction = language === 'ar' || language === 'he' ? 'rtl' : 'ltr';
        setDir(direction);
        if (typeof document !== 'undefined') {
            document.documentElement.dir = direction;
            document.documentElement.lang = language;

            document.body.classList.remove('font-poppins', 'font-heebo', 'font-cairo');
            if (language === 'en') document.body.classList.add('font-poppins');
            if (language === 'he') document.body.classList.add('font-heebo');
            if (language === 'ar') document.body.classList.add('font-cairo');
        }
    }, [language]);

    const toggleLanguage = (lang: string) => {
        setLanguage(lang);
    };

    return (
        <LanguageContext.Provider value={{ language, dir, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
