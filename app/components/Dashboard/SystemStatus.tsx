import React from 'react';
import { CheckCircle, AlertCircle, RefreshCw, Activity } from 'lucide-react';
import { clsx } from 'clsx';
import { useLanguage } from '../../contexts/LanguageContext';

export default function SystemStatus() {
    const { language } = useLanguage();

    const statuses = [
        {
            id: 'supplier',
            label: { en: 'Supplier Sync', ar: 'مزامنة الموردين', he: 'סנכרון ספקים' },
            status: 'operational',
            icon: RefreshCw
        },
        {
            id: 'orders',
            label: { en: 'Auto-Order Engine', ar: 'محرك الطلبات الآلي', he: 'מנוע הזמנות אוטומטי' },
            status: 'operational',
            icon: CheckCircle
        },
        {
            id: 'tracking',
            label: { en: 'Tracking Updates', ar: 'تحديثات الشحن', he: 'עדכוני משלוח' },
            status: 'degraded',
            icon: Activity
        }
    ];

    const getStatusText = (status: string) => {
        if (status === 'operational') {
            return language === 'en' ? 'Operational' : (language === 'ar' ? 'يعمل كالمعتاد' : 'תקין');
        }
        return language === 'en' ? 'Degraded Performance' : (language === 'ar' ? 'أداء منخفض' : 'ביצועים ירודים');
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-card border border-gray-100">
            <h3 className="text-lg font-bold text-accent mb-4 px-1">
                {language === 'en' ? 'System Health' : (language === 'ar' ? 'حالة النظام' : 'מצב מערכת')}
            </h3>
            <div className="space-y-3">
                {statuses.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                        <div className="flex items-center gap-3">
                            <div className={clsx(
                                "p-2 rounded-lg",
                                item.status === 'operational' ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"
                            )}>
                                <item.icon size={18} />
                            </div>
                            <div>
                                <p className="text-[13px] font-semibold text-gray-900">
                                    {(item.label as any)[language] || item.label['en']}
                                </p>
                                <div className="flex items-center gap-1.5 mt-0.5">
                                    <span className={clsx(
                                        "relative flex h-2 w-2"
                                    )}>
                                        <span className={clsx(
                                            "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
                                            item.status === 'operational' ? "bg-green-400" : "bg-yellow-400"
                                        )}></span>
                                        <span className={clsx(
                                            "relative inline-flex rounded-full h-2 w-2",
                                            item.status === 'operational' ? "bg-green-500" : "bg-yellow-500"
                                        )}></span>
                                    </span>
                                    <span className="text-[13px] text-gray-500 font-medium capitalized">
                                        {getStatusText(item.status)}
                                    </span>
                                </div>
                            </div>
                        </div>
                        {item.status !== 'operational' && (
                            <button className="text-[13px] font-medium text-primary hover:text-primary-dark underline">
                                {language === 'en' ? 'Details' : (language === 'ar' ? 'تفاصيل' : 'פרטים')}
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
