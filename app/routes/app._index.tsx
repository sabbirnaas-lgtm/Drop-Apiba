import React, { useEffect } from "react";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { useFetcher } from "@remix-run/react";
import {
  Page,
  Layout,
} from "@shopify/polaris";
import {
  TitleBar,
  useAppBridge,
} from "@shopify/app-bridge-react";
import { authenticate } from "../shopify.server";
import { Activity, ShoppingBag, DollarSign, TrendingUp, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useLanguage } from '../contexts/LanguageContext';
import { clsx } from "clsx";
import SystemStatus from '../components/Dashboard/SystemStatus';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeSelection from '../components/Dashboard/ThemeSelection';
import DeployProcess from '../components/Dashboard/DeployProcess';
import { X } from 'lucide-react';

const chartData = [
  { name: 'Mon', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Tue', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Wed', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Thu', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Fri', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Sat', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Sun', uv: 3490, pv: 4300, amt: 2100 },
];

const StatCard = ({ title, value, trend, icon: Icon }: any) => {
  const isPositive = trend.startsWith('+') || trend === 'Stable' || trend === 'مستقر' || trend === 'יציב';
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100/50 group"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="p-3 rounded-xl bg-gray-50 text-accent group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300">
          <Icon size={24} />
        </div>
        <span className={clsx(
          "text-[13px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border",
          isPositive ? "text-green-600 bg-green-50 border-green-100" : "text-amber-600 bg-amber-50 border-amber-100"
        )}>
          {trend}
        </span>
      </div>
      <div>
        <p className="text-[13px] font-semibold text-gray-400 uppercase tracking-widest mb-1">{title}</p>
        <h3 className="text-[32px] font-bold text-accent tracking-tighter">{value}</h3>
      </div>
    </motion.div>
  );
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await authenticate.admin(request);
  return null;
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const { admin } = await authenticate.admin(request);
  // Keep the demo product generation for now
  const color = ["Red", "Orange", "Yellow", "Green"][Math.floor(Math.random() * 4)];
  const response = await admin.graphql(
    `#graphql
      mutation populateProduct($product: ProductCreateInput!) {
        productCreate(product: $product) {
          product { id title handle status }
        }
      }`,
    { variables: { product: { title: `${color} Snowboard` } } },
  );
  return await response.json();
};

export default function Index() {
  const { language, dir } = useLanguage();
  const fetcher = useFetcher<typeof action>();
  const [themeStep, setThemeStep] = React.useState<'idle' | 'selecting' | 'deploying' | 'completed'>('idle');
  const [selectedTheme, setSelectedTheme] = React.useState<string | null>(null);
  // const shopify = useAppBridge(); // Removed as TitleBar is removed

  // useEffect(() => { // Removed as TitleBar is removed
  //   if (fetcher.data && (fetcher.data as any).data?.productCreate?.product) {
  //     shopify.toast.show("Demo product created");
  //   }
  // }, [fetcher.data, shopify]);

  const generateProduct = () => fetcher.submit({}, { method: "POST" });

  return (
    <div className="space-y-10" dir={dir}>
      {/* Branded Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="px-2 py-0.5 bg-primary/10 text-primary text-[13px] font-bold rounded uppercase tracking-widest border border-primary/20">
              {language === 'en' ? 'Drop Apiba Pro' : (language === 'ar' ? 'Drop Apiba برو' : 'Drop Apiba פרו')}
            </div>
          </div>
          <h1 className="text-xl font-bold text-accent tracking-tight">
            {language === 'en' ? 'Enterprise Intelligence' : (language === 'ar' ? 'ذكاء المؤسسات' : 'מודיעין עסקי')}
          </h1>
          <p className="text-base font-normal text-gray-400 mt-2 max-w-lg leading-relaxed">
            {language === 'en' ? 'Advanced metrics and automation controls for your global commerce engine.' : (language === 'ar' ? 'مقاييس متقدمة وعناصر تحكم في الأتمتة لمحرك التجارة العالمي الخاص بك.' : 'מדדים מתקדמים ובקרות אוטומציה עבור מנוע המסחר הגלובלי שלך.')}
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={generateProduct}
            className="bg-white border border-gray-200 text-gray-700 hover:text-accent hover:border-gray-300 px-6 py-3 rounded-xl text-sm font-bold shadow-sm transition-all active:scale-95"
          >
            {language === 'en' ? 'Translation Hub' : (language === 'ar' ? 'مركز الترجمة' : 'מרכז תרגום')}
          </button>
          <button
            onClick={() => setThemeStep('selecting')}
            className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-xl text-sm font-bold shadow-xl shadow-primary/20 transition-all active:scale-95 flex items-center gap-2"
          >
            <ArrowUpRight size={18} />
            {language === 'en' ? 'Deploy Store' : (language === 'ar' ? 'نشر المتجر' : 'פרסם חנות')}
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <StatCard
          title={language === 'en' ? 'Total Revenue' : (language === 'ar' ? 'إجمالي الإيرادات' : 'סה"כ הכנסות')}
          value="$45,231.89"
          trend="+20.1%"
          icon={DollarSign}
          color="bg-primary"
        />
        <StatCard
          title={language === 'en' ? 'Total Orders' : (language === 'ar' ? 'إجمالي الطلبات' : 'סה"כ הזמנות')}
          value="1,203"
          trend="+12.5%"
          icon={ShoppingBag}
          color="bg-primary"
        />
        <StatCard
          title={language === 'en' ? 'Automation Status' : (language === 'ar' ? 'حالة الأتمتة' : 'מצב אוטומציה')}
          value="98.2%"
          trend={language === 'en' ? 'Stable' : (language === 'ar' ? 'مستقر' : 'יציב')}
          icon={Activity}
          color="bg-primary"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-gray-100/50">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-bold text-accent tracking-tight">
                {language === 'en' ? 'Revenue Growth' : (language === 'ar' ? 'نمو الإيرادات' : 'צמיחת הכנסות')}
              </h3>
              <p className="text-[13px] text-gray-400 mt-1">
                {language === 'en' ? 'Daily platform performance metrics' : (language === 'ar' ? 'مقاييس أداء المنصة اليومية' : 'מדדי ביצועי פלטפורמה יומיים')}
              </p>
            </div>
            <div className="flex gap-2">
              <span className="w-3 h-3 bg-primary rounded-full"></span>
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                {language === 'en' ? 'Live Revenue' : (language === 'ar' ? 'إيرادات مباشرة' : 'הכנסות בזמן אמת')}
              </span>
            </div>
          </div>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#008060" stopOpacity={0.05} />
                    <stop offset="95%" stopColor="#008060" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#9CA3AF', fontSize: 11, fontWeight: 500 }}
                  dy={15}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#9CA3AF', fontSize: 11, fontWeight: 500 }}
                  tickFormatter={(value) => `$${value / 1000}k`}
                />
                <Tooltip
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', padding: '12px' }}
                  itemStyle={{ color: '#111827', fontWeight: 600, fontSize: '12px' }}
                  cursor={{ stroke: '#008060', strokeWidth: 1, strokeDasharray: '4 4' }}
                />
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#008060"
                  strokeWidth={2.5}
                  fillOpacity={1}
                  fill="url(#colorRevenue)"
                  animationDuration={1500}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <SystemStatus />

          {/* Recent Activity Mini List */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100/50">
            <h3 className="text-lg font-bold text-accent mb-6 tracking-tight">
              {language === 'en' ? 'System Events' : (language === 'ar' ? 'أحداث النظام' : 'אירועי מערכת')}
            </h3>
            <div className="space-y-6">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="flex items-center gap-4 relative">
                  {i < 4 && <div className="absolute left-5 top-10 bottom-0 w-px bg-gray-100"></div>}
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-accent shrink-0 border border-gray-100">
                    <ShoppingBag size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-gray-900 leading-none">
                      {language === 'en' ? `Order #5422${i} Sync` : (language === 'ar' ? `مزامنة الطلب #5422${i}` : `סנכרון הזמנה #5422${i}`)}
                    </p>
                    <p className="text-[11px] text-gray-400 mt-1 font-medium italic">
                      {language === 'en' ? 'Validated & Pushed to Shopify' : (language === 'ar' ? 'تم التحقق والدفع لشوبيفاي' : 'נבדק ונדחף לשופיפיי')}
                    </p>
                  </div>
                  <span className="text-[11px] font-bold text-gray-300">2m</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-3 text-[11px] font-bold text-gray-400 hover:text-primary hover:bg-primary/5 border border-gray-100 rounded-xl transition-all duration-300 uppercase tracking-widest">
              {language === 'en' ? 'Audit Logs' : (language === 'ar' ? 'سجلات المراجعة' : 'יומן ביקורת')}
            </button>
          </div>
        </div>
      </div>

      {/* Theme Selection Modal Overlay */}
      <AnimatePresence>
        {themeStep !== 'idle' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 sm:p-12 lg:p-24 bg-accent/40 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-white w-full max-w-6xl rounded-[2.5rem] shadow-2xl border border-white/20 overflow-hidden flex flex-col max-h-full"
            >
              <div className="p-8 border-b border-gray-50 flex items-center justify-between bg-gray-50/30">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-2xl">
                    <ShoppingBag size={24} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-accent">
                      {themeStep === 'selecting' ? (language === 'en' ? 'Theme Architecture' : (language === 'ar' ? 'هندسة القوالب' : 'ארכיטקטורת תבניות')) :
                        themeStep === 'deploying' ? (language === 'en' ? 'One-Click Deployment' : (language === 'ar' ? 'نشر بنقرة واحدة' : 'פריסה בלחיצה אחת')) :
                          (language === 'en' ? 'Deployment Successful' : (language === 'ar' ? 'تم النشر بنجاح' : 'הפריסה בוצעה בהצלחה'))}
                    </h2>
                    <p className="text-xs text-gray-400 font-medium">
                      {themeStep === 'selecting' ? (language === 'en' ? 'Select your store infrastructure' : (language === 'ar' ? 'اختر بنية متجرك التحتية' : 'בחר את תשתית החנות שלך')) :
                        (language === 'en' ? 'Processing global edge propagation' : (language === 'ar' ? 'معالجة النشر العالمي' : 'מעבד הפצה גלובלית'))}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setThemeStep('idle')}
                  className="p-3 hover:bg-gray-100 rounded-full text-gray-400 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-10 overflow-y-auto flex-1 custom-scrollbar">
                {themeStep === 'selecting' && (
                  <div className="space-y-10">
                    <ThemeSelection
                      onSelect={(id) => setSelectedTheme(id)}
                      selectedTheme={selectedTheme}
                    />
                    <div className="flex justify-center pt-6">
                      <button
                        disabled={!selectedTheme}
                        onClick={() => setThemeStep('deploying')}
                        className={clsx(
                          "px-12 py-4 rounded-2xl font-bold text-lg shadow-xl transition-all active:scale-95 flex items-center gap-3",
                          selectedTheme
                            ? "bg-primary text-white shadow-primary/20 hover:bg-primary-dark"
                            : "bg-gray-100 text-gray-400 cursor-not-allowed"
                        )}
                      >
                        <ArrowUpRight size={22} />
                        {language === 'en' ? 'Deploy Global Instance' : (language === 'ar' ? 'نشر النسخة العالمية' : 'פרוס מופע גלובלי')}
                      </button>
                    </div>
                  </div>
                )}

                {themeStep === 'deploying' && (
                  <DeployProcess onComplete={() => setThemeStep('completed')} />
                )}

                {themeStep === 'completed' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-8 shadow-inner">
                      <CheckCircle2 size={48} />
                    </div>
                    <h2 className="text-4xl font-bold text-accent tracking-tighter mb-4">
                      {language === 'en' ? 'Store Ready for Scale' : (language === 'ar' ? 'المتجر جاهز للتوسع' : 'החנות מוכנה לצמיחה')}
                    </h2>
                    <p className="text-gray-400 max-w-md text-lg leading-relaxed mb-10">
                      {language === 'en' ? 'Your Shopify environment has been optimized and deployed. You can now start scaling your global operations.' :
                        (language === 'ar' ? 'تم تحسين ونشر بيئة شوبيفاي الخاصة بك. يمكنك الآن البدء في توسيع عملياتك العالمية.' : 'סביבת השופיפיי שלך עברה אופטימיזציה ונפרסה. כעת תוכל להתחיל להרחיב את הפעילות הגלובלית שלך.')}
                    </p>
                    <button
                      onClick={() => setThemeStep('idle')}
                      className="bg-accent text-white px-12 py-4 rounded-2xl font-bold text-lg shadow-xl transition-all active:scale-95"
                    >
                      {language === 'en' ? 'Return to Dashboard' : (language === 'ar' ? 'العودة إلى لوحة القيادة' : 'חזור ללוח הבקרה')}
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
