import React from 'react';
import { motion } from 'framer-motion';
import { Check, Globe, Sparkles, Zap } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const themes = [
    {
        id: 'apex-modern',
        name: {
            en: 'Apex Modern',
            ar: 'أبيكس مودرن',
            he: 'אפקס מודרן'
        },
        desc: {
            en: 'Minimalist, tech-oriented, high-conversion.',
            ar: 'بسيط، موجه للتقنية، تحويل عالي.',
            he: 'מינימליסטי, מוכוון טכנולוגיה, המרה גבוהה.'
        },
        image: '/C:/Users/HP/.gemini/antigravity/brain/916f5b5a-ee91-47eb-8f00-018d305deb3a/theme_apex_modern_1768664339300.png',
        icon: Zap,
        color: 'bg-blue-500'
    },
    {
        id: 'elite-luxury',
        name: {
            en: 'Elite Luxury',
            ar: 'إيليت لاكجري',
            he: 'עילית לוקסוס'
        },
        desc: {
            en: 'High-end aesthetic for jewelry/fashion.',
            ar: 'جمالية راقية للمجوهرات والأزياء.',
            he: 'אסתטיקה יוקרתית לתכשיטים ואופנה.'
        },
        image: '/C:/Users/HP/.gemini/antigravity/brain/916f5b5a-ee91-47eb-8f00-018d305deb3a/theme_elite_luxury_1768664354278.png',
        icon: Sparkles,
        color: 'bg-amber-500'
    },
    {
        id: 'global-pro',
        name: {
            en: 'Global Pro',
            ar: 'غلوبال برو',
            he: 'גלובל פרו'
        },
        desc: {
            en: 'RTL optimized, multi-language ready.',
            ar: 'محسن لـ RTL، جاهز للغات المتعددة.',
            he: 'מותאם ל-RTL, מוכן לשפות מרובות.'
        },
        image: '/C:/Users/HP/.gemini/antigravity/brain/916f5b5a-ee91-47eb-8f00-018d305deb3a/theme_global_pro_1768664376547.png',
        icon: Globe,
        color: 'bg-primary'
    }
];

interface ThemeSelectionProps {
    onSelect: (themeId: string) => void;
    selectedTheme: string | null;
}

export default function ThemeSelection({ onSelect, selectedTheme }: ThemeSelectionProps) {
    const { language } = useLanguage();

    return (
        <div className="space-y-8 py-4">
            <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold text-accent tracking-tight">
                    {language === 'en' ? 'Select Store Identity' : (language === 'ar' ? 'اختر هوية المتجر' : 'בחר את זהות החנות')}
                </h2>
                <p className="text-sm text-gray-400">
                    {language === 'en' ? 'Choose a curated theme optimized for high-conversion and global scale.' : (language === 'ar' ? 'اختر سمة منسقة محسنة للتحويل العالي والنطاق العالمي.' : 'בחר ערכת נושא אופטימלית להמרה גבוהה וקנה מידה גלובלי.')}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {themes.map((theme) => (
                    <motion.div
                        key={theme.id}
                        whileHover={{ y: -5 }}
                        className={`relative group cursor-pointer rounded-2xl overflow-hidden border-2 transition-all duration-300 ${selectedTheme === theme.id ? 'border-primary shadow-xl shadow-primary/10' : 'border-gray-100/50 hover:border-primary/30'
                            }`}
                        onClick={() => onSelect(theme.id)}
                    >
                        <div className="aspect-[4/5] overflow-hidden bg-gray-50">
                            <img src={theme.image} alt={theme.name[language as keyof typeof theme.name]} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

                        <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                            <div className="flex items-center gap-2 mb-2">
                                <div className={`p-1.5 rounded-lg ${theme.color} text-white`}>
                                    <theme.icon size={14} />
                                </div>
                                <h3 className="font-bold text-lg leading-none">{theme.name[language as keyof typeof theme.name]}</h3>
                            </div>
                            <p className="text-xs text-white/70 font-medium leading-relaxed">
                                {theme.desc[language as keyof typeof theme.desc]}
                            </p>
                        </div>

                        {selectedTheme === theme.id && (
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="absolute top-4 right-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white shadow-lg"
                            >
                                <Check size={18} strokeWidth={3} />
                            </motion.div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
