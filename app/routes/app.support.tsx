import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, MoreVertical, Paperclip, Smile } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';
import { Page } from "@shopify/polaris";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { authenticate } from "../shopify.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
    await authenticate.admin(request);
    return null;
};

export default function Support() {
    const { language, dir } = useLanguage();
    const [messages, setMessages] = useState([
        { id: 1, type: 'bot', text: language === 'en' ? 'Hello! How can I help you optimize your store today?' : (language === 'ar' ? 'مرحباً! كيف يمكنني مساعدتك في تحسين متجرك اليوم؟' : 'שלום! איך אני יכול לעזור לך לייעל את החנות שלך היום?') },
    ]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (!input.trim()) return;
        setMessages([...messages, { id: Date.now(), type: 'user', text: input }]);
        setInput('');
        setTimeout(() => {
            setMessages(prev => [...prev, { id: Date.now() + 1, type: 'bot', text: language === 'en' ? 'I can certainly help with that. Let me analyze your latest orders.' : (language === 'ar' ? 'بالتأكيد يمكنني المساعدة في ذلك. دعني أقوم بتحليل أحدث طلباتك.' : 'אני בהחלט יכול לעזור בזה. תן לי לנתח את ההזמנות האחרונות שלך.') }]);
        }, 1500);
    };

    return (
        <div className="space-y-10" dir={dir}>
            <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 bg-primary/10 text-primary text-[13px] font-bold rounded uppercase tracking-widest border border-primary/20">Drop Apiba — AI Intelligence</span>
                    </div>
                    <h1 className="text-xl font-bold text-accent tracking-tight">
                        {language === 'en' ? 'Smart Assistance' : (language === 'ar' ? 'المساعدة الذكية' : 'סיוע חכם')}
                    </h1>
                    <p className="text-base font-normal text-gray-400 mt-2 max-w-lg leading-relaxed">
                        {language === 'en' ? 'Connect with our dedicated AI support for immediate help with logistics, orders, and scaling.' : (language === 'ar' ? 'تواصل مع دعم الذكاء الاصطناعي المخصص لدينا للحصول على مساعدة فورية في الخدمات اللوجستية والطلبات والتوسع.' : 'צור קשר עם תמיכת ה-AI הייעודית שלנו לקבלת עזרה מיידית בלוגיסטיקה, הזמנות וצמיחה.')}
                    </p>
                </div>
            </div>

            <div className="h-[calc(100vh-18rem)] flex gap-10">
                {/* Chat Index Bar */}
                <div className="w-80 bg-white rounded-2xl shadow-sm border border-gray-100/50 hidden lg:flex flex-col overflow-hidden">
                    <div className="p-6 border-b border-gray-50 bg-gray-50/30">
                        <h3 className="text-[11px] font-semibold text-accent tracking-tighter uppercase tracking-[0.1em]">
                            {language === 'en' ? 'Knowledge Streams' : (language === 'ar' ? 'جداول المعرفة' : 'זרימת ידע')}
                        </h3>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
                        <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10 cursor-pointer group transition-all">
                            <div className="flex justify-between items-start mb-2">
                                <p className="font-bold text-[13px] text-primary">
                                    {language === 'en' ? 'System Dispatch #1023' : (language === 'ar' ? 'إرسال النظام #1023' : 'שיגור מערכת #1023')}
                                </p>
                                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                                    {language === 'en' ? 'Active' : (language === 'ar' ? 'نشط' : 'פעיל')}
                                </span>
                            </div>
                            <p className="text-[11px] text-gray-500 line-clamp-2 leading-relaxed font-medium">
                                {language === 'en' ? 'Analyzing tracking data for fulfillment node 4...' : (language === 'ar' ? 'تحليل بيانات التتبع لعقدة التنفيذ 4...' : 'מנתח נתוני מעקב עבור נקודת אספקה 4...')}
                            </p>
                        </div>
                        {[1, 2, 3].map(i => (
                            <div key={i} className="p-4 hover:bg-gray-50 rounded-2xl cursor-pointer transition-all border border-transparent hover:border-gray-100">
                                <div className="flex justify-between items-start mb-2">
                                    <p className="font-bold text-[13px] text-accent">
                                        {language === 'en' ? 'Optimization Thread' : (language === 'ar' ? 'موضوع التحسين' : 'תהליך אופטימיזציה')}
                                    </p>
                                    <span className="text-[11px] font-bold text-gray-300">2d</span>
                                </div>
                                <p className="text-[11px] text-gray-400 line-clamp-2 font-medium">
                                    {language === 'en' ? 'Reviewing margin rules for the jewelry collection...' : (language === 'ar' ? 'مراجعة قواعد الهامش لمجموعة المجوهرات...' : 'סוקר את כללי המרווח עבור קולקציית התכשיטים...')}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="p-4 bg-gray-50/50 border-t border-gray-100">
                        <button className="w-full py-3 bg-white border border-gray-200 rounded-xl text-[11px] font-bold text-gray-400 uppercase tracking-widest hover:border-primary/20 hover:text-primary transition-all">
                            {language === 'en' ? 'Archived Streams' : (language === 'ar' ? 'الجداول المؤرشفة' : 'זרימות בארכיון')}
                        </button>
                    </div>
                </div>

                {/* Main System Conversation */}
                <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100/50 flex flex-col overflow-hidden">
                    <div className="p-6 border-b border-gray-50 flex justify-between items-center bg-gray-50/20">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-white shadow-lg shadow-accent/10">
                                <Bot size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-accent tracking-tight italic">
                                    {language === 'en' ? 'Drop Apiba Intelligence' : (language === 'ar' ? 'Drop Apiba ذكاء' : 'Drop Apiba מודיעין')}
                                </h3>
                                <div className="flex items-center gap-2 mt-0.5">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                                        {language === 'en' ? 'Operational Core' : (language === 'ar' ? 'النواة التشغيلية' : 'ליבה מבצעית')}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <button className="p-2 text-gray-400 hover:text-accent hover:bg-gray-50 rounded-xl transition-all">
                            <MoreVertical size={20} />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-10 space-y-8 bg-white custom-scrollbar">
                        {messages.map((msg) => (
                            <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                key={msg.id}
                                className={clsx(
                                    "flex gap-4 max-w-2xl group",
                                    msg.type === 'user' ? "ml-auto flex-row-reverse" : "mr-auto flex-row"
                                )}
                            >
                                <div className={clsx(
                                    "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border transition-all",
                                    msg.type === 'user' ? "bg-accent border-accent text-white" : "bg-gray-50 border-gray-100 text-primary"
                                )}>
                                    {msg.type === 'user' ? <User size={18} /> : <Bot size={20} />}
                                </div>
                                <div className={clsx(
                                    "p-6 text-[13px] leading-relaxed shadow-sm",
                                    msg.type === 'user'
                                        ? "bg-accent text-white rounded-3xl rounded-tr-none lg:group-hover:translate-x-[-4px] transition-transform"
                                        : "bg-gray-50 border border-gray-100 text-accent font-medium rounded-3xl rounded-tl-none lg:group-hover:translate-x-[4px] transition-transform"
                                )}>
                                    {msg.text}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="p-6 bg-white border-t border-gray-50">
                        <div className="flex items-center gap-2 p-2 bg-gray-50/50 rounded-2xl border border-gray-100 focus-within:border-primary/30 focus-within:bg-white focus-within:shadow-xl focus-within:shadow-primary/5 transition-all duration-300">
                            <button className="p-3 text-gray-400 hover:text-primary transition-colors">
                                <Paperclip size={20} />
                            </button>
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                placeholder={language === 'en' ? "Query the system..." : (language === 'ar' ? "استعلام النظام..." : "שאילתה למערכת...")}
                                className="flex-1 bg-transparent border-none outline-none text-[15px] font-medium text-accent placeholder-gray-400 p-2"
                            />
                            <button
                                onClick={handleSend}
                                className="p-3.5 bg-primary hover:bg-primary-dark text-white rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-95 group"
                            >
                                <Send size={20} className={clsx("transition-transform group-hover:translate-x-1 group-hover:-translate-y-1", dir === 'rtl' ? 'rotate-180' : '')} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
