import React from 'react';
import { Store, Globe, Search, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

export default function MyStore() {
    const { language, dir } = useLanguage();

    return (
        <div className="space-y-10" dir={dir}>
            <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 bg-primary/10 text-primary text-[13px] font-bold rounded uppercase tracking-widest border border-primary/20">
                            {language === 'en' ? 'Drop Apiba — Store Intelligence' : (language === 'ar' ? 'Drop Apiba — ذكاء المتجر' : 'Drop Apiba — מודיעין חנות')}
                        </span>
                    </div>
                    <h1 className="text-xl font-bold text-accent tracking-tight">
                        {language === 'en' ? 'Store Front' : (language === 'ar' ? 'واجهة المتجر' : 'חזית החנות')}
                    </h1>
                    <p className="text-base font-normal text-gray-400 mt-2 max-w-lg leading-relaxed">
                        {language === 'en' ? 'Manage your brand identity, domain synchronization, and storefront performance.' : (language === 'ar' ? 'إدارة هوية علامتك التجارية ومزامنة النطاق وأداء المتجر.' : 'נהל את זהות המותג שלך, סנכרון הדומיינים וביצועי חזית החנות.')}
                    </p>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    {/* Main Store Card */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100/50 p-10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <Store size={120} />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-accent tracking-tight mb-6">
                                {language === 'en' ? 'Connected Storefront' : (language === 'ar' ? 'المتجر المتصل' : 'חנות מחוברת')}
                            </h3>
                            <div className="flex items-center gap-6 p-6 bg-gray-50 rounded-2xl border border-gray-100 mb-8">
                                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary font-bold text-2xl border border-gray-100">
                                    S
                                </div>
                                <div>
                                    <p className="text-lg font-bold text-accent">my-premium-store.myshopify.com</p>
                                    <div className="flex items-center gap-2 mt-1">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span className="text-[13px] font-bold text-gray-400 uppercase tracking-widest italic">
                                            {language === 'en' ? 'Fully Synced' : (language === 'ar' ? 'متزامن بالكامل' : 'מסונכרן במלואו')}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <button className="py-4 px-6 bg-accent text-white rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-black transition-all shadow-lg active:scale-95">
                                    {language === 'en' ? 'Edit Store Identity' : (language === 'ar' ? 'تعديل هوية المتجر' : 'ערוך זהות חנות')}
                                    <ArrowRight size={18} />
                                </button>
                                <button className="py-4 px-6 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold hover:border-gray-300 transition-all flex items-center justify-center gap-3">
                                    <Globe size={18} />
                                    {language === 'en' ? 'Domain Settings' : (language === 'ar' ? 'إعدادات النطاق' : 'הגדרות דומיין')}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* SEO & Performance */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100/50">
                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                                <Search size={24} />
                            </div>
                            <h4 className="text-lg font-bold text-accent mb-2">
                                {language === 'en' ? 'Search Logic' : (language === 'ar' ? 'منطق البحث' : 'לוגיקת חיפוש')}
                            </h4>
                            <p className="text-sm text-gray-400 font-medium leading-relaxed mb-6">
                                {language === 'en' ? 'Automated meta-tag generation and semantic keywords for deep indexing.' : (language === 'ar' ? 'توليد تلقائي لعلامات التعريف والكلمات الدلالية للفهرسة العميقة.' : 'יצירת מטה-תגיות אוטומטית ומילות מפתח סמנטיות לאינדוקס עמוק.')}
                            </p>
                            <div className="h-2 w-full bg-gray-50 rounded-full overflow-hidden">
                                <div className="h-full bg-primary w-[85%]"></div>
                            </div>
                            <p className="text-[13px] font-bold text-gray-400 uppercase tracking-widest mt-3">
                                {language === 'en' ? '85% Optimization Score' : (language === 'ar' ? '85% درجة التحسين' : '85% ציון אופטימיזציה')}
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100/50">
                            <div className="w-12 h-12 bg-green-50/50 text-green-600 rounded-xl flex items-center justify-center mb-6">
                                <Zap size={24} />
                            </div>
                            <h4 className="text-lg font-bold text-accent mb-2">
                                {language === 'en' ? 'Edge Delivery' : (language === 'ar' ? 'تسليم الحافة' : 'משלוח בקצה')}
                            </h4>
                            <p className="text-sm text-gray-400 font-medium leading-relaxed mb-6">
                                {language === 'en' ? 'Global CDN caching ensuring sub-second response times across all regions.' : (language === 'ar' ? 'تخزين CDN عالمي يضمن أوقات استجابة أقل من الثانية عبر جميع المناطق.' : 'מטמון CDN גלובלי המבטיח זמני תגובה של פחות משנייה בכל האזורים.')}
                            </p>
                            <div className="h-2 w-full bg-gray-50 rounded-full overflow-hidden">
                                <div className="h-full bg-green-500 w-[94%]"></div>
                            </div>
                            <p className="text-[13px] font-bold text-gray-400 uppercase tracking-widest mt-3">
                                {language === 'en' ? '94% Speed Index' : (language === 'ar' ? '94% مؤشر السرعة' : '94% מדד מהירות')}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Sidebar Info */}
                <div className="space-y-8">
                    <div className="bg-accent p-8 rounded-2xl shadow-xl border border-gray-800 text-white">
                        <h4 className="text-lg font-bold mb-4 tracking-tight">
                            {language === 'en' ? 'Trust & Security' : (language === 'ar' ? 'الثقة والأمان' : 'אמון ואבטחה')}
                        </h4>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                                <ShieldCheck size={20} className="text-primary" />
                                <span className="text-[11px] font-bold uppercase tracking-widest">SSL EV Protocol</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                                <ShieldCheck size={20} className="text-primary" />
                                <span className="text-[11px] font-bold uppercase tracking-widest">PCI-DSS Tier 1</span>
                            </div>
                        </div>
                        <p className="text-[11px] text-gray-400 mt-6 leading-relaxed italic uppercase tracking-widest">
                            {language === 'en' ? 'Your storefront is protected by Enterprise-grade security layers.' : (language === 'ar' ? 'متجرك محمي بطبقات أمان من فئة المؤسسات.' : 'חזית החנות שלך מוגנת על ידי שכבות אבטחה ברמה ארגונית.')}
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100/50">
                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">
                            {language === 'en' ? 'System Events' : (language === 'ar' ? 'أحداث النظام' : 'אירועי מערכת')}
                        </h4>
                        <div className="space-y-6">
                            {[1, 2].map(i => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-1 h-12 bg-gray-100 rounded-full"></div>
                                    <div>
                                        <p className="text-xs font-bold text-accent">
                                            {i === 1 ? (language === 'en' ? 'Theme Synced' : (language === 'ar' ? 'تم مزامنة السمة' : 'ערכת נושא סונכרנה')) :
                                                (language === 'en' ? 'Logo Re-indexed' : (language === 'ar' ? 'إعادة فهرسة الشعار' : 'לוגו אונדקס מחדש'))}
                                        </p>
                                        <p className="text-[11px] text-gray-400 mt-1 uppercase">
                                            {language === 'en' ? '2 hours ago' : (language === 'ar' ? 'منذ ساعتين' : 'לפני שעתיים')}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
