import React from 'react';
import { Globe, Zap, ShieldCheck, ShoppingCart, Truck, RefreshCw, MessageSquare, BarChart3, ExternalLink, MapPin, Package, AlertCircle } from 'lucide-react';
import { clsx } from "clsx";
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Page } from "@shopify/polaris";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { authenticate } from "../shopify.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
    await authenticate.admin(request);
    return null;
};

export default function Suppliers() {
    const { language, dir } = useLanguage();

    const shipments = [
        { id: 'TRK-9821', customer: 'Alice Smith', country: 'USA', status: 'In Transit', carrier: 'YunExpress', eta: '3 Days' },
        { id: 'TRK-9822', customer: 'Bob Jones', country: 'UK', status: 'Delivered', carrier: 'Royal Mail', eta: '-' },
        { id: 'TRK-9823', customer: 'Charlie Brown', country: 'Canada', status: 'Pending', carrier: 'Cainiao', eta: '12 Days' },
    ];

    return (
        <div className="space-y-10" dir={dir}>
            <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 bg-primary/10 text-primary text-[13px] font-bold rounded uppercase tracking-widest border border-primary/20">
                            {language === 'en' ? 'Drop Apiba — Global Logistics' : (language === 'ar' ? 'Drop Apiba — الخدمات اللوجستية العالمية' : 'Drop Apiba — לוגיסטיקה גלובלית')}
                        </span>
                    </div>
                    <h1 className="text-xl font-bold text-accent tracking-tight transition-all">
                        {language === 'en' ? 'Supply Orchestration' : (language === 'ar' ? 'تنسيق التوريد' : 'ניהול אספקה')}
                    </h1>
                    <p className="text-base font-normal text-gray-400 mt-2 max-w-lg leading-relaxed">
                        {language === 'en' ? 'Real-time visibility into your global supply chain and fulfillment metrics.' : (language === 'ar' ? 'رؤية فورية لسلسلة التوريد العالمية ومقاييس التنفيذ.' : 'נראות בזמן אמת לשרשרת האספקה הגלובלית ומדדי הביצוע שלך.')}
                    </p>
                </div>
                <button className="bg-white border border-gray-200 text-gray-700 font-bold px-8 py-3 rounded-xl text-sm hover:border-gray-300 shadow-sm flex items-center gap-2 transition-all">
                    <Globe size={18} /> {language === 'en' ? 'Supplier Hub' : (language === 'ar' ? 'مركز الموردين' : 'מרכז ספקים')}
                </button>
            </div>

            {/* Logistics Status Overview - Minimalist */}
            <div className="bg-accent rounded-2xl shadow-xl border border-gray-800 p-8 relative overflow-hidden h-[300px] flex items-center">
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center scale-110"></div>
                <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="space-y-2">
                        <p className="text-[13px] font-semibold text-gray-400 uppercase tracking-[0.2em] mb-4">
                            {language === 'en' ? 'Active Pipeline' : (language === 'ar' ? 'خط الأنابيب النشط' : 'צינור פעיל')}
                        </p>
                        <h3 className="text-5xl font-bold text-white tracking-tighter">1,204</h3>
                        <p className="text-[13px] text-gray-400 font-medium">
                            {language === 'en' ? 'Global shipments in flight' : (language === 'ar' ? 'شحنات عالمية قيد النقل' : 'משלוחים גלובליים בדרך')}
                        </p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-[13px] font-semibold text-gray-400 uppercase tracking-[0.2em] mb-4">
                            {language === 'en' ? 'Efficiency Rate' : (language === 'ar' ? 'معدل الكفاءة' : 'שיעור יעילות')}
                        </p>
                        <h3 className="text-5xl font-bold text-green-400 tracking-tighter">98.2%</h3>
                        <p className="text-[13px] text-gray-400 font-medium whitespace-nowrap">
                            {language === 'en' ? 'On-time delivery performance' : (language === 'ar' ? 'أداء التسليم في الوقت المحدد' : 'ביצועי אספקה בזמן')}
                        </p>
                    </div>
                    <div className="flex items-center md:justify-end">
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white">
                                    <Zap size={24} />
                                </div>
                                <div>
                                    <p className="text-lg font-bold text-white leading-none italic">
                                        {language === 'en' ? 'Hyper-Speed' : (language === 'ar' ? 'سرعة فائقة' : 'מהירות-על')}
                                    </p>
                                    <p className="text-[13px] text-gray-400 mt-1 uppercase tracking-widest">
                                        {language === 'en' ? 'Routing Optimization' : (language === 'ar' ? 'تحسين المسار' : 'אופטימיזציית ניתוב')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Suppliers & Shipments Grid */}
            <div className="grid lg:grid-cols-2 gap-10">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100/50">
                    <div className="flex justify-between items-center mb-8 border-b border-gray-50 pb-6">
                        <div>
                            <h3 className="text-xl font-bold text-accent tracking-tight">
                                {language === 'en' ? 'Verified Partners' : (language === 'ar' ? 'الشركاء الموثوقون' : 'שותפים מאומתים')}
                            </h3>
                            <p className="text-[13px] text-gray-400 mt-1 uppercase tracking-widest font-bold">
                                {language === 'en' ? 'Top Performing Suppliers' : (language === 'ar' ? 'أفضل الموردين أداءً' : 'ספקים בעלי הביצועים הטובים ביותר')}
                            </p>
                        </div>
                        <button className="text-[13px] text-primary font-bold uppercase tracking-widest">
                            {language === 'en' ? 'Directory' : (language === 'ar' ? 'دليل' : 'מדריך')}
                        </button>
                    </div>
                    <div className="space-y-6">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50/50 transition-all border border-transparent hover:border-gray-100 group">
                                <div className="w-12 h-12 rounded-xl bg-gray-50 text-accent font-bold flex items-center justify-center text-lg border border-gray-100 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                                    {i === 1 ? 'A' : (i === 2 ? 'C' : 'Z')}
                                </div>
                                <div className="flex-1">
                                    <p className="font-bold text-accent group-hover:text-primary transition-colors text-[13px]">
                                        {i === 1 ? (language === 'en' ? 'AliExpress Premier' : (language === 'ar' ? 'ألي إكسبريس بريميير' : 'עלי אקספרס פרימיום')) :
                                            (i === 2 ? (language === 'en' ? 'CJ Logistics Global' : (language === 'ar' ? 'CJ للخدمات اللوجستية' : 'CJ לוגיסטיקה גלובלית')) :
                                                (language === 'en' ? 'Zendrop Direct Sync' : (language === 'ar' ? 'زيندروب مزامنة مباشرة' : 'זנדרופ סנכרון ישיר')))}
                                    </p>
                                    <p className="text-[13px] text-gray-400 mt-0.5 font-medium">
                                        {language === 'en' ? 'Enterprise API Connected' : (language === 'ar' ? 'متصل بواجهة برمجة تطبيقات المؤسسة' : 'מחובר ל-API ארגוני')}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <div className="flex items-center gap-1 justify-end text-green-600 font-bold mb-1">
                                        <ShieldCheck size={14} /> 4.9
                                    </div>
                                    <p className="text-[13px] text-gray-400 uppercase tracking-widest font-bold">
                                        {language === 'en' ? 'Health Score' : (language === 'ar' ? 'درجة الصحة' : 'ציון בריאות')}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100/50">
                    <div className="flex justify-between items-center mb-8 border-b border-gray-50 pb-6">
                        <div>
                            <h3 className="text-xl font-bold text-accent tracking-tight">
                                {language === 'en' ? 'Active Tracking' : (language === 'ar' ? 'تتبع نشط' : 'מעקב פעיל')}
                            </h3>
                            <p className="text-[13px] text-gray-400 mt-1 uppercase tracking-widest font-bold">
                                {language === 'en' ? 'Last 24 Hour Updates' : (language === 'ar' ? 'تحديثات الـ 24 ساعة الماضية' : 'עדכונים ב-24 השעות האחרונות')}
                            </p>
                        </div>
                        <button className="text-[13px] text-primary font-bold uppercase tracking-widest">
                            {language === 'en' ? 'Global Feed' : (language === 'ar' ? 'تغذية عالمية' : 'פיד גלובלי')}
                        </button>
                    </div>
                    <div className="space-y-4">
                        {shipments.map((ship) => (
                            <div key={ship.id} className="flex items-center gap-4 p-4 rounded-2xl border border-gray-50 hover:border-primary/20 hover:shadow-md transition-all group">
                                <div className="p-3 bg-gray-50 text-accent rounded-xl group-hover:bg-primary/10 group-hover:text-primary transition-all">
                                    <Package size={20} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-start">
                                        <p className="font-bold text-accent truncate pr-4">{ship.id}</p>
                                        <span className={clsx(
                                            "text-[12px] px-2.5 py-1 rounded-full font-bold uppercase tracking-widest whitespace-nowrap",
                                            ship.status === 'Delivered' ? 'bg-green-50 text-green-600 border border-green-100' :
                                                ship.status === 'In Transit' ? 'bg-primary/5 text-primary border border-primary/10' :
                                                    'bg-gray-50 text-gray-500 border border-gray-100'
                                        )}>
                                            {ship.status === 'Delivered' ? (language === 'en' ? 'Delivered' : (language === 'ar' ? 'تم التوصيل' : 'נמסר')) :
                                                ship.status === 'In Transit' ? (language === 'en' ? 'In Transit' : (language === 'ar' ? 'قيد الانتقال' : 'בדרך')) :
                                                    (language === 'en' ? 'Pending' : (language === 'ar' ? 'قيد الانتظار' : 'בהמתנה'))}
                                        </span>
                                    </div>
                                    <p className="text-[12px] text-gray-400 mt-1 font-medium truncate">
                                        {ship.customer} • {ship.country === 'USA' ? (language === 'en' ? 'USA' : (language === 'ar' ? 'أمريكا' : 'ארה"ב')) :
                                            ship.country === 'UK' ? (language === 'en' ? 'UK' : (language === 'ar' ? 'بريطانيا' : 'בריטניה')) :
                                                (language === 'en' ? 'Canada' : (language === 'ar' ? 'كندا' : 'קנדה'))} • {ship.carrier}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
