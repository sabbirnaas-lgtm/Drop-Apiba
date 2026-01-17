import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { useLanguage } from '../../contexts/LanguageContext';
import { clsx } from 'clsx';

interface AppShellProps {
    children: React.ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
    const { dir } = useLanguage();
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className={clsx(
            "min-h-screen bg-[#F9FAFB] flex font-sans",
            dir === 'rtl' ? "flex-row-reverse" : "flex-row"
        )} dir={dir}>
            {/* Sidebar - Positioned based on flex-row-reverse */}
            <Sidebar
                isCollapsed={isCollapsed}
                onToggle={() => setIsCollapsed(!isCollapsed)}
            />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                <Header />

                <main className="flex-1 overflow-y-auto custom-scrollbar p-8">
                    <div className="max-w-[1400px] mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
