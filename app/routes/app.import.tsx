import React from 'react';
import { useState } from 'react';
import { Search, Plus, Download, Filter, MoreHorizontal, CheckCircle, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { Page } from "@shopify/polaris";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { authenticate } from "../shopify.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
    await authenticate.admin(request);
    return null;
};

export default function Import() {
    const { language, dir } = useLanguage();
    const [url, setUrl] = useState('');
    // ... products data 

    const products = [
        { id: 1, title: 'Wireless Bluetooth Headphones 5.0 Noise Cancelling', image: 'https://placehold.co/100x100/f3f4f6/111827?text=Headphones', price: '$12.50', margin: '150%', status: 'active', supplier: 'AliExpress' },
        { id: 2, title: 'Smart Watch Series 8 Waterproof Fitness Tracker', image: 'https://placehold.co/100x100/f3f4f6/111827?text=Watch', price: '$24.00', margin: '120%', status: 'pending', supplier: 'AliExpress' },
        { id: 3, title: 'Portable Mini Blender for Smoothies and Shakes', image: 'https://placehold.co/100x100/f3f4f6/111827?text=Blender', price: '$18.90', margin: '200%', status: 'active', supplier: 'CJ Dropshipping' },
        { id: 4, title: 'Ergonomic Office Chair Mesh Back Support', image: 'https://placehold.co/100x100/f3f4f6/111827?text=Chair', price: '$85.00', margin: '80%', status: 'error', supplier: 'AliExpress' },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'active': return 'bg-green-100 text-green-700';
            case 'pending': return 'bg-yellow-100 text-yellow-700';
            case 'error': return 'bg-red-100 text-red-700';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    return (
        <div className="space-y-10" dir={dir}>
            <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 bg-primary/10 text-primary text-[13px] font-bold rounded uppercase tracking-widest border border-primary/20">Drop Apiba — Import Engine</span>
                    </div>
                    <h1 className="text-xl font-bold text-accent tracking-tight focus:outline-none">
                        {language === 'en' ? 'Product Curation' : (language === 'ar' ? 'تقييم المنتجات' : 'ניהול מוצרים')}
                    </h1>
                    <p className="text-base font-normal text-gray-400 mt-2 max-w-lg leading-relaxed">
                        {language === 'en' ? 'Seamlessly pull products from global suppliers and optimize them for your audience.' : (language === 'ar' ? 'سحب المنتجات بسلاسة من الموردين العالميين وتحسينها لجمهورك.' : 'משוך מוצרים בצורה חלקה מספקים גלובליים ובצע אופטימיזציה עבור הקהל שלך.')}
                    </p>
                </div>
                <div className="flex gap-4">
                    <button className="bg-white border border-gray-200 text-gray-700 font-bold px-6 py-3 rounded-xl text-sm hover:border-gray-300 transition-all flex items-center gap-2 shadow-sm">
                        <Filter size={18} /> {language === 'en' ? 'Filter' : (language === 'ar' ? 'تصفية' : 'סינון')}
                    </button>
                    <button className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-3 rounded-xl text-sm shadow-xl shadow-primary/20 transition-all flex items-center gap-2">
                        <Plus size={20} /> {language === 'en' ? 'Bulk Sync' : (language === 'ar' ? 'مزامنة جماعية' : 'סנכרון קבוצתי')}
                    </button>
                </div>
            </div>

            {/* Import Bar - Refined */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100/50">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={20} />
                        <input
                            type="text"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder={language === 'en' ? "Paste AliExpress or CJ URL..." : (language === 'ar' ? "الصق عنوان URL..." : "הדבק כתובת AliExpress או CJ...")}
                            className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium"
                        />
                    </div>
                    <button className="bg-accent text-white px-10 py-4 rounded-xl font-bold hover:bg-black transition-all flex items-center gap-2 justify-center shadow-lg active:scale-95">
                        <Download size={20} /> {language === 'en' ? 'Import Engine' : (language === 'ar' ? 'محرك الاستيراد' : 'מנוע ייבוא')}
                    </button>
                </div>
                <div className="mt-6 flex items-center gap-6 text-[13px] font-bold text-gray-400 uppercase tracking-widest pl-2">
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                        {language === 'en' ? 'AliExpress Verified' : (language === 'ar' ? 'تم التحقق من AliExpress' : 'מאומת AliExpress')}
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                        {language === 'en' ? 'CJ Dropshipping' : (language === 'ar' ? 'CJ دروبشيبينغ' : 'CJ דרופשיפינג')}
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                        {language === 'en' ? 'AI Optimizer Active' : (language === 'ar' ? 'محسن الذكاء الاصطناعي نشط' : 'אופטימייזר AI פעיל')}
                    </div>
                </div>

            </div>

            {/* Product List - Premium Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100/50 overflow-hidden">
                <div className="p-8 border-b border-gray-50 bg-gray-50/30">
                    <h3 className="text-lg font-bold text-accent tracking-tighter">
                        {language === 'en' ? 'Staging Area' : (language === 'ar' ? 'منطقة الانتظار' : 'אזור המתנה')}
                    </h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-start">
                        <thead>
                            <tr className="border-b border-gray-50">
                                <th className="px-8 py-5 text-[13px] font-semibold text-gray-400 uppercase tracking-widest text-left">
                                    {language === 'en' ? 'Product Entity' : (language === 'ar' ? 'كيان المنتج' : 'ישות מוצר')}
                                </th>
                                <th className="px-8 py-5 text-[13px] font-semibold text-gray-400 uppercase tracking-widest text-left">
                                    {language === 'en' ? 'Inventory Cost' : (language === 'ar' ? 'تكلفة المخزون' : 'עלות מלאי')}
                                </th>
                                <th className="px-8 py-5 text-[13px] font-semibold text-gray-400 uppercase tracking-widest text-left">
                                    {language === 'en' ? 'Target Margin' : (language === 'ar' ? 'الهامش المستهدف' : 'מתח רווח יעד')}
                                </th>
                                <th className="px-8 py-5 text-[13px] font-semibold text-gray-400 uppercase tracking-widest text-left">
                                    {language === 'en' ? 'Fulfillment Source' : (language === 'ar' ? 'مصدر التنفيذ' : 'מקור אספקה')}
                                </th>
                                <th className="px-8 py-5 text-[13px] font-semibold text-gray-400 uppercase tracking-widest text-left">
                                    {language === 'en' ? 'Workflow Status' : (language === 'ar' ? 'حالة العمل' : 'סטטוס עבודה')}
                                </th>
                                <th className="px-8 py-5 text-[13px] font-bold text-gray-400 uppercase tracking-widest text-right">
                                    {language === 'en' ? 'Operations' : (language === 'ar' ? 'عمليات' : 'פעולות')}
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {products.map((product) => (
                                <motion.tr
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    key={product.id}
                                    className="hover:bg-gray-50/30 transition-colors group"
                                >
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-4">
                                            <div className="relative shrink-0">
                                                <img src={product.image} alt="" className="w-12 h-12 rounded-xl object-cover border border-gray-100 shadow-sm" />
                                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-white flex items-center justify-center">
                                                    <CheckCircle size={8} className="text-white" />
                                                </div>
                                            </div>
                                            <span className="font-bold text-accent text-[13px] group-hover:text-primary transition-colors max-w-xs truncate">{product.title}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5 text-[12px] font-medium text-gray-600">{product.price}</td>
                                    <td className="px-8 py-5">
                                        <span className="text-green-600 font-bold text-[13px] bg-green-50 px-2 py-1 rounded-lg">+{product.margin}</span>
                                    </td>
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-1.5 text-gray-500 text-[12px] font-bold uppercase tracking-tight">
                                            <ExternalLink size={14} className="text-gray-400" /> {product.supplier}
                                        </div>
                                    </td>
                                    <td className="px-8 py-5">
                                        <span className={clsx(
                                            "px-2.5 py-1 rounded-full text-[12px] font-bold uppercase tracking-widest",
                                            product.status === 'active' ? "bg-green-50 text-green-600 border border-green-100" :
                                                product.status === 'pending' ? "bg-amber-50 text-amber-600 border border-amber-100" :
                                                    "bg-red-50 text-red-600 border border-red-100"
                                        )}>
                                            {product.status === 'active' ? (language === 'en' ? 'Active' : (language === 'ar' ? 'نشط' : 'פעיל')) :
                                                product.status === 'pending' ? (language === 'en' ? 'Pending' : (language === 'ar' ? 'قيد الانتظار' : 'בהמתנה')) :
                                                    (language === 'en' ? 'Error' : (language === 'ar' ? 'خطأ' : 'שגיאה'))}
                                        </span>
                                    </td>
                                    <td className="px-8 py-5 text-right">
                                        <button className="p-2.5 hover:bg-gray-100 rounded-xl text-gray-400 hover:text-accent transition-all">
                                            <MoreHorizontal size={20} />
                                        </button>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="p-6 border-t border-gray-50 flex justify-center bg-gray-50/10">
                    <button className="text-[13px] font-bold text-gray-400 uppercase tracking-widest hover:text-primary transition-colors">
                        {language === 'en' ? 'Load Extended History' : (language === 'ar' ? 'تحميل السجل الموسع' : 'טען היסטוריה מורחבת')}
                    </button>
                </div>
            </div>
        </div>
    );
}
