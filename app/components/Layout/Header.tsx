import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import LanguageToggle from '../LanguageToggle';
import { Bell, Search, User } from 'lucide-react';

export default function Header() {
    const { language, dir } = useLanguage();

    return (
        <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-50">
            {/* Search area (Enterprise standard) */}
            <div className="flex-1 max-w-md hidden md:block">
                <div className="relative group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={18} />
                    <input
                        type="text"
                        placeholder={language === 'en' ? 'Search anything...' : (language === 'ar' ? 'بحث عن أي شيء...' : 'חפש כל דבר...')}
                        className="w-full bg-gray-50 border border-transparent focus:border-primary/20 focus:bg-white focus:ring-4 focus:ring-primary/5 pl-10 pr-4 py-2 rounded-xl text-sm transition-all outline-none"
                    />
                </div>
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-4">
                {/* Localization Toggle - Integrated */}
                <div className="hidden sm:block">
                    <LanguageToggle />
                </div>

                <div className="flex items-center gap-2 pr-4 border-r border-gray-100 rtl:border-r-0 rtl:border-l rtl:pl-4">
                    <button className="p-2 text-gray-500 hover:bg-gray-50 rounded-lg transition-colors relative">
                        <Bell size={20} />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                    </button>
                </div>

                {/* User Profile */}
                <div className="flex items-center gap-3 pl-2">
                    <div className="text-right hidden lg:block">
                        <p className="text-[15px] font-bold text-accent leading-none">
                            {language === 'en' ? 'Enterprise Merchant' : (language === 'ar' ? 'تاجر المؤسسة' : 'סוחר ארגוני')}
                        </p>
                        <p className="text-[13px] text-gray-400 font-medium uppercase tracking-wider">
                            {language === 'en' ? 'Premium Plan' : (language === 'ar' ? 'خطة متميزة' : 'תוכנית פרימיום')}
                        </p>
                    </div>
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold border-2 border-white shadow-sm ring-1 ring-gray-100 cursor-pointer hover:ring-primary/50 transition-all">
                        <User size={20} />
                    </div>
                </div>
            </div>
        </header>
    );
}
