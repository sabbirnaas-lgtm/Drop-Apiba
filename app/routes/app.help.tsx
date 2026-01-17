import React from 'react';
import { HelpCircle, Book, MessageCircle, FileText, Zap, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function HelpPage() {
    const { language, dir } = useLanguage();

    return (
        <div className="space-y-10" dir={dir}>
            <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 bg-primary/10 text-primary text-[13px] font-bold rounded uppercase tracking-widest border border-primary/20">
                            {language === 'en' ? 'Drop Apiba — Knowledge Base' : (language === 'ar' ? 'Drop Apiba — قاعدة المعرفة' : 'Drop Apiba — בסיס ידע')}
                        </span>
                    </div>
                    <h1 className="text-xl font-bold text-accent tracking-tight">
                        {language === 'en' ? 'Support Portal' : (language === 'ar' ? 'بوابة المساعدة' : 'פורטל תמיכה')}
                    </h1>
                    <p className="text-base font-normal text-gray-400 mt-2 max-w-lg leading-relaxed">
                        {language === 'en' ? 'Access specialized documentation, AI-driven guides, and enterprise support resources.' : (language === 'ar' ? 'الوصول إلى الوثائق المتخصصة، والأدلة المدعومة بالذكاء الاصطناعي، وموارد دعم المؤسسات.' : 'גישה לתיעוד מיוחד, מדריכים מונעי בינה מלאכותית ומשאבי תמיכה ארגוניים.')}
                    </p>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Knowledge Hub */}
                <div className="md:col-span-2 space-y-8">
                    <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100/50">
                        <h3 className="text-2xl font-bold text-accent tracking-tight mb-8">
                            {language === 'en' ? 'Intelligence Guides' : (language === 'ar' ? 'أدلة الذكاء' : 'מדריכי מודיעין')}
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                {
                                    title: language === 'en' ? 'Dynamic Scaling' : (language === 'ar' ? 'توسيع ديناميكي' : 'הרחבה דינמית'),
                                    desc: language === 'en' ? 'Accelerate store growth with AI automation rules.' : (language === 'ar' ? 'تسريع نمو المتجر بقواعد أتمتة الذكاء الاصطناعي.' : 'האצת צמיחת החנות עם כללי אוטומציה של בינה מלאכותית.')
                                },
                                {
                                    title: language === 'en' ? 'Logistics Protocol' : (language === 'ar' ? 'بروتوكول اللوجستيات' : 'פרוטוקול לוגיסטיקה'),
                                    desc: language === 'en' ? 'Secure supply chain management and fulfillment.' : (language === 'ar' ? 'إدارة سلسلة التوريد الآمنة والوفاء.' : 'ניהול שרשרת אספקה מאובטח ומימוש הזמנות.')
                                },
                                {
                                    title: language === 'en' ? 'Margin Optimization' : (language === 'ar' ? 'تحسين الهامش' : 'אופטימיזציית רווח'),
                                    desc: language === 'en' ? 'Strategic pricing models for global markets.' : (language === 'ar' ? 'نماذج تسعير استراتيجية للأسواق العالمية.' : 'מודלים של תמחור אסטרטגי לשווקים גלובליים.')
                                },
                                {
                                    title: language === 'en' ? 'RTL Localization' : (language === 'ar' ? 'تعريب RTL' : 'לוקליזציה של RTL'),
                                    desc: language === 'en' ? 'Mastering the Middle Eastern market experience.' : (language === 'ar' ? 'إتقان تجربة السوق في الشرق الأوسط.' : 'שליטה בחוויית השוק המזרח תיכוני.')
                                }
                            ].map((guide, idx) => (
                                <div key={idx} className="p-6 bg-gray-50/50 rounded-2xl border border-gray-100 hover:border-primary/20 hover:bg-white hover:shadow-lg transition-all cursor-pointer group">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary border border-gray-100 group-hover:bg-primary group-hover:text-white transition-all">
                                            <Book size={20} />
                                        </div>
                                        <ArrowUpRight size={16} className="text-gray-300 group-hover:text-primary transition-colors" />
                                    </div>
                                    <h4 className="font-bold text-accent group-hover:text-primary transition-colors">{guide.title}</h4>
                                    <p className="text-[11px] text-gray-400 font-medium mt-1 leading-relaxed">{guide.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Direct Access */}
                <div className="space-y-8">
                    <div className="bg-accent p-8 rounded-2xl shadow-xl border border-gray-800 text-white">
                        <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                            <Zap size={24} className="text-white" />
                        </div>
                        <h4 className="text-xl font-bold tracking-tight mb-2 italic">
                            {language === 'en' ? 'Priority Express' : (language === 'ar' ? 'أولوية إكسبريس' : 'עדיפות אקספרס')}
                        </h4>
                        <p className="text-sm text-gray-400 font-medium leading-relaxed mb-8">
                            {language === 'en' ? 'On-demand access to our technical leads for high-volume operations.' : (language === 'ar' ? 'وصول عند الطلب لكبار المهندسين للعمليات عالية القدرة.' : 'גישה לפי דרישה למובילים הטכניים שלנו עבור פעולות בנפח גבוה.')}
                        </p>
                        <button className="w-full py-4 bg-white text-accent font-bold rounded-xl active:scale-95 transition-all text-sm">
                            {language === 'en' ? 'Open Direct Stream' : (language === 'ar' ? 'فتح قناة مباشرة' : 'פתח ערוץ ישיר')}
                        </button>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100/50">
                        <h4 className="text-[11px] font-semibold text-gray-400 uppercase tracking-[0.2em] mb-6">
                            {language === 'en' ? 'Support Status' : (language === 'ar' ? 'حالة الدعم' : 'מצב תמיכה')}
                        </h4>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-[13px] font-bold text-accent">
                                    {language === 'en' ? 'AI Dispatch' : (language === 'ar' ? 'إرسال الذكاء الاصطناعي' : 'שיגור AI')}
                                </span>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                    <span className="text-[11px] font-bold text-green-600 uppercase">
                                        {language === 'en' ? 'Operational' : (language === 'ar' ? 'تشغيلي' : 'פעיל')}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-[13px] font-bold text-accent">
                                    {language === 'en' ? 'Developer Core' : (language === 'ar' ? 'النواة البرمجية' : 'ליבת פיתוח')}
                                </span>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                    <span className="text-[11px] font-bold text-green-600 uppercase">
                                        {language === 'en' ? 'Online' : (language === 'ar' ? 'متصل' : 'מחובר')}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
