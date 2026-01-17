import React, { useState } from 'react';
import { NavLink } from '@remix-run/react';
import {
    LayoutDashboard,
    ListOrdered,
    Users,
    Store,
    MessageSquare,
    ChevronLeft,
    ChevronRight,
    Settings,
    HelpCircle
} from 'lucide-react';
import { clsx } from 'clsx';
import { useLanguage } from '../../contexts/LanguageContext';

interface SidebarProps {
    isCollapsed: boolean;
    onToggle: () => void;
}

export default function Sidebar({ isCollapsed, onToggle }: SidebarProps) {
    const { language, dir } = useLanguage();

    const menuItems = [
        {
            label: language === 'en' ? 'Dashboard' : (language === 'ar' ? 'لوحة القيادة' : 'לוח בקרה'),
            icon: LayoutDashboard,
            to: '/app'
        },
        {
            label: language === 'en' ? 'Import List' : (language === 'ar' ? 'قائمة الاستيراد' : 'רשימת ייבוא'),
            icon: ListOrdered,
            to: '/app/import'
        },
        {
            label: language === 'en' ? 'Suppliers' : (language === 'ar' ? 'الموردين' : 'ספקים'),
            icon: Users,
            to: '/app/suppliers'
        },
        {
            label: language === 'en' ? 'My Store' : (language === 'ar' ? 'متجري' : 'החנות שלי'),
            icon: Store,
            to: '/app/store'
        },
        {
            label: language === 'en' ? 'Support' : (language === 'ar' ? 'الدعم' : 'תמיכה'),
            icon: MessageSquare,
            to: '/app/support'
        },
    ];

    const bottomItems = [
        { label: language === 'en' ? 'Settings' : (language === 'ar' ? 'الإعدادات' : 'הגדרות'), icon: Settings, to: '/app/settings' },
        { label: language === 'en' ? 'Help' : (language === 'ar' ? 'مساعدة' : 'עזרה'), icon: HelpCircle, to: '/app/help' },
    ];

    return (
        <aside
            className={clsx(
                "h-screen bg-white border-r border-gray-100 flex flex-col transition-all duration-300 ease-in-out z-[100] shadow-sm",
                isCollapsed ? "w-20" : "w-64",
                dir === 'rtl' ? "border-l border-r-0" : "border-r"
            )}
        >
            {/* Sidebar Header / Logo area */}
            <div className="h-16 flex items-center px-6 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold shrink-0 shadow-md">D</div>
                {!isCollapsed && (
                    <span className="ml-3 font-bold text-xl text-accent tracking-tighter transition-opacity duration-200">
                        Drop Apiba
                    </span>
                )}
            </div>

            {/* Navigation Menu */}
            <nav className="flex-1 px-4 space-y-1 overflow-y-auto custom-scrollbar">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        end={item.to === '/app'}
                        className={({ isActive }) => clsx(
                            "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group text-[15px] font-medium",
                            isActive
                                ? "bg-primary/5 text-primary"
                                : "text-gray-500 hover:bg-gray-50 hover:text-accent"
                        )}
                    >
                        <item.icon className={clsx(
                            "shrink-0 transition-transform duration-200 group-hover:scale-110",
                            "w-5 h-5"
                        )} />
                        {!isCollapsed && <span className="truncate">{item.label}</span>}
                    </NavLink>
                ))}
            </nav>

            {/* Footer / Toggle */}
            <div className="p-4 border-t border-gray-100 space-y-2">
                {bottomItems.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:text-accent hover:bg-gray-50 transition-colors text-[13px]"
                    >
                        <item.icon size={18} />
                        {!isCollapsed && <span>{item.label}</span>}
                    </NavLink>
                ))}

                <button
                    onClick={onToggle}
                    className="w-full flex items-center justify-center p-2 rounded-lg hover:bg-gray-100 text-gray-400 transition-colors mt-2"
                >
                    {isCollapsed ? (
                        dir === 'rtl' ? <ChevronLeft size={18} /> : <ChevronRight size={18} />
                    ) : (
                        dir === 'rtl' ? <ChevronRight size={18} /> : <ChevronLeft size={18} />
                    )}
                </button>
            </div>
        </aside>
    );
}
