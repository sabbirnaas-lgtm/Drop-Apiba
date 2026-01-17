import React from 'react';
import { Settings, Bell, Lock, CreditCard, User, Globe, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function SettingsPage() {
    const { language, dir } = useLanguage();

    const sections = [
        {
            title: language === 'en' ? 'Global Identity' : (language === 'ar' ? 'الهوية العالمية' : 'זהות גלובלית'),
            icon: User,
            desc: language === 'en' ? 'Manage your enterprise profile and access keys.' : (language === 'ar' ? 'إدارة ملف تعريف مؤسستك ومفاتيح الوصول.' : 'נהל את פרופיל הארגון שלך ומפתחות הגישה.')
        },
        {
            title: language === 'en' ? 'Notifications' : (language === 'ar' ? 'الإشعارات' : 'התראות'),
            icon: Bell,
            desc: language === 'en' ? 'Control system alerts and dispatch triggers.' : (language === 'ar' ? 'التحكم في تنبيهات النظام ومشغلات الإرسال.' : 'שלוט בהתראות המערכת ובטריגרים של שיגור.')
        },
        {
            title: language === 'en' ? 'Security & Access' : (language === 'ar' ? 'الأمن والوصول' : 'אבטחה וגישה'),
            icon: Lock,
            desc: language === 'en' ? 'End-to-end encryption and session management.' : (language === 'ar' ? 'تشفير شامل وإدارة الجلسات.' : 'הצפנה מקצה לקצה וניהול הפעלות.')
        },
        {
            title: language === 'en' ? 'Billing & Tiers' : (language === 'ar' ? 'الفواتير والمستويات' : 'חיוב ותוכניות'),
            icon: CreditCard,
            desc: language === 'en' ? 'Scale your operation with premium plans.' : (language === 'ar' ? 'توسيع نطاق عملياتك بخطط متميزة.' : 'הרחב את הפעילות שלך עם תוכניות פרימיום.')
        }
    ];

    return (
        <div className="space-y-10" dir={dir}>
            <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 bg-primary/10 text-primary text-[13px] font-bold rounded uppercase tracking-widest border border-primary/20">
                            {language === 'en' ? 'Drop Apiba — Preferences' : (language === 'ar' ? 'Drop Apiba — التفضيلات' : 'Drop Apiba — העדפות')}
                        </span>
                    </div>
                    <h1 className="text-xl font-bold text-accent tracking-tight">
                        {language === 'en' ? 'System Settings' : (language === 'ar' ? 'إعدادات النظام' : 'הגדרות מערכת')}
                    </h1>
                    <p className="text-base font-normal text-gray-400 mt-2 max-w-lg leading-relaxed">
                        {language === 'en' ? 'Configure your enterprise environment and automation triggers.' : (language === 'ar' ? 'تكوين بيئة مؤسستك ومشغلات التشغيل الآلي.' : 'הגדר את סביבת הארגון שלך וטריגרים לאוטומציה.')}
                    </p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {sections.map((section, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100/50 hover:shadow-md transition-all cursor-pointer group">
                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 bg-gray-50 text-accent rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                                <section.icon size={28} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-accent group-hover:text-primary transition-colors tracking-tight">{section.title}</h3>
                                <p className="text-[13px] text-gray-400 font-medium mt-1">{section.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Language Preference - Enterprise standard */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100/50 overflow-hidden">
                <div className="p-8 border-b border-gray-50 bg-gray-50/20">
                    <h3 className="text-[11px] font-semibold text-accent tracking-tighter uppercase tracking-[0.05em]">
                        {language === 'en' ? 'Localization Engine' : (language === 'ar' ? 'محرك التوطين' : 'מנוע לוקליזציה')}
                    </h3>
                </div>
                <div className="p-8 space-y-8">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-primary/5 text-primary rounded-xl flex items-center justify-center border border-primary/10">
                                <Globe size={20} />
                            </div>
                            <div>
                                <p className="font-bold text-accent">
                                    {language === 'en' ? 'Active Language' : (language === 'ar' ? 'اللغة النشطة' : 'שפה פעילה')}
                                </p>
                                <p className="text-[11px] text-gray-400 italic">
                                    {language === 'en' ? 'Interface & Content Direction' : (language === 'ar' ? 'واجهة المستخدم واتجاه المحتوى' : 'ממשק וכיוון תוכן')}
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            {['en', 'ar', 'he'].map((l) => (
                                <button
                                    key={l}
                                    className={`px-4 py-2 rounded-lg text-[11px] font-bold uppercase tracking-widest transition-all ${language === l ? 'bg-primary text-white' : 'bg-gray-50 text-gray-400 hover:bg-gray-100'
                                        }`}
                                >
                                    {l === 'en' ? 'English' : (l === 'ar' ? 'العربية' : 'עברית')}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-end pt-4">
                <button className="bg-accent text-white font-bold px-10 py-4 rounded-xl shadow-lg active:scale-95 transition-all">
                    {language === 'en' ? 'Save Synchronization' : (language === 'ar' ? 'حفظ المزامنة' : 'שמור סנכרון')}
                </button>
            </div>
        </div>

    );
}
